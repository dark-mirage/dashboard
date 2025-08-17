'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useLocale } from '../contexts/LocaleContext.jsx';

export default function MainMenu() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { messages = {} } = useLocale(); // Дефолтное значение {}

  const activeTab = searchParams.get('tab') || 'profile';

  // Дефолтные значения для пунктов меню
  const defaultMenuItems = {
    profile: 'Профиль',
    promotions: 'Акции',
    deposit: 'Пополнение',
    withdraw: 'Вывод',
    settings: 'Настройки'
  };

  const menuItems = [
    {
      key: 'profile',
      icon: '👤',
      label: messages?.menu?.profile || defaultMenuItems.profile
    },
    {
      key: 'promotions',
      icon: '🎁',
      label: messages?.menu?.promotions || defaultMenuItems.promotions
    },
    {
      key: 'deposit',
      icon: '💳',
      label: messages?.menu?.deposit || defaultMenuItems.deposit
    },
    {
      key: 'withdraw',
      icon: '💸',
      label: messages?.menu?.withdraw || defaultMenuItems.withdraw
    },
    {
      key: 'settings',
      icon: '⚙️',
      label: messages?.menu?.settings || defaultMenuItems.settings
    }
  ];

  const handleTabChange = (tabKey) => {
    router.push(`/profile?tab=${tabKey}`);
  };

  const handleKeyDown = (e, tabKey) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleTabChange(tabKey);
    }
  };

  return (
    <div className="menu smx-auto bg-card p-4 h-fit">
      <h3 className="text-yellow-400 font-semibold !mb-[18px] text-lg text-center">
        {messages['menu.title']}
      </h3>

      <nav className="space-y-2 flex flex-col items-center">
        {menuItems.map((item) => (
          <button
            key={item.key}
            onClick={() => handleTabChange(item.key)}
            onKeyDown={(e) => handleKeyDown(e, item.key)}
            className={`menu-item bg-card px-[20px] py-[10px] !rounded-[20px] flex gap-[10px]  w-full text-left max-w-[260px] ${
              activeTab === item.key ? 'active' : ''
            }`}
            aria-current={activeTab === item.key ? 'page' : undefined}
          >
            {item.icon}
            <span className="text-[18px]">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
