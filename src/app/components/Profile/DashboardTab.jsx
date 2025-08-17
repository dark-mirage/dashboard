'use client'
import ProfileCard from '../ProfileCard.jsx'
import { useState } from 'react'
import { useLocale } from '../../contexts/LocaleContext.jsx';


export default function DashboardTab() {
  const [copied, setCopied] = useState(false)
  const { messages } = useLocale();
  const myUserData = {
    username: messages.userData.username,
    phone: '+9189914566',
    country: messages.userData.country,
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
    <div className="flex flex-col bg-card gap-3 sm:gap-5 p-2 sm:p-2.5 border border-[var(--glass-border)] rounded-[16px] sm:rounded-[20px]">
      <h2 className="text-xl sm:text-2xl font-bold text-yellow-400">{messages.dashboard.personalAccount}</h2>

      <div className="grid grid-cols-1 gap-4 sm:gap-6">
        <ProfileCard
          items={[
            { label: `${messages.dashboard.username}`, value: myUserData.username },
            { label: `${messages.dashboard.country}`, value: myUserData.country },
            { label: `${messages.dashboard.phone}`, value: myUserData.phone },
            { label: `${messages.dashboard.loyaltyLevel}`, value: myUserData.loyaltyLevel },
            { 
              label: `${messages.dashboard.accountCurrency}`, 
              value: `€ ${myUserData.currency} (${myUserData.currency})`,
              valueClassName: 'text-base sm:text-lg'
            },
            { label: `${messages.dashboard.loyaltyPoints}`, value: `${myUserData.loyaltyPoints} ❤️` },
          ]}
          gridCols="1 sm:2"
        />
      </div>

      {/* Балансы */}
      <div className="grid grid-cols-1 gap-3 sm:gap-4">
        <ProfileCard
          items={[
            { 
              label: `${messages.dashboard.realBalance}`, 
              value: `${myUserData.mainBalance.toFixed(2)} €`,
              valueClassName: 'text-lg sm:text-xl font-semibold',
              cardClassName: "bg-[rgba(45,38,31,1)] border border-[rgba(48,43,29,1)]"
            },
            { 
              label: `${messages.dashboard.bonusBalance}`, 
              value: `${myUserData.bonusBalance.toFixed(2)} €`,
              valueClassName: 'text-lg sm:text-xl font-semibold',
              cardClassName: "bg-[rgba(45,38,31,1)] border border-[rgba(48,43,29,1)]"
            },
            { 
              label: `${messages.dashboard.fs}`, 
              value: `${myUserData.bonusBalance.toFixed(0)}`,
              valueClassName: 'text-lg sm:text-xl font-semibold',
              cardClassName: "bg-[rgba(45,38,31,1)] border border-[rgba(48,43,29,1)]"
            }
          ]}
          gridCols="1 sm:3"
        />
      </div>

      <ProfileCard
        items={[
          {
            label: `${messages.dashboard.progressToLevel}`,
            valueClassName: 'text-lg sm:text-xl font-semibold'
          }
        ]}
        gridCols="1"
      />
        
      <div className="flex flex-col bg-[var(--element-color)] px-3 sm:px-5 py-3 sm:py-[14px] rounded-[8px] sm:rounded-[10px] gap-2 sm:gap-[8px]">
        <h4 className="text-gray-400 text-xs sm:text-sm">{messages.dashboard.referralLink}</h4>
        <div className='flex flex-col sm:flex-row gap-2 sm:gap-[10px]'>
          <input
            type="text"
            value={myUserData.referralLink}
            readOnly
            className="flex-1 bg-[rgba(29,29,34,255)] px-2 sm:px-3 py-1 sm:py-2 border border-gray-600 rounded-[10px] sm:rounded-[12px] text-white text-xs sm:text-sm input-glass"
          />
          <button
            onClick={copyReferralLink}
            className="px-3 sm:px-4 py-1 sm:py-2 bg-[rgba(29,29,34,255)] text-black rounded font-semibold text-sm sm:text-base button-yellow"
          >
            {copied ? messages.dashboard.copied : messages.dashboard.copy}
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:gap-[18px] bg-[var(--element-color)] px-2 sm:px-3 py-3 sm:py-[14px] pb-4 sm:pb-[20px] rounded-[8px] sm:rounded-[10px] items-center mb-2 sm:mb-4">
        <h4 className="w-full text-left text-yellow-400 text-base sm:text-lg">{messages.dashboard.transactionHistory}</h4>
        <div className="flex flex-col sm:flex-row justify-between bg-[#3b3a3e] px-2 py-2 sm:py-[10px] rounded-[8px] sm:rounded-[10px] w-full gap-2 sm:gap-0 sm:space-x-2">
          <label className='flex flex-col sm:flex-row gap-1 sm:gap-[10px] text-xs sm:text-sm'>
            <span className='flex items-center'>{messages.dashboard.type}</span>
            <select className="py-1 sm:py-[10px] px-[0px] text-[14px] sm:text-[16px] text-center text-yellow-400 rounded-[16px] sm:rounded-[20px] w-full sm:w-[80px] bg-[rgba(38,38,43,255)] border border-gray-600 text-white">
              <option value="all">{messages.dashboard.all}</option>
              <option value="deposit">{messages.dashboard.deposit}</option>
              <option value="withdraw">{messages.dashboard.withdraw}</option>
            </select>
          </label>
          <label className='flex flex-col sm:flex-row gap-1 sm:gap-[10px] text-xs sm:text-sm'>
            <span className='flex items-center'>{messages.dashboard.sort}</span>
            <select className="py-1 sm:py-[10px] px-[0px] text-[14px] sm:text-[16px] text-center text-yellow-400 rounded-[16px] sm:rounded-[20px] w-full bg-[rgba(38,38,43,255)] border border-gray-600 text-white">
              <option value="date_desc">{messages.dashboard.sortDesc}</option>
              <option value="date_asc">{messages.dashboard.sortAsc}</option>
            </select>
          </label>
        </div>
        <div className="text-center text-gray-400 text-sm sm:text-base">
          {messages.dashboard.noTransactions}
        </div>
      </div>
    </div>
  )
}