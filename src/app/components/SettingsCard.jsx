// components/SettingsCard.jsx
export default function SettingsCard({ title, badge, items, className }) {
  return (
    <div
      className={`bg-card rounded-2xl p-4 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] border border-gray-800 ${className}`}
    >
      {/* Badge */}
      {badge && (
        <span className="bg-yellow-400 text-black text-sm font-semibold px-2 py-1 rounded">
          {badge}
        </span>
      )}

      <h2 className="text-lg font-bold text-white mt-3 mb-4">{title}</h2>

      <div className="space-y-4">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center justify-between border-b border-gray-700 pb-3">
            <div>
              <p className="text-white font-semibold">{item.label}</p>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </div>

            {item.type === "switch" && (
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer bg-[#1a1a1d]" defaultChecked={item.enabled} />
                <div className="w-10 h-5 bg-gray-600 rounded-full peer peer-checked:bg-yellow-400"></div>
                <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-5"></div>
              </label>
            )}

            {item.type === "button" && (
              <button
                className="bg-yellow-400 text-black px-3 py-1 rounded font-semibold hover:bg-yellow-300"
                onClick={item.onClick}
              >
                {item.buttonText}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
