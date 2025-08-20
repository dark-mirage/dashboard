'use client'

import { useState } from 'react'
import { useLocale } from '../contexts/LocaleContext.jsx'

const PaymentMethod = ({ 
  type = 'deposit', 
  title = 'Депозит',
  methods = [],
  showBalance = false,
  showWalletInput = false
}) => {
  const { messages } = useLocale()
  const [selectedMethod, setSelectedMethod] = useState(null)
  const [amount, setAmount] = useState('')
  const [wallet, setWallet] = useState('')

  const getMethodBadge = (method) => {
    if (method.popular) return <span className="text-xs bg-yellow-400 text-black px-2 py-1 rounded">{messages.payment.cryptoBot}</span>
    if (method.status === 'popular') return <span className="text-xs bg-yellow-400 text-black px-2 py-1 rounded">{messages.payment.freekassa}</span>
    if (method.status === 'development') return <span className="text-xs bg-gray-500 text-white px-2 py-1 rounded">{messages.payment.inDevelopment}</span>
    return null
  }

  return (
    <div className="flex flex-col bg-card gap-3 sm:gap-5 p-2 sm:p-2.5 border border-[var(--glass-border)] rounded-[16px] sm:rounded-[20px]">
      <h2 className="text-xl sm:text-2xl font-bold text-yellow-400">{messages[title] || title}</h2>
      
      {showBalance && (
        <div className="bg-[rgba(37,37,40,255)] backdrop-blur-md bg-opacity-20 p-4 sm:p-6 rounded-lg">
          <h3 className="text-gray-400 text-xs sm:text-sm mb-1 sm:mb-2">{messages.payment.availableToWithdraw}</h3>
          <div className="text-white text-xl sm:text-2xl font-bold">0.00 €</div>
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
        {methods.map((method) => (
          <div
            key={method.id}
            onClick={() => method.status !== 'development' && setSelectedMethod(method)}
            className={`p-3 sm:p-4 rounded-lg cursor-pointer transition-all ${
              selectedMethod?.id === method.id
                ? 'bg-yellow-400 text-black'
                : method.status === 'development'
                  ? 'bg-card text-[rgba(162,130,30,255)] cursor-not-allowed'
                  : 'bg-card backdrop-blur-md bg-opacity-20 text-white hover:bg-opacity-30'
            }`}
          >
            {type === 'deposit' ? (
              <>
                <div className="flex items-center justify-between mb-1 sm:mb-2">
                  <span className="text-xl sm:text-2xl">{method.icon}</span>
                  {getMethodBadge(method)}
                </div>
                <h4 className="font-semibold text-sm sm:text-base mb-1">{messages[method.name] || method.name}</h4>
                <p className="text-xs sm:text-sm opacity-80">{method.limits}</p>
              </>
            ) : (
              <div className="flex flex-col items-center">
                <div className="text-xl sm:text-2xl mb-1 sm:mb-2">{method.icon}</div>
                <h4 className="font-semibold text-sm sm:text-base mb-1">{messages[method.name] || method.name}</h4>
                <p className="text-xs sm:text-sm opacity-80">{method.limits}</p>
                {method.commission && (
                  <p className="text-xs opacity-60 mt-0.5 sm:mt-1">{messages.payment.commission}: {method.commission}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {selectedMethod && (
        <div className="bg-[rgba(37,37,40,255)] backdrop-blur-md bg-opacity-20 p-4 sm:p-6 rounded-lg">
          <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
            <span className="text-xl sm:text-2xl">{selectedMethod.icon}</span>
            <div>
              <h3 className="text-yellow-400 text-base sm:text-lg font-semibold">
                {type === 'deposit' 
                  ? `${messages[selectedMethod.name] || selectedMethod.name}${selectedMethod.popular ? ` (${messages.payment.cryptoBot})` : ''}` 
                  : `${messages.payment.withdrawTo} ${messages[selectedMethod.name] || selectedMethod.name}`}
              </h3>
              <p className="text-yellow-300 text-xs sm:text-sm">
                {type === 'deposit' ? (
                  <>
                    <span className='text-yellow-200'>{messages.payment.min}:</span> {selectedMethod.limits.split('-')[0]} | 
                    <span className='text-yellow-200'> {messages.payment.max}:</span> {selectedMethod.limits.split('-')[1]}
                  </>
                ) : (
                  `${messages.payment.limits}: ${selectedMethod.limits}`
                )}
              </p>
            </div>
            {type === 'deposit' && getMethodBadge(selectedMethod)}
          </div>

          <div className="space-y-3 sm:space-y-4">
            {showWalletInput && (
              <input
                type="text"
                value={wallet}
                onChange={(e) => setWallet(e.target.value)}
                placeholder={messages.payment.enterWalletAddress}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-[rgba(29,29,34,255)] border border-[rgba(58,56,53,255)] rounded-[14px] sm:rounded-[18px] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm sm:text-base"
              />
            )}

            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder={`${messages.payment.amount} (${selectedMethod.limits})`}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-[rgba(29,29,34,255)] border border-[rgba(58,56,53,255)] rounded-[14px] sm:rounded-[18px] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm sm:text-base"
            />

            {type === 'withdraw' && (
              <div className="bg-[rgba(29,29,34,255)] border border-[rgba(58,56,53,255)] p-3 sm:p-4 rounded-[14px] sm:rounded-[18px] text-xs sm:text-sm">
                <div className="flex justify-between mb-1 sm:mb-2">
                  <span className="text-gray-400">{messages.payment.toWithdraw}:</span>
                  <span className="text-white">{amount || '0.00'} €</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">{messages.payment.commission} ({selectedMethod.commission}):</span>
                  <span className="text-white">
                    {amount ? (parseFloat(amount) * parseFloat(selectedMethod.commission) / 100 || 0).toFixed(2) : '0.00'} €
                  </span>
                </div>
              </div>
            )}

            <button className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-[rgba(29,29,34,255)] border border-[rgba(58,56,53,255)] rounded-[14px] sm:rounded-[18px] button-yellow text-sm sm:text-base">
              {type === 'deposit' ? messages.payment.deposit : messages.payment.withdraw}
            </button>

            <button
              onClick={() => setSelectedMethod(null)}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-[rgba(29,29,34,255)] border border-[rgba(58,56,53,255)] rounded-[14px] sm:rounded-[18px] button-yellow text-sm sm:text-base"
            >
              {messages.payment.cancel}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default PaymentMethod
