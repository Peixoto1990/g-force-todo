export default function GFilter({size = "100%", stroke = "currentColor", fill = "none"}) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="3" fill="currentColor" />
            <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
            <path d="M3 12C3 16.9706 7.02944 21 12 21" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeDasharray="2 4" />
        </svg>
    )
}