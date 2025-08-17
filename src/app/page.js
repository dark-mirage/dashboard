

"use client";
import Header from './components/Header.jsx';
import { useSearchParams } from 'next/navigation';
import MainMenu from './components/MainMenu.jsx';
import DashboardTab from './components/Profile/DashboardTab.jsx';
import DepositTab from './components/Profile/DepositTab.jsx';
import PromotionsTab from './components/Profile/PromotionsTab.jsx';
import WithdrawTab from './components/Profile/WithdrawTab.jsx';
import SettingsTab from './components/Profile/SettingsTab.jsx';

export default function ProfileLayout() {
  const searchParams = useSearchParams();
  const tab = searchParams.get('tab') || 'profile';

  const renderTab = () => {
    switch (tab) {
      case 'profile':
        return <DashboardTab />;
      case 'promotions':
        return <PromotionsTab />;
      case 'deposit':
        return <DepositTab />;
      case 'withdraw':
        return <WithdrawTab />;
      case 'settings':
        return <SettingsTab />;
      default:
        return <DashboardTab />;
    }
  };
   return (
      <>
        <Header />
        <main className='flex gap-[20px] pt-[100px] '>
          <MainMenu />
          <div className="flex-1 p-4 bg-card"> 
            {renderTab()}
          </div>
        </main>
      </>
    );
}
