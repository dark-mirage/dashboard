'use client'
import { useState } from "react";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [currency, setCurrency] = useState("");
  const [phoneCode, setPhoneCode] = useState("+7");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async () => {
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({ name, email, password, country, currency, phoneCode, phoneNumber }),
        headers: { "Content-Type": "application/json" }
      });
      const data = await res.json();
      setMessage(data.message || data.error);
    } catch (err) {
      setMessage("Ошибка сети");
      console.error(err);
    }
  };

  return (
    <div className="w-full flex justify-center items-center p-4 min-h-screen">
      <div className="w-full max-w-md">
        <div className="bg-card rounded-2xl md:rounded-[30px] flex flex-col gap-2.5 backdrop-blur-sm border border-gray-700/50 p-6 md:p-8 shadow-2xl">
          <h2 className="text-xl md:text-2xl font-bold text-yellow-500 text-center mb-6 md:mb-8">Регистрация</h2>
          
          <div className="space-y-3 md:space-y-4">
            <div>
              <input 
                placeholder="Имя пользователя" 
                value={name} 
                onChange={e => setName(e.target.value)}
                className="w-full bg-card rounded px-4 py-2 md:py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors text-sm md:text-base"
              />
            </div>
            
            <div>
              <input 
                placeholder="Email" 
                value={email} 
                onChange={e => setEmail(e.target.value)}
                className="w-full bg-card rounded px-4 py-2 md:py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors text-sm md:text-base"
              />
            </div>
            
            <div>
              <input 
                placeholder="Пароль" 
                type="password" 
                value={password} 
                onChange={e => setPassword(e.target.value)}
                className="w-full bg-card rounded px-4 py-2 md:py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors text-sm md:text-base"
              />
            </div>
            
            <div>
              <select 
                value={country} 
                onChange={e => setCountry(e.target.value)}
                className="w-full bg-card text-yellow-400 rounded px-4 py-2 md:py-3 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors appearance-none text-sm md:text-base"
              >
                <option value="" className="text-gray-400">Страна</option>
                <option value="uz">Узбекистан</option>
                <option value="ru">Россия</option>
                <option value="kz">Казахстан</option>
                <option value="kg">Кыргызстан</option>
                <option value="tj">Таджикистан</option>
              </select>
            </div>
            
            <div>
              <select 
                value={currency} 
                onChange={e => setCurrency(e.target.value)}
                className="w-full bg-card text-yellow-400 rounded px-4 py-2 md:py-3 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors appearance-none text-sm md:text-base"
              >
                <option value="" className="text-gray-400">Валюта</option>
                <option value="uzs">UZS</option>
                <option value="rub">RUB</option>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
              </select>
            </div>
            
            <div className="flex gap-2">
              <select 
                value={phoneCode} 
                onChange={e => setPhoneCode(e.target.value)}
                className="w-20 md:w-24 bg-card text-yellow-400 rounded px-2 md:px-3 py-2 md:py-3 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors appearance-none text-sm md:text-base text-center"
              >
                <option value="+7">+7</option>
                <option value="+998">+998</option>
                <option value="+996">+996</option>
                <option value="+992">+992</option>
              </select>
              <input 
                placeholder="номер телефона" 
                value={phoneNumber} 
                onChange={e => setPhoneNumber(e.target.value)}
                className="flex-1 bg-card text-yellow-400 rounded px-4 py-2 md:py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors text-sm md:text-base"
              />
            </div>
            
            <button 
              onClick={handleRegister}
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-medium py-2 md:py-3 px-4 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-gray-800 text-sm md:text-base"
            >
              Зарегистрироваться
            </button>
          </div>
          
          {message && (
            <div className="mt-3 md:mt-4 p-2 md:p-3 bg-card rounded text-center">
              <p className="text-gray-300 text-xs md:text-sm">{message}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}