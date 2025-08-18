'use client'

import { useState } from 'react'
import { useLocale } from '../../contexts/LocaleContext'
import SettingsCard from '../SettingsCard'
import SettingsForm from '../PersonalInfoForm'

export default function SettingsTab({ userData }) {
  const { messages } = useLocale()
  const [formData, setFormData] = useState({
    email: userData?.email || 'gondgridontdam@gmail.com',
    firstName: userData?.firstName || '',
    lastName: userData?.lastName || '',
    phone: userData?.phone || '9189914566',
    country: userData?.country || messages.settings.germany,
    city: userData?.city || messages.settings.city,
    address: userData?.address || messages.settings.address,
    postalCode: userData?.postalCode || messages.settings.postalCode,
    gender: userData?.gender || messages.settings.gender,
  })

  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    twoFactorAuth: false,
    accountBlock: false
  })

  const handleInputChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleNotificationChange = (key) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  return (
    <div className='flex flex-col lg:flex-row gap-4 lg:gap-[30px]'>
      <div className="flex flex-col bg-card gap-3 sm:gap-5 p-2 sm:p-2.5 border border-[var(--glass-border)] rounded-[16px] sm:rounded-[20px] w-full">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--primary-yellow)]">{messages.settings.personalData}</h2>
        <div className='flex flex-col gap-3 sm:gap-[20px] px-2 py-3 sm:py-4'>
          <SettingsForm
            fields={[
              { 
                name: 'email', 
                label: messages.settings.email, 
                value: userData?.email || 'jklfsfjlka@gmail.com', 
                readOnly: true,
                button: {
                  text: messages.settings.sendCode,
                  onClick: () => {
                    console.log(messages.settings.sendCodeToEmail);
                  }
                }
              },
              { 
                name: 'firstName', 
                label: messages.settings.firstName, 
                value: userData?.firstName || '', 
                placeholder: messages.settings.enterFirstName 
              },
              { 
                name: 'lastName', 
                label: messages.settings.lastName, 
                value: userData?.lastName || '', 
                placeholder: messages.settings.enterLastName 
              },
              { 
                name: 'gender', 
                label: messages.settings.gender, 
                type: 'select', 
                value: userData?.gender || messages.settings.notSpecified, 
                options: [
                  { value: 'male', label: messages.settings.male },
                  { value: 'female', label: messages.settings.female },
                ]
              },
              { 
                name: 'country', 
                label: messages.settings.country, 
                type: 'select', 
                value: userData?.country || messages.settings.germany, 
                options: [
                  { value: 'germany', label: messages.settings.germany },
                  { value: 'france', label: messages.settings.france },
                  { value: 'spain', label: messages.settings.spain },
                  { value: 'italy', label: messages.settings.italy },
                  { value: 'netherlands', label: messages.settings.netherlands },
                  { value: 'belgium', label: messages.settings.belgium },
                  { value: 'austria', label: messages.settings.austria },
                  { value: 'switzerland', label: messages.settings.switzerland },
                  { value: 'sweden', label: messages.settings.sweden },
                  { value: 'denmark', label: messages.settings.denmark },
                ]
              },
              { 
                name: 'city', 
                label: messages.settings.city, 
                value: userData?.city || '', 
                placeholder: messages.settings.city 
              },
              { 
                name: 'address', 
                label: messages.settings.address, 
                value: userData?.address || '', 
                placeholder: messages.settings.address 
              },
              { 
                name: 'postalCode', 
                label: messages.settings.postalCode, 
                value: userData?.postalCode || '', 
                placeholder: messages.settings.postalCode 
              },
              { 
                label: messages.settings.phone, 
                name: 'phone', 
                type: 'text', 
                value: (userData?.phone ?? '94323484').toString() 
              }
            ]}
          />
          <button className='button-yellow bg-card w-full px-3 sm:px-4 py-2 sm:py-[10px] text-[var(--primary-yellow)] text-center text-sm sm:text-base'>
            {messages.settings.saveChanges}
          </button>
          <div className="bg-card p-3 sm:p-4 rounded-xl sm:rounded-2xl w-full">
            <span className="inline-block bg-[var(--primary-yellow)] text-black mb-3 sm:mb-[18px] font-semibold text-xs sm:text-sm px-2 sm:px-3 py-1 rounded">
              {messages.settings.depositLimit}
            </span>
            <div className="flex flex-col xl:flex-row items-center gap-3 sm:gap-4">
              <div className="flex flex-col gap-2 sm:gap-[10px] text-gray-300 items-center w-full sm:w-[70%] rounded-lg sm:rounded-xl">
                <span className='w-full text-xs sm:text-sm'>{messages.settings.depositLimit}</span>
                <input
                  type="number"
                  placeholder="(EUR)"
                  className="flex-1 !w-full px-3 sm:px-5 py-1 sm:py-2 !pr-[15px] sm:!pr-[20px] border border-[rgba(39,39,43,255)] bg-transparent rounded-lg sm:rounded-xl outline-none text-white placeholder-gray-500 text-sm sm:text-base"
                />
              </div>
              <button className="flex justify-center self-center w-full min-w-[250px] xl:w-max sm:w-[40%] px-3 sm:px-5 py-1 sm:py-2 xl:self-end bg-transparent border border-[rgba(39,39,43,255)] rounded-lg sm:rounded-xl text-[var(--primary-yellow)] text-sm sm:text-[18px] button-yellow">
                {messages.settings.saveChanges}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 sm:gap-[20px]">
        <SettingsCard
          badge={messages.settings.subscriptions}
          title=""
          items={[
            {
              label: messages.settings.emailNotifications,
              description: messages.settings.receiveNews,
              type: "switch",
              enabled: false,
            },
          ]}
        />
        <SettingsCard
          badge={messages.settings.security}
          title=""
          items={[
            {
              label: messages.settings.changePassword,
              description: messages.settings.changePasswordDesc,
              type: "button",
              buttonText: messages.settings.change,
            },
            {
              label: messages.settings.kycVerification,
              description: messages.settings.uploadDocuments,
              type: "button",
              buttonText: messages.settings.start,
            },
            {
              label: messages.settings.twoFactorAuth,
              description: messages.settings.accountProtection,
              type: "switch",
              enabled: false,
              className: "border-none",
            },
          ]}
        />
        <SettingsCard
          badge={messages.settings.blocking}
          title=""
          items={[
            {
              label: messages.settings.blockAccount,
              description: messages.settings.blockAccountDesc,
              type: "switch",
              enabled: false,
              className: "border-none",
            },
          ]}
        />
      </div>
    </div>
  )
}