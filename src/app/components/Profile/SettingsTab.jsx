'use client'

import { useState } from 'react'; // Добавляем импорт useState
import { useDispatch, useSelector } from 'react-redux';
import { useLocale } from '../../contexts/LocaleContext';
import SettingsCard from '../SettingsCard';
import SettingsForm from '../PersonalInfoForm';
import { updateUser, updateUserField } from '../../../store/userSlice';

export default function SettingsTab() {
  const { messages } = useLocale();
  const dispatch = useDispatch();
  
  // Получаем данные пользователя из Redux store
  const userData = useSelector(state => state.user);

  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    twoFactorAuth: false,
    accountBlock: false
  });

  const [saveStatus, setSaveStatus] = useState({
    isSaved: false,
    isSaving: false,
    message: ''
  });

  // Обработчик изменения поля
  const handleInputChange = (field, value) => {
    dispatch(updateUserField({ field, value }));
    // Сбрасываем статус сохранения при изменении данных
    if (saveStatus.isSaved) {
      setSaveStatus({ isSaved: false, isSaving: false, message: '' });
    }
  };

  // Обработчик сохранения изменений
  const handleSaveChanges = async () => {
    setSaveStatus({ isSaved: false, isSaving: true, message: messages.settings.saving || 'Saving...' });
    
    try {
      // Имитация задержки сохранения
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Здесь можно добавить логику сохранения на сервер, если нужно
      console.log('Данные сохранены:', userData);
      
      setSaveStatus({ 
        isSaved: true, 
        isSaving: false, 
        message: messages.settings.savedSuccessfully || 'Changes saved successfully!' 
      });
      
      // Автоматически скрываем сообщение через 3 секунды
      setTimeout(() => {
        setSaveStatus(prev => prev.isSaved ? { isSaved: false, isSaving: false, message: '' } : prev);
      }, 3000);
      
    } catch (error) {
      setSaveStatus({ 
        isSaved: false, 
        isSaving: false, 
        message: messages.settings.saveError || 'Error saving changes' 
      });
    }
  };

  const handleNotificationChange = (key) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Проверяем, были ли изменены данные
  const isDataChanged = () => {
    // Здесь можно добавить логику для проверки изменений
    // Пока просто возвращаем true для демонстрации
    return true;
  };

  return (
    <div className='flex flex-col lg:flex-row gap-4 lg:gap-[30px]'>
      <div className="flex flex-col bg-card gap-3 sm:gap-5 p-2 sm:p-2.5 border border-[var(--glass-border)] rounded-[16px] sm:rounded-[20px] w-full">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--primary-yellow)]">{messages.settings.personalData}</h2>
        
        {/* Статус сохранения */}
        {saveStatus.message && (
          <div className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
            saveStatus.isSaving ? 'bg-blue-500/20 text-blue-300' :
            saveStatus.isSaved ? 'bg-green-500/20 text-green-300' :
            'bg-red-500/20 text-red-300'
          }`}>
            {saveStatus.message}
            {saveStatus.isSaving && (
              <span className="ml-2 animate-pulse">...</span>
            )}
          </div>
        )}

        <div className='flex flex-col gap-3 sm:gap-[20px] px-2 py-3 sm:py-4'>
          <SettingsForm
            fields={[
              { 
                name: 'email', 
                label: messages.settings.email, 
                value: userData.email, 
                // readOnly: true,
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
                value: userData.firstName, 
                placeholder: messages.settings.enterFirstName 
              },
              { 
                name: 'lastName', 
                label: messages.settings.lastName, 
                value: userData.lastName, 
                placeholder: messages.settings.enterLastName 
              },
              { 
                name: 'gender', 
                label: messages.settings.gender, 
                type: 'select', 
                value: userData.gender, 
                options: [
                  { value: 'male', label: messages.settings.male },
                  { value: 'female', label: messages.settings.female },
                ]
              },
              { 
                name: 'country', 
                label: messages.settings.country, 
                type: 'select', 
                value: userData.country, 
                options: [
                  { 
                    value: '', 
                    label: messages.settings.selectCountry || 'Select country' 
                  },
                  { value: 'germany', label: messages.settings.countries.germany },
                  { value: 'france', label: messages.settings.countries.france },
                  { value: 'spain', label: messages.settings.countries.spain },
                  { value: 'italy', label: messages.settings.countries.italy },
                  { value: 'netherlands', label: messages.settings.countries.netherlands },
                  { value: 'belgium', label: messages.settings.countries.belgium },
                  { value: 'austria', label: messages.settings.countries.austria },
                  { value: 'switzerland', label: messages.settings.countries.switzerland },
                  { value: 'sweden', label: messages.settings.countries.sweden },
                  { value: 'denmark', label: messages.settings.countries.denmark },
                ]
              },
              { 
                name: 'city', 
                label: messages.settings.city, 
                value: userData.city, 
                placeholder: messages.settings.city 
              },
              { 
                name: 'address', 
                label: messages.settings.address, 
                value: userData.address, 
                placeholder: messages.settings.address 
              },
              { 
                name: 'postalCode', 
                label: messages.settings.postalCode, 
                value: userData.postalCode, 
                placeholder: messages.settings.postalCode 
              },
              { 
                label: messages.settings.phone, 
                name: 'phone', 
                type: 'text', 
                value: userData.phone 
              }
            ]}
            onInputChange={handleInputChange}
          />
          
          <button 
            className={`button-yellow w-full px-3 sm:px-4 py-2 sm:py-[10px] text-center text-sm sm:text-base transition-all duration-200 ${
              saveStatus.isSaving 
                ? 'bg-gray-500 cursor-not-allowed opacity-70' 
                : saveStatus.isSaved
                ? 'bg-green-600 hover:bg-green-700'
                : 'bg-[var(--primary-yellow)] hover:bg-yellow-500 text-black'
            } rounded-lg font-medium`}
            onClick={handleSaveChanges}
            disabled={saveStatus.isSaving}
          >
            {saveStatus.isSaving ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                {messages.settings.saving || 'Saving...'}
              </div>
            ) : saveStatus.isSaved ? (
              <div className="flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                {messages.settings.saved || 'Saved!'}
              </div>
            ) : (
              messages.settings.saveChanges
            )}
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
  );
}