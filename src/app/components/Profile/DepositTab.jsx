'use client'
import PaymentMethod from '../PaymentMethod'

const paymentMethods = [
  {
      id: 'usdt_crypto',
      name: 'USDT (Crypto Bot)',
      type: 'crypto',
      icon: '🏆',
      limits: '200-100000',
      status: 'available',
      popular: true
    },
    {
      id: 'freekassa',
      name: 'Freekassa',
      type: 'payment',
      icon: '😊',
      limits: '0.1-100000',
      status: 'popular'
    },
    {
      id: 'sepa',
      name: 'Euro (SEPA/IBAN)',
      type: 'bank',
      icon: '€',
      limits: '10-120000',
      status: 'development'
    },
    {
      id: 'tron',
      name: 'TRON',
      type: 'crypto',
      icon: '€',
      limits: '10-120000',
      status: 'development'
    },
    {
      id: 'tether_polygon',
      name: 'Tether',
      type: 'crypto',
      icon: '€',
      limits: '10-120000',
      status: 'development'
    },
    {
      id: 'tether_erc20',
      name: 'Tether',
      type: 'crypto',
      icon: '€',
      limits: '10-120000',
      status: 'development'
    },
    {
      id: 'bitcoin',
      name: 'Bitcoin',
      type: 'crypto',
      icon: '€',
      limits: '20-120000',
      status: 'development'
    },
    {
      id: 'litecoin',
      name: 'Litecoin',
      type: 'crypto',
      icon: '€',
      limits: '10-220000',
      status: 'development'
    },
    {
      id: 'ethereum',
      name: 'Ethereum',
      type: 'crypto',
      icon: '€',
      limits: '10-120000',
      status: 'development'
    }
]

export default function DepositTab() {
  return (
    <PaymentMethod
      type="deposit"
      title="Депозит"
      methods={paymentMethods}
    />
  )
}