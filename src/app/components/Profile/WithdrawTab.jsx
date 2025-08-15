'use client'

import { useState } from 'react'

export default function WithdrawTab() {
  const [selectedMethod, setSelectedMethod] = useState(null)
  const [amount, setAmount] = useState('')
  const [wallet, setWallet] = useState('')

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
  ]

  return (
    <div className="flex flex-col bg-card gap-5 p-2.5 border border-[var(--glass-border)] rounded-[20px]">
      <h2 className="text-2xl font-bold text-yellow-400">Вывод средств</h2>
      
      {/* Доступный баланс */}
      <div className="bg-card backdrop-blur-md bg-opacity-20 p-6 rounded-lg">
        <h3 className="text-gray-400 text-sm mb-2">Доступно для вывода</h3>
        <div className="text-white text-2xl font-bold">0.00 €</div>
      </div>

      {/* Методы вывода */}
      <div className="grid grid-cols-1 gap-4">
        {withdrawMethods.map((method) => (
          <div
            key={method.id}
            onClick={() => setSelectedMethod(method)}
            className={`p-4 rounded-lg cursor-pointer transition-all ${
              selectedMethod?.id === method.id
                ? 'bg-yellow-400 text-black'
                : 'bg-card backdrop-blur-md bg-opacity-20 text-white hover:bg-opacity-30'
            }`}
          >
            <div className="text-center">
              <div className="text-2xl mb-2">{method.icon}</div>
              <h4 className="font-semibold mb-1">{method.name}</h4>
              <p className="text-sm opacity-80">{method.limits}</p>
              <p className="text-xs opacity-60 mt-1">Комиссия: {method.commission}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Форма вывода */}
      {selectedMethod && (
        <div className="bg-card backdrop-blur-md bg-opacity-20 p-6 rounded-lg">
          <h3 className="text-white text-lg font-semibold mb-6">
            Вывод на {selectedMethod.name}
          </h3>

          <div className="space-y-4">
            <div>
              <label className="block text-gray-300 text-sm mb-2">Адрес кошелька</label>
              <input
                type="text"
                value={wallet}
                onChange={(e) => setWallet(e.target.value)}
                placeholder="Введите адрес кошелька"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div>
              <label className="block text-gray-300 text-sm mb-2">
                Сумма ({selectedMethod.limits})
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Введите сумму"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div className="bg-gray-800 p-4 rounded">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400">К выводу:</span>
                <span className="text-white">{amount || '0.00'} €</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Комиссия ({selectedMethod.commission}):</span>
                <span className="text-white">
                  {amount ? (parseFloat(amount) * 0.005).toFixed(2) : '0.00'} €
                </span>
              </div>
            </div>

            <button className="w-full py-3 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-500 transition-colors">
              Вывести средства
            </button>
          </div>
        </div>
      )}
    </div>
  )
}