// components/MainMenu.jsx
'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useLocale } from '../contexts/LocaleContext.jsx';

export default function MainMenu() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { t } = useLocale();
  
  const activeTab = searchParams.get('tab') || 'profile';

  const menuItems = [
    {
      key: 'profile',
      label: t('menu.profile'),
      
    },
    {
      key: 'promotions',
      label: t('menu.promotions'),
      
    },
    {
      key: 'deposit',
      label: t('menu.deposit'),
      
    },
    {
      key: 'withdraw',
      label: t('menu.withdraw'),
     
    },
    {
      key: 'settings',
      label: t('menu.settings'),
      
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
    <div className="w-96 mx-auto bg-card p-4 h-fit">
      <h3 className="text-yellow-400 font-semibold mb-6 text-lg text-center">
        {t('menu.title')}
      </h3>
      
      <nav className="space-y-2 flex flex-col items-center">
        {menuItems.map((item) => (
          <button
            key={item.key}
            onClick={() => handleTabChange(item.key)}
            onKeyDown={(e) => handleKeyDown(e, item.key)}
            className={`menu-item w-full text-left max-w-[260px] ${
              activeTab === item.key ? 'active' : ''
            }`}
            aria-current={activeTab === item.key ? 'page' : undefined}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}