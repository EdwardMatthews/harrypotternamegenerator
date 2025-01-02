export default function Logo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 帽子主体 */}
      <path
        d="M200 80L120 280H280L240 180L200 80Z"
        fill="#B794E5"
        stroke="#2D1B69"
        strokeWidth="16"
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {/* 帽檐底色 */}
      <path
        d="M80 280C80 280 160 300 200 300C240 300 320 280 320 280C320 280 280 320 200 320C120 320 80 280 80 280Z"
        fill="#F0DBFF"
        stroke="#2D1B69"
        strokeWidth="16"
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {/* 帽檐渐变 */}
      <path
        d="M80 280C80 280 160 300 200 300C240 300 320 280 320 280C320 280 280 320 200 320C120 320 80 280 80 280Z"
        fill="url(#brim-gradient)"
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {/* 帽子装饰带 */}
      <path
        d="M120 280H280"
        stroke="#8B5CF6"
        strokeWidth="24"
      />
      
      {/* 装饰带上的圆形装饰 */}
      <circle
        cx="200"
        cy="280"
        r="12"
        fill="#FFD700"
        stroke="#2D1B69"
        strokeWidth="4"
      />

      {/* 帽尖折痕 */}
      <path
        d="M200 80L180 130L200 150L220 130L200 80Z"
        fill="#C7A5F2"
        stroke="#2D1B69"
        strokeWidth="8"
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {/* 装饰元素 */}
      <circle cx="140" cy="120" r="6" fill="#60A5FA" />
      <circle cx="320" cy="160" r="8" fill="#FFD700" />
      <circle cx="100" cy="200" r="6" fill="#4ADE80" />
      <path
        d="M280 100L290 110M290 100L280 110"
        stroke="#F87171"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* 渐变定义 */}
      <defs>
        <linearGradient
          id="brim-gradient"
          x1="200"
          y1="280"
          x2="200"
          y2="320"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#E9D5FF" />
          <stop offset="1" stopColor="#D8B4FE" />
        </linearGradient>
      </defs>
    </svg>
  )
}
