export default function SettingsCard({ title, badge, items, className }) {
  return (
    <div
      className={`bg-card rounded-xl sm:rounded-2xl px-4 sm:px-[20px] py-4 sm:py-[30px] bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] border border-gray-800 ${className || ""}`}
    >
      {badge && (
        <span className="bg-[var(--primary-yellow)] text-black text-xs sm:text-sm font-semibold px-2 py-1 rounded">
          {badge}
        </span>
      )}
      <h2 className="text-base sm:text-lg font-bold text-white !mb-3 sm:!mb-[20px]">{title}</h2>
      <div className="space-y-3 sm:space-y-4">
        {items.map((item, idx) => (
          <div
            key={idx}
            className={`flex items-center justify-between gap-2 sm:gap-[10px] border-b border-gray-700 pb-2 sm:pb-3 ${item.className || ""}`}
          >
            <div>
              <p className="text-[var(--primary-yellow)] font-semibold text-sm sm:text-base">{item.label}</p>
              <p className="text-gray-400 text-xs sm:text-sm">{item.description}</p>
            </div>
            {item.type === "switch" && (
              <label
                className={`relative inline-flex items-center cursor-pointer ${item.switchClassName || ""}`}
              >
                <input
                  type="checkbox"
                  className="sr-only peer !input-glass"
                  defaultChecked={item.enabled}
                />
                <div className="w-8 sm:w-10 h-4 sm:h-5 bg-gray-600 rounded-full peer-checked:bg-[var(--primary-yellow)] transition-colors"></div>
                <div className="absolute left-0.5 top-0.5 w-3 sm:w-4 h-3 sm:h-4 bg-white rounded-full transition-transform peer-checked:translate-x-3 sm:peer-checked:translate-x-5"></div>
              </label>
            )}
            {item.type === "button" && (
              <button
                className={`bg-card text-[var(--primary-yellow)] px-2 sm:px-3 py-1 rounded font-semibold hover:bg-yellow-300 button-yellow text-xs sm:text-sm ${item.buttonClassName || ""}`}
                onClick={item.onClick}
              >
                {item.buttonText}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}