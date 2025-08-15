'use client'

import { useState } from 'react'

export default function DepositTab() {
  const [selectedMethod, setSelectedMethod] = useState(null)
  const [amount, setAmount] = useState('')

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
      limits: 'В РАЗРАБОТКЕ',
      status: 'development'
    },
    {
      id: 'tron',
      name: 'TRON',
      type: 'crypto',
      icon: '⚡',
      limits: '10-120000',
      status: 'development'
    },
    {
      id: 'tether_polygon',
      name: 'Tether',
      type: 'crypto',
      icon: '💎',
      limits: '10-120000',
      status: 'development'
    },
    {
      id: 'tether_erc20',
      name: 'Tether',
      type: 'crypto',
      icon: '💎',
      limits: '10-120000',
      status: 'development'
    },
    {
      id: 'bitcoin',
      name: 'Bitcoin',
      type: 'crypto',
      icon: '₿',
      limits: '20-120000',
      status: 'development'
    },
    {
      id: 'litecoin',
      name: 'Litecoin',
      type: 'crypto',
      icon: '🔆',
      limits: '10-220000',
      status: 'development'
    },
    {
      id: 'ethereum',
      name: 'Ethereum',
      type: 'crypto',
      icon: '💎',
      limits: '10-120000',
      status: 'development'
    }
  ]

  const getMethodBadge = (method) => {
    if (method.popular) return <span className="text-xs bg-yellow-400 text-black px-2 py-1 rounded">Crypto Bot</span>
    if (method.status === 'popular') return <span className="text-xs bg-green-500 text-white px-2 py-1 rounded">Freekassa</span>
    if (method.status === 'development') return <span className="text-xs bg-gray-500 text-white px-2 py-1 rounded">В разработке</span>
    return null
  }

  return (
    <div className="flex flex-col bg-card gap-5 p-2.5 border border-[var(--glass-border)] rounded-[20px]">
      <h2 className="text-2xl font-bold text-yellow-400">Депозит</h2>
      
      {/* Методы пополнения */}
      <div className="grid grid-cols-1 gap-4">
        {paymentMethods.map((method) => (
          <div
            key={method.id}
            onClick={() => method.status !== 'development' && setSelectedMethod(method)}
            className={`p-4 rounded-lg cursor-pointer transition-all ${
              selectedMethod?.id === method.id
                ? 'bg-yellow-400 text-black'
                : method.status === 'development'
                  ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                  : 'bg-card backdrop-blur-md bg-opacity-20 text-white hover:bg-opacity-30'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl">{method.icon}</span>
              {getMethodBadge(method)}
            </div>
            <h4 className="font-semibold mb-1">{method.name}</h4>
            <p className="text-sm opacity-80">{method.limits}</p>
          </div>
        ))}
      </div>

      {/* Форма пополнения */}
      {selectedMethod && (
        <div className="bg-card backdrop-blur-md bg-opacity-20 p-6 rounded-lg">
          <div className="flex items-center space-x-3 mb-6">
            <span className="text-2xl">{selectedMethod.icon}</span>
            <div>
              <h3 className="text-white text-lg font-semibold">{selectedMethod.name} (Crypto Bot)</h3>
              <p className="text-gray-400 text-sm">Минимум: 200 | Максимум: 120000</p>
            </div>
            {getMethodBadge(selectedMethod)}
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-gray-300 text-sm mb-2">Сумма (200 - 120000)</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Введите сумму"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <button className="w-full py-3 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-500 transition-colors">
              Пополнить
            </button>

            <button className="w-full py-2 text-gray-400 hover:text-white transition-colors">
              Отмена
            </button>
          </div>
        </div>
      )}
    </div>
  )
}