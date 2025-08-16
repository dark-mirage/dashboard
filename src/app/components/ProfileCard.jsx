export default function ProfileCard({ items = [], gridCols = "1", className = "" }) {
  return (
    <div
      className={`grid gap-4 ${className} ${
        gridCols === "1" ? "grid-cols-1" :
        gridCols === "2" ? "grid-cols-2" :
        gridCols === "3" ? "grid-cols-3" : ""
      }`}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className={`p-4 rounded-lg flex flex-col items-start ${item.cardClassName || "bg-[var(--element-color)]"}`}
        >
          <span className={item.labelClassName || "text-gray-400"}>
            {item.label}
          </span>
          <span className={item.valueClassName || "text-white"}>
            {item.value}
          </span>
        </div>
      ))}
    </div>
  )
}
