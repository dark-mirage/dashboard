'use client'

import PromotionsCard from "../PromotionCard"
import { useLocale } from '../../contexts/LocaleContext.jsx';

export default function PromotionsTab() {
  const { messages } = useLocale();

  return (
    <div className="flex flex-col bg-card gap-3 sm:gap-5 p-2 sm:p-3 border border-[var(--glass-border)] rounded-[16px] sm:rounded-[20px]">
      <h2 className="text-xl sm:text-2xl font-bold text-yellow-400">
        {messages.promo.tabTitle}
      </h2>
      <div className="flex flex-col flex-wrap lg:flex-nowrap sm:flex-row gap-4 sm:gap-[30px]">
        {messages.promo.cards.map((promo, idx) => (
          <PromotionsCard
            key={idx}
            img="/images/bonus.jpg"
            span={promo.span}
            title={promo.title}
            button={promo.button}
          />
        ))}
      </div>
    </div>
  )
}
