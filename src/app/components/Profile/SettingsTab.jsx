'use client'

import { useState } from 'react'
import SettingsCard from '../SettingsCard'
import SettingsForm from '../PersonalInfoForm'

export default function SettingsTab({ userData }) {
  const [formData, setFormData] = useState({
    email: userData?.email || 'gondgridontdam@gmail.com',
    firstName: userData?.firstName || '',
    lastName: userData?.lastName || '',
    phone: userData?.phone || '9189914566',
    country: userData?.country || 'Германия',
    city: userData?.city || 'Город',
    address: userData?.address || 'Адрес',
    postalCode: userData?.postalCode || 'Почтовый индекс',
    gender: userData?.gender || 'пол',
  })

  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    twoFactorAuth: false,
    accountBlock: false
  })

  const handleInputChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleNotificationChange = (key) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  return (
    <div className='flex gap-[30px]'>
    <div className="flex flex-col bg-card gap-5 p-2.5 border border-[var(--glass-border)] rounded-[20px] w-full">
      <h2 className="text-2xl font-bold text-yellow-400">Личные данные</h2>
      <div>
        <SettingsForm
          fields={[
            { 
              name: 'email', 
              label: 'Электронная почта', 
              value: userData?.email || '', 
              readOnly: true,
              button: {
                text: 'Отправить код',
                onClick: () => {
                  console.log('Отправка кода на email');
                }
              }
            },
            { name: 'firstName', label: 'Имя', value: userData?.firstName || '', placeholder: 'Введите ваше имя' },
            { name: 'lastName', label: 'Фамилия', value: userData?.lastName || '', placeholder: 'Введите вашу фамилию' },
            { name: 'gender', label: 'Пол', type: 'select', value: userData?.gender || 'Не указано', options: [] },
            { name: 'country', label: 'Страна', type: 'select', value: userData?.country || 'Германия', options: [] },
            { name: 'city', label: 'Город', value: userData?.city || '', placeholder: 'Город' },
            { name: 'address', label: 'Адрес', value: userData?.address || '', placeholder: 'Адрес' },
            { name: 'postalCode', label: 'Почтовый индекс', value: userData?.postalCode || '', placeholder: 'Почтовый индекс' },
            { label: 'Телефон', name: 'phone', type: 'text', value: (userData?.phone ?? 'Телефон').toString() }
          ]}
        />
        <button>Сохранить изменения</button>
        <div className="bg-[#1a1a1d] p-4 rounded-2xl border border-gray-700 w-full max-w-2xl">
          {/* Жёлтая метка */}
          <span className="inline-block bg-yellow-400 text-black font-semibold text-sm px-3 py-1 rounded">
            Лимит на депозит (EUR)
          </span>

          {/* Поле ввода и кнопка */}
          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center w-full bg-[#1a1a1d] border border-gray-700 rounded-xl px-4 py-2 text-white">
              <input
                type="number"
                placeholder="Лимит на депозит (EUR)"
                className="flex-1 bg-transparent outline-none text-white placeholder-gray-500"
              />
              <span className="text-gray-400 ml-2">EUR</span>
            </div>

            <button className="px-5 py-2 bg-transparent border border-gray-700 rounded-xl text-yellow-400 font-semibold hover:bg-yellow-500 hover:text-black transition">
              Сохранить изменения
            </button>
          </div>
        </div>
      </div>

    </div>
    <div className="flex flex-col gap-[20px] py-6">
      <SettingsCard
        badge="Подписки"
        title=""
        items={[
          {
            label: "Уведомления на email",
            description: "Получать новости и акции",
            type: "switch",
            enabled: false,
          },
        ]}
      />

      <SettingsCard
        badge="Безопасность"
        title=""
        items={[
          {
            label: "Измените ваш пароль",
            description: "Измените ваш пароль",
            type: "button",
            buttonText: "Изменить",
          },
          {
            label: "KYC верификация",
            description: "Загрузите документы для подтверждения личности",
            type: "button",
            buttonText: "Начать",
          },
          {
            label: "Двухфакторная аутентификация",
            description: "Защита аккаунта и транзакций",
            type: "switch",
            enabled: false,
          },
        ]}
      />

      <SettingsCard
        badge="Блокировка"
        title=""
        items={[
          {
            label: "Заблокировать аккаунт",
            description: "Заблокировать аккаунт и запретить депозиты",
            type: "switch",
            enabled: false,
          },
        ]}
      />
    </div>
  </div>
  )
}
