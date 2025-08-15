'use client'

import PromotionsCard from "../PromotionCard"

export default function PromotionsTab() {
  const promotions = [
    {
      id: 1,
      title: 'Приветственный бонус - 150%',
      description: 'Минимальная сумма депозита 200',
      percentage: '150%',
      isActive: true
    },
    {
      id: 2,
      title: 'Приветственный бонус - 50%',
      description: 'Минимальная сумма депозита 200',
      percentage: '50%',
      isActive: true
    }
  ]

  return (
    <div className="flex flex-col bg-card gap-5 p-3 border border-[var(--glass-border)] rounded-[20px]">
      <h2 className="text-2xl font-bold text-yellow-400">Доступные бонусы</h2>
      <div className="flex gap-[30px]">
        <PromotionsCard
          img="/bonus-image.jpg"
          span="150% + 0 FS"
          title="Приветственный бонус - 150%"
          button="Активировать"
        />
        <PromotionsCard
          img="/bonus-image.jpg"
          span="150% + 0 FS"
          title="Приветственный бонус - 150%"
          button="Активировать"
        />
      </div>
    </div>
    
  )
}
