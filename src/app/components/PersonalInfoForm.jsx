'use client'

import { useState } from 'react'

export default function SettingsForm({ fields }) {
  const [formData, setFormData] = useState(
    fields.reduce((acc, field) => {
      acc[field.name] = field.value || ''
      return acc
    }, {})
  )

  const handleInputChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  if (!fields || fields.length === 0) return null

  const firstField = fields[0]
  const restFields = fields.slice(1)

  return (
    <form className="bg-card backdrop-blur-md bg-opacity-20 p-6 rounded-lg">
      <div className="grid grid-cols-1 gap-6">
        {/* Первый элемент на всю ширину */}
      <div>
        <label className="block text-gray-300 text-sm mb-2">{firstField.label}</label>
        <div className="flex gap-2 items-center">
          <input
            type={firstField.type || 'text'}
            name={firstField.name}
            value={formData[firstField.name]}
            onChange={handleInputChange}
            placeholder={firstField.placeholder || ''}
            className="flex-1 px-3 py-2 bg-[#1a1a1d] border border-gray-600 rounded text-white placeholder-gray-400"
            readOnly={firstField.readOnly || false}
          />
          {firstField.button && (
            <button
              onClick={firstField.button.onClick}
              className="px-4 py-2 bg-yellow-400 text-black rounded font-semibold hover:bg-yellow-500"
            >
              {firstField.button.text}
            </button>
          )}
        </div>
      </div>


        {/* Остальные элементы в две колонки */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {restFields.map(field => (
            <div key={field.name}>
              <label className="block text-gray-300 text-sm mb-2">{field.label}</label>
              {field.type === 'select' ? (
                <select
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded text-white"
                >
                  {field.options?.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type || 'text'}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                  placeholder={field.placeholder || ''}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded text-white placeholder-gray-400"
                />
              )}
              {field.button && (
                <button
                  onClick={field.button.onClick}
                  className="px-4 py-2 bg-yellow-400 text-black rounded font-semibold hover:bg-yellow-500"
                >
                  {field.button.text}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </form>
  )
}
