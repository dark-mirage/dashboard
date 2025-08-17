'use client';
import PaymentMethod from '../PaymentMethod';
import { useLocale } from '../../contexts/LocaleContext.jsx';

const withdrawMethods = [
  {
    id: 'usdt_trc20',
    name: 'USDT TRC20',
    icon: '💎',
    limits: '10-50000',
    commission: '0%'
  },
  {
    id: 'bitcoin',
    name: 'Bitcoin',
    icon: '₿',
    limits: '20-50000',
    commission: '0.5%'
  },
  {
    id: 'ethereum',
    name: 'Ethereum',
    icon: '💎',
    limits: '20-50000',
    commission: '1%'
  }
];

export default function WithdrawTab() {
  const { messages = {} } = useLocale(); // Добавляем дефолтное значение
  
  // Задаем дефолтные значения для текстов
  const defaultTitle = "Вывод средств";
  
  return (
    <PaymentMethod
      type="withdraw"
      title={messages?.payment?.withdraw?.title || defaultTitle}
      methods={withdrawMethods}
      showBalance={true}
      showWalletInput={true}
    />
  );
}