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
      
      {/* Баланс */}
      <div className="bg-[rgba(37,37,40,255)] backdrop-blur-md bg-opacity-20 p-6 rounded-lg">
        <h3 className="text-gray-400 text-sm mb-2">Доступно для вывода</h3>
        <div className="text-white text-2xl font-bold">0.00 €</div>
      </div>

      {/* Методы вывода */}
      <div className="grid grid-cols-3 gap-4">
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
            <div className="flex flex-col items-center">
              <div className="text-2xl mb-2">{method.icon}</div>
              <h4 className="font-semibold mb-1">{method.name}</h4>
              <p className="text-sm opacity-80">{method.limits}</p>
              <p className="text-xs opacity-60 mt-1">Комиссия: {method.commission}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Форма */}
      {selectedMethod && (
        <div className="bg-[rgba(37,37,40,255)] backdrop-blur-md bg-opacity-20 p-6 rounded-lg">
          <h3 className="text-yellow-400 text-lg font-semibold mb-6">
            Вывод на {selectedMethod.name}
          </h3>

          <div className="space-y-4">
            {/* Адрес */}
            <input
              type="text"
              value={wallet}
              onChange={(e) => setWallet(e.target.value)}
              placeholder="Введите адрес кошелька"
              className="w-full px-4 py-3 bg-[rgba(29,29,34,255)] border border-[rgba(58,56,53,255)] rounded-[18px] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            {/* Сумма */}
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder={`Сумма (${selectedMethod.limits})`}
              className="w-full px-4 py-3 bg-[rgba(29,29,34,255)] border border-[rgba(58,56,53,255)] rounded-[18px] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            {/* Инфо */}
            <div className="bg-[rgba(29,29,34,255)] border border-[rgba(58,56,53,255)] p-4 rounded-[18px] text-sm">
              <div className="flex justify-between mb-2">
                <span className="text-gray-400">К выводу:</span>
                <span className="text-white">{amount || '0.00'} €</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Комиссия ({selectedMethod.commission}):</span>
                <span className="text-white">
                  {amount ? (parseFloat(amount) * parseFloat(selectedMethod.commission) / 100 || 0).toFixed(2) : '0.00'} €
                </span>
              </div>
            </div>

            {/* Кнопки */}
            <button className="w-full px-4 py-3 bg-[rgba(29,29,34,255)] border border-[rgba(58,56,53,255)] rounded-[18px] button-yellow">
              Вывести средства
            </button>

            <button
              onClick={() => setSelectedMethod(null)}
              className="w-full px-4 py-3 bg-[rgba(29,29,34,255)] border border-[rgba(58,56,53,255)] rounded-[18px] button-yellow"
            >
              Отмена
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
