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
      <div className='flex flex-col gap-[20px] bg-card px-2 py-4'>
        <SettingsForm
          fields={[
            { 
              name: 'email', 
              label: 'Электронная почта', 
              value: userData?.email || 'jklfsfjlka@gmail.com', 
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
            { 
              name: 'gender', 
              label: 'Пол', 
              type: 'select', 
              value: userData?.gender || 'Не указано', 
              options: [
                { value: 'male', label: 'Мужской' },
                { value: 'female', label: 'Женский' },
              ]
            },
            { 
              name: 'country', 
              label: 'Страна', 
              type: 'select', 
              value: userData?.country || 'Германия', 
              options: [
                { value: 'germany', label: 'Германия' },
                { value: 'france', label: 'Франция' },
                { value: 'spain', label: 'Испания' },
                { value: 'italy', label: 'Италия' },
                { value: 'netherlands', label: 'Нидерланды' },
                { value: 'belgium', label: 'Бельгия' },
                { value: 'austria', label: 'Австрия' },
                { value: 'switzerland', label: 'Швейцария' },
                { value: 'sweden', label: 'Швеция' },
                { value: 'denmark', label: 'Дания' },
              ]
            },
            { name: 'city', label: 'Город', value: userData?.city || '', placeholder: 'Город' },
            { name: 'address', label: 'Адрес', value: userData?.address || '', placeholder: 'Адрес' },
            { name: 'postalCode', label: 'Почтовый индекс', value: userData?.postalCode || '', placeholder: 'Почтовый индекс' },
            { label: 'Телефон', name: 'phone', type: 'text', value: (userData?.phone ?? '94323484').toString() }
          ]}
        />
        <button className='button-yellow bg-card w-full px-4 py-[10px] text-yellow-400 text-center '>Сохранить изменения</button>
        <div className="bg-card p-4 rounded-2xl w-full">


          <span className="inline-block bg-yellow-400 text-black mb-[18px] font-semibold text-sm px-3 py-1 rounded">
            Лимит на депозит (EUR)
          </span>


          <div className="flex items-center gap-4">
            <div className="flex flex-col gap-[10px] text-gray-300 items-center w-[70%] bg-[#1a1a1d] rounded-xl">
              <span className='w-full'>Лимит на депозит</span>
              <input
                type="number"
                placeholder="(EUR)"
                className="flex-1 w-full px-5 py-2 !pr-[20px] border border-[rgba(39,39,43,255)] bg-transparent rounded-xl outline-none text-white placeholder-gray-500"
              />
            </div>

            <button className="flex self-end justify-center w-[40%] px-5 py-2 bg-transparent border border-[rgba(39,39,43,255)] rounded-xl text-yellow-400 font-[18px] button-yellow">
              Сохранить изменения
            </button>
          </div>
        </div>
      </div>

    </div>
    <div className="flex flex-col gap-[20px]">
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
            className: "border-none",
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
            className: "border-none",
          },
        ]}
      >

      </SettingsCard>
    </div>
  </div>
  )
}
