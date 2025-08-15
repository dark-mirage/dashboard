'use client'
import ProfileCard from '../ProfileCard.jsx'
import { useState } from 'react'

export default function DashboardTab() {
  const [copied, setCopied] = useState(false)

  const myUserData = {
    username: 'user1',
    phone: '+9189914566',
    country: 'Германия',
    loyaltyLevel: '1',
    currency: 'EUR',
    loyaltyPoints: 0,
    mainBalance: 0,
    bonusBalance: 0,
    referralLink: 'https://referral.link/timur'
  }

  const copyReferralLink = async () => {
    try {
      await navigator.clipboard.writeText(myUserData.referralLink)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Ошибка копирования:', err)
    }
  }

  return (
    <div className="flex flex-col bg-card gap-5 p-2.5 border border-[var(--glass-border)] rounded-[20px]">
      <h2 className="text-2xl font-bold text-yellow-400">Личный кабинет</h2>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
        <ProfileCard
          items={[
            { label: 'Имя пользователя:', value: myUserData.username },
            { label: 'Страна:', value: myUserData.country },
            { label: 'Телефон:', value: myUserData.phone },
            { label: 'Уровень лояльности:', value: myUserData.loyaltyLevel },
            { 
              label: 'Валюта аккаунта', 
              value: `€ ${myUserData.currency} (${myUserData.currency})`,
              valueClassName: 'text-lg'
            },
            { label: 'Очки лояльности:', value: `${myUserData.loyaltyPoints} ❤️` },
          ]}
          gridCols="2"
        />
      </div>

      {/* Балансы */}
      <div className="grid grid-cols-1 gap-4">
        <ProfileCard
          items={[
            { 
              label: 'Реальный баланс', 
              value: `${myUserData.mainBalance.toFixed(2)} €`,
              valueClassName: 'text-xl font-semibold',
            },
            { 
              label: 'Бонусный баланс', 
              value: `${myUserData.bonusBalance.toFixed(2)} €`,
              valueClassName: 'text-xl font-semibold'
            },
            { 
              label: 'FS', 
              value: `${myUserData.bonusBalance.toFixed(0)}`,
              valueClassName: 'text-xl font-semibold'
            }
          ]}
          gridCols="3"
        />
      </div>

      {/* Прогресс */}
      <ProfileCard
        items={[
          {
            label: 'Прогресс до уровня 2',
            value: '50%',
            valueClassName: 'text-xl font-semibold'
          }
        ]}
        gridCols="1"
      />
        
      {/* Реферальная ссылка */}
        <h4 className="text-gray-400 text-sm mb-4">Реферальная ссылка</h4>
        <div className="flex space-x-2">
          <input
            type="text"
            value={myUserData.referralLink}
            readOnly
            className="flex-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded text-white text-sm"
          />
          <button
            onClick={copyReferralLink}
            className="px-4 py-2 bg-yellow-400 text-black rounded font-semibold hover:bg-yellow-500 transition-colors"
          >
            {copied ? 'Скопировано!' : 'Копировать'}
          </button>
        </div>

        <div className="flex justify-between items-center mb-4">
          <h4 className="text-yellow-400 text-lg">История транзакций</h4>
          <div className="flex space-x-2">
            <select className="px-3 py-1 bg-gray-800 border border-gray-600 rounded text-white text-sm">
              <option value="all">Все</option>
              <option value="deposit">Пополнения</option>
              <option value="withdraw">Выводы</option>
            </select>
            <select className="px-3 py-1 bg-gray-800 border border-gray-600 rounded text-white text-sm">
              <option value="date_desc">Сортировка ↓</option>
              <option value="date_asc">Сортировка ↑</option>
            </select>
          </div>
        </div>
        <div className="text-center text-gray-400 py-8">
          Нет транзакций
        </div>
    </div>
  )
}
