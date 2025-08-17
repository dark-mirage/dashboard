export default function ProfileCard({ items = [], gridCols = "1", className = "" }) {
  return (
    <div
      className={`grid gap-3 sm:gap-4 ${className} ${
        gridCols === "1" ? "grid-cols-1" :
        gridCols === "1 sm:2" ? "grid-cols-1 sm:grid-cols-2" :
        gridCols === "2" ? "grid-cols-2" :
        gridCols === "1 sm:3" ? "grid-cols-1 sm:grid-cols-3" :
        gridCols === "3" ? "grid-cols-3" : ""
      }`}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className={`p-3 sm:p-4 rounded-lg flex flex-col items-start ${item.cardClassName || "bg-[var(--element-color)]"}`}
        >
          <span className={`text-xs sm:text-sm ${item.labelClassName || "text-gray-400"}`}>
            {item.label}
          </span>
          <span className={item.valueClassName || "text-white text-sm sm:text-base"}>
            {item.value}
          </span>
        </div>
      ))}
    </div>
  )
}