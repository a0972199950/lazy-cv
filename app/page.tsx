'use client'

import { useState, useEffect } from 'react'
import { 
  PencilIcon, 
  TrashIcon, 
  CheckIcon, 
  XMarkIcon,
  ClipboardIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  ChevronUpDownIcon,
} from '@heroicons/react/24/outline'
import { getResumes, updateResume, deleteResume, updateResumeStatus } from './actions'
import { Resume } from '@/lib/db/schemas/resume.schema'

type SortKey = 'createdAt' | 'updatedAt'
type SortOrder = 'asc' | 'desc'

// 表頭排序指示圖示
function SortIcon({ active, order }: { active: boolean, order: SortOrder }) {
  if (!active) {
    return <ChevronUpDownIcon className="w-4 h-4 text-slate-400" />
  }
  return order === 'asc'
    ? <ChevronUpIcon className="w-4 h-4 text-indigo-600" />
    : <ChevronDownIcon className="w-4 h-4 text-indigo-600" />
}

function ResumesTable() {
  const [resumes, setResumes] = useState<Resume[]>([])
  const [loading, setLoading] = useState(true)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editData, setEditData] = useState<{ jdUrl: string, company: string }>({ jdUrl: '', company: '' })
  const [searchTerm, setSearchTerm] = useState('')
  const [sortKey, setSortKey] = useState<SortKey | null>(null)
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc')

  // 過濾履歷資料
  const filteredResumes = resumes.filter(resume => 
    (resume.company || '').toLowerCase().includes(searchTerm.toLowerCase())
  )

  // 排序（純前端，未指定時維持後端的建立時間新到舊）
  const getTime = (value: Date | null) => (value ? new Date(value).getTime() : 0)
  const sortedResumes = sortKey
    ? [...filteredResumes].sort((a, b) => {
        const diff = getTime(a[sortKey]) - getTime(b[sortKey])
        return sortOrder === 'asc' ? diff : -diff
      })
    : filteredResumes

  // 切換排序欄位 / 方向
  const toggleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'))
    } else {
      setSortKey(key)
      setSortOrder('desc')
    }
  }

  // 載入資料
  const loadResumes = async (showLoading = false) => {
    if (showLoading) {
      setLoading(true)
    }
    const result = await getResumes()
    if (result.success) {
      setResumes(result.data!)
    } else {
      console.error('Failed to load resumes:', result.error)
    }
    setLoading(false)
  }

  useEffect(() => {
    // 使用立即執行的異步函數來避免直接在 effect 中調用 setState
    const initializeData = async () => {
      await loadResumes()
    }
    
    initializeData()
  }, [])

  // 開始編輯
  const startEdit = (resume: Resume) => {
    setEditingId(resume.id)
    setEditData({ jdUrl: resume.jdUrl || '', company: resume.company || '' })
  }

  // 取消編輯
  const cancelEdit = () => {
    setEditingId(null)
    setEditData({ jdUrl: '', company: '' })
  }

  // 儲存編輯
  const saveEdit = async () => {
    if (!editingId) return
    
    const result = await updateResume(editingId, {
      jdUrl: editData.jdUrl.trim() || '',
      company: editData.company.trim() || ''
    })
    if (result.success) {
      await loadResumes()
      setEditingId(null)
      setEditData({ jdUrl: '', company: '' })
    } else {
      console.error('Failed to update resume:', result.error)
    }
  }

  // 處理鍵盤事件
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      saveEdit()
    } else if (e.key === 'Escape') {
      cancelEdit()
    }
  }

  // 切換面試 / offer 狀態
  const toggleStatus = async (
    resume: Resume,
    field: 'hasInterview' | 'hasOffer',
    checked: boolean
  ) => {
    // 樂觀更新，避免勾選後閃爍
    setResumes((prev) =>
      prev.map((item) => (item.id === resume.id ? { ...item, [field]: checked } : item))
    )

    const result = await updateResumeStatus(resume.id, { [field]: checked })
    if (result.success) {
      await loadResumes()
    } else {
      console.error('Failed to update resume status:', result.error)
      // 失敗時回復原本狀態
      setResumes((prev) =>
        prev.map((item) => (item.id === resume.id ? { ...item, [field]: !checked } : item))
      )
    }
  }

  // 刪除履歷
  const handleDelete = async (id: string) => {
    if (!confirm('確定要刪除這筆履歷記錄嗎？')) return
    
    const result = await deleteResume(id)
    if (result.success) {
      await loadResumes()
    } else {
      console.error('Failed to delete resume:', result.error)
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-slate-900">履歷資料管理</h2>
      </div>

      {/* 搜尋框 */}
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="搜尋公司名稱..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder-slate-600 text-slate-800"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
              title="清除搜尋"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
          )}
        </div>
        {searchTerm && (
          <p className="mt-2 text-sm text-slate-500">
            找到 {filteredResumes.length} 筆包含 &quot;{searchTerm}&quot; 的記錄
          </p>
        )}
      </div>

      {filteredResumes.length === 0 ? (
        <div className="text-center py-12 text-slate-500">
          {searchTerm ? (
            <>
              <p className="text-lg">沒有找到包含 &quot;{searchTerm}&quot; 的履歷資料</p>
              <p className="text-sm">請嘗試其他搜尋關鍵字</p>
            </>
          ) : (
            <>
              <p className="text-lg">目前沒有履歷資料</p>
              <p className="text-sm">點擊上方按鈕新增第一筆履歷記錄</p>
            </>
          )}
        </div>
      ) : (
        <div>
          <table className="w-full table-auto">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="whitespace-nowrap text-left py-3 px-4 font-semibold text-slate-700">公司</th>
                <th className="whitespace-nowrap text-left py-3 px-4 font-semibold text-slate-700">職缺描述連結</th>
                <th className="whitespace-nowrap text-left py-3 px-4 font-semibold text-slate-700">履歷連結</th>
                <th className="whitespace-nowrap text-center py-3 px-4 font-semibold text-slate-700">面試</th>
                <th className="whitespace-nowrap text-center py-3 px-4 font-semibold text-slate-700">Offer</th>
                <th className="whitespace-nowrap text-left py-3 px-4 font-semibold text-slate-700">
                  <button
                    onClick={() => toggleSort('createdAt')}
                    className="inline-flex items-center gap-1 hover:text-slate-900 cursor-pointer"
                    title="點擊切換排序"
                  >
                    建立時間
                    <SortIcon active={sortKey === 'createdAt'} order={sortOrder} />
                  </button>
                </th>
                <th className="whitespace-nowrap text-left py-3 px-4 font-semibold text-slate-700">
                  <button
                    onClick={() => toggleSort('updatedAt')}
                    className="inline-flex items-center gap-1 hover:text-slate-900 cursor-pointer"
                    title="點擊切換排序"
                  >
                    更新時間
                    <SortIcon active={sortKey === 'updatedAt'} order={sortOrder} />
                  </button>
                </th>
                <th className="whitespace-nowrap text-center py-3 px-4 font-semibold text-slate-700">操作</th>
              </tr>
            </thead>
            <tbody>
              {/* 資料行 */}
              {sortedResumes.map((resume) => (
                <tr key={resume.id} className={`border-b border-slate-200 ${editingId === resume.id ? '' : 'hover:bg-slate-50'}`}>
                  <td className="whitespace-nowrap py-3 px-4">
                    {editingId === resume.id ? (
                      <input
                        type="text"
                        value={editData.company}
                        onChange={(e) => setEditData({ ...editData, company: e.target.value })}
                        onKeyDown={handleKeyDown}
                        className="w-full px-3 py-1 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800"
                      />
                    ) : (
                      <span className="font-medium text-slate-900">{resume.company}</span>
                    )}
                  </td>
                  <td className="w-[22rem] max-w-0 whitespace-nowrap py-3 px-4">
                    {editingId === resume.id ? (
                      <input
                        type="url"
                        value={editData.jdUrl}
                        onChange={(e) => setEditData({ ...editData, jdUrl: e.target.value })}
                        onKeyDown={handleKeyDown}
                        className="w-full px-3 py-1 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800"
                      />
                    ) : (
                      resume.jdUrl ? (
                        <a 
                          href={resume.jdUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-indigo-800 hover:text-indigo-900 underline truncate block"
                        >
                          {resume.jdUrl}
                        </a>
                      ) : (
                        <span className="text-slate-400">無連結</span>
                      )
                    )}
                  </td>
                  <td className="whitespace-nowrap py-3 px-4 text-slate-600">
                    <div className="space-y-1">
                      {[
                        { locale: 'zh-TW', label: '中文' },
                        { locale: 'en', label: '英文' },
                        { locale: 'ja', label: '日文' },
                      ].map(({ locale, label }) => (
                        <div key={locale} className="flex items-center justify-between gap-2">
                          <a
                            href={`/${resume.id}/${locale}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-800 hover:text-indigo-900 underline"
                          >
                            {label}
                          </a>
                          <button
                            onClick={() => navigator.clipboard.writeText(`/${resume.id}/${locale}`)}
                            className="text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                            title="複製連結"
                          >
                            <ClipboardIcon className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="whitespace-nowrap py-3 px-4">
                    <div className="flex justify-center">
                      <input
                        type="checkbox"
                        checked={resume.hasInterview}
                        onChange={(e) => toggleStatus(resume, 'hasInterview', e.target.checked)}
                        className="h-4 w-4 cursor-pointer accent-indigo-600 [color-scheme:light]"
                        title="是否有拿到面試"
                      />
                    </div>
                  </td>
                  <td className="whitespace-nowrap py-3 px-4">
                    <div className="flex justify-center">
                      <input
                        type="checkbox"
                        checked={resume.hasOffer}
                        onChange={(e) => toggleStatus(resume, 'hasOffer', e.target.checked)}
                        className="h-4 w-4 cursor-pointer accent-emerald-600 [color-scheme:light]"
                        title="是否有拿到 offer"
                      />
                    </div>
                  </td>
                  <td className="whitespace-nowrap py-3 px-4 text-slate-800">
                    {resume.createdAt ? new Date(resume.createdAt).toLocaleDateString('zh-TW') : '-'}
                  </td>
                  <td className="whitespace-nowrap py-3 px-4 text-slate-800">
                    {resume.updatedAt ? new Date(resume.updatedAt).toLocaleDateString('zh-TW') : '-'}
                  </td>
                  <td className="whitespace-nowrap py-3 px-4">
                    <div className="flex justify-center gap-2">
                      {editingId === resume.id ? (
                        <>
                          <button
                            onClick={saveEdit}
                            className="text-green-600 hover:text-green-800 p-1 cursor-pointer"
                            title="儲存"
                          >
                            <CheckIcon className="w-4 h-4" />
                          </button>
                          <button
                            onClick={cancelEdit}
                            className="text-red-600 hover:text-red-800 p-1 cursor-pointer"
                            title="取消"
                          >
                            <XMarkIcon className="w-4 h-4" />
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => startEdit(resume)}
                            className="text-indigo-600 hover:text-indigo-800 p-1 cursor-pointer"
                            title="編輯"
                          >
                            <PencilIcon className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(resume.id)}
                            className="text-red-600 hover:text-red-800 p-1 cursor-pointer"
                            title="刪除"
                          >
                            <TrashIcon className="w-4 h-4" />
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <main className="flex min-h-screen flex-col items-center justify-center px-6 py-12">

        {/* John Hsieh 總攬履歷連結 */}
        <div className="max-w-[1536px] w-full mx-auto flex justify-end">
          <a
            href="/john-hsieh/zh-TW"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-indigo-700 transition-colors"
          >
            查看 John Hsieh 總攬履歷
          </a>
        </div>

        {/* Resume Management Table */}
        <div className="max-w-[1536px] w-full mx-auto mt-6">
          <ResumesTable />
        </div>

      </main>
    </div>
  );
}
