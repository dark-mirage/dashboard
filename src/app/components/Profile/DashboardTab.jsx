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
              cardClassName: "bg-[rgba(45,38,31,1)] border border-[rgba(48,43,29,1)]"
            },
            { 
              label: 'Бонусный баланс', 
              value: `${myUserData.bonusBalance.toFixed(2)} €`,
              valueClassName: 'text-xl font-semibold',
              cardClassName: "bg-[rgba(45,38,31,1)] border border-[rgba(48,43,29,1)]"
            },
            { 
              label: 'FS', 
              value: `${myUserData.bonusBalance.toFixed(0)}`,
              valueClassName: 'text-xl font-semibold',
              cardClassName: "bg-[rgba(45,38,31,1)] border border-[rgba(48,43,29,1)]"
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
            valueClassName: 'text-xl font-semibold'
          }
        ]}
        gridCols="1"
      />
        
        <div className="flex flex-col bg-[var(--element-color)] px-5 py-[14px] rounded-[10px] gap-[8px] space-x-2">
        <h4 className="text-gray-400 text-sm ">Реферальная ссылка</h4>
          <div className='flex gap-[10px]'>
            <input
              type="text"
              value={myUserData.referralLink}
              readOnly
              className="flex-1 bg-[rgba(29,29,34,255)] px-3 py-2 border border-gray-600 rounded-[12px] text-white text-sm input-glass"
            />
            <button
              onClick={copyReferralLink}
              className="px-4 py-2 bg-[rgba(29,29,34,255)] text-black rounded font-semibold button-yellow"
            >
              {copied ? 'Скопировано!' : 'Копировать'}
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-[18px] bg-[var(--element-color)] px-3 py-[14px] pb-[20px] rounded-[10px] items-center mb-4">
          <h4 className="w-full text-left text-yellow-400 text-lg">История транзакций</h4>
          <div className="flex justify-between bg-[#3b3a3e] px-2 py-[10px] rounded-[10px] w-full space-x-2">
            <label className='flex gap-[10px]'>
              <span className='flex items-center'>Тип:</span>
              <select className="py-[10px] px-[0px] text-[16px] text-center text-yellow-400 rounded-[20px] w-[80px] py-1 bg-[rgba(38,38,43,255)] border border-gray-600 rounded text-white text-sm">
                <option value="all">Все</option>
                <option value="deposit">Пополнения</option>
                <option value="withdraw">Выводы</option>
              </select>
            </label>
            <label className='flex gap-[10px]'>
              <span className='flex items-center'>Сортировка:</span>
              <select className="py-[10px] px-[0px] text-[16px] text-center text-yellow-400 rounded-[20px] w-full py-1 bg-[rgba(38,38,43,255)] border border-gray-600 rounded text-white text-sm">
                <option value="date_desc">Сортировка ↓</option>
                <option value="date_asc">Сортировка ↑</option>
              </select>
            </label>
          </div>
          <div className="text-center text-gray-400">
            Нет транзакций
          </div>
        </div>
    </div>
  )
}
