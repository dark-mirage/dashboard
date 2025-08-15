'use client'
import { useState, useEffect } from 'react'
import MainMenu from '../MainMenu'
import DashboardTab from './DashboardTab'
import PromotionsTab from './PromotionsTab'
import DepositTab from './DepositTab'
import WithdrawTab from './WithdrawTab'
import SettingsTab from './SettingsTab'

export default function ProfileLayout() {
  const [activeTab, setActiveTab] = useState('profile') // Всегда начинаем с первого таба
  const [userData, setUserData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setIsLoading(true)
        setError(null)
        setUserData({
          username: 'usr1',
          phone: '9189914566',
          country: 'Германия',
          loyaltyLevel: 1,
          mainBalance: 0.00,
          bonusBalance: 0.00,
          currency: 'EUR',
          loyaltyPoints: 0,
          referralLink: 'https://progdev.tech/register?ref=m0B3MoSwRbY'
        })
      } catch (error) {
        console.error('Ошибка загрузки данных пользователя:', error)
        setError('Не удалось загрузить данные')
      } finally {
        setIsLoading(false)
      }
    }
    fetchUserData()
  }, [])

  const handleTabChange = (tab) => {
    setActiveTab(tab) // Меняем только состояние, URL не трогаем
  }

  const renderTabContent = () => {
    if (error) return <div className="text-red-500">{error}</div>
    if (isLoading) return <div>Загрузка...</div>

    switch (activeTab) {
      case 'dashboard': return <DashboardTab userData={userData} />
      case 'promotions': return <PromotionsTab userData={userData} />
      case 'deposit': return <DepositTab userData={userData} />
      case 'withdraw': return <WithdrawTab userData={userData} />
      case 'settings': return <SettingsTab userData={userData} />
    }
  }

  return (
    <>
      <MainMenu activeTab={activeTab} onTabChange={handleTabChange} />
      <div className="flex-1 p-6">
        {renderTabContent()}
      </div>
    </>
  )
}
