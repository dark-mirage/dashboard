'use client'
import { useState } from "react";
import Header from "../components/Header";
import { useLocale } from "../contexts/LocaleContext";

export default function RegisterForm() {
  const { messages } = useLocale();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [currency, setCurrency] = useState("");
  const [phoneCode, setPhoneCode] = useState("+49");
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
      if (res.ok) {
        setMessage(messages.register.success);
      }
    } catch (err) {
      setMessage(messages.register.networkError);
      console.error(err);
    }
  };

  return (
    <>
      <Header />
      <div className="w-full flex justify-center items-center p-4 min-h-screen">
        <div className="w-full max-w-md">
          <div className="bg-card rounded-2xl md:rounded-[30px] flex flex-col gap-2.5 backdrop-blur-sm border border-gray-700/50 p-6 md:p-8 shadow-2xl">
            <h2 className="text-xl md:text-2xl font-bold text-yellow-500 text-center mb-6 md:mb-8">
              {messages.register.title}
            </h2>
            
            <div className="space-y-3 md:space-y-4">
              <div>
                <input 
                  placeholder={messages.register.username}
                  value={name} 
                  onChange={e => setName(e.target.value)}
                  className="w-full bg-card rounded px-4 py-2 md:py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors text-sm md:text-base"
                />
              </div>
              
              <div>
                <input 
                  placeholder={messages.register.email}
                  value={email} 
                  onChange={e => setEmail(e.target.value)}
                  className="w-full bg-card rounded px-4 py-2 md:py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors text-sm md:text-base"
                />
              </div>
              
              <div>
                <input 
                  placeholder={messages.register.password}
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
                  <option value="" className="text-gray-400">{messages.register.countries['']}</option>
                  {Object.entries(messages.register.countries).map(([code, name]) => (
                    code && <option key={code} value={code}>{name}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <select 
                  value={currency} 
                  onChange={e => setCurrency(e.target.value)}
                  className="w-full bg-card text-yellow-400 rounded px-4 py-2 md:py-3 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors appearance-none text-sm md:text-base"
                >
                  <option value="" className="text-gray-400">{messages.register.currencies['']}</option>
                  {Object.entries(messages.register.currencies).map(([code, name]) => (
                    code && <option key={code} value={code}>{name}</option>
                  ))}
                </select>
              </div>
              
              <div className="flex gap-2">
                <select 
                  value={phoneCode} 
                  onChange={e => setPhoneCode(e.target.value)}
                  className="w-20 md:w-24 bg-card text-yellow-400 rounded px-2 md:px-3 py-2 md:py-3 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors appearance-none text-sm md:text-base text-center"
                >
                  {Object.entries(messages.register.phoneCodes).map(([code, display]) => (
                    <option key={code} value={code}>{display}</option>
                  ))}
                </select>
                <input 
                  placeholder={messages.register.phoneNumber}
                  value={phoneNumber} 
                  onChange={e => setPhoneNumber(e.target.value)}
                  className="flex-1 bg-card text-yellow-400 rounded px-4 py-2 md:py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors text-sm md:text-base"
                />
              </div>
              
              <button 
                onClick={handleRegister}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-medium py-2 md:py-3 px-4 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-gray-800 text-sm md:text-base"
              >
                {messages.register.submit}
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
    </>
  );
}