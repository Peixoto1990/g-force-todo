export default function PendingFilter({size = "100%", stroke = "currentColor", fill = "none"}) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="9" stroke={stroke} strokeWidth="2" strokeDasharray="4 4" />
            <path d="M12 7V12L15 15" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}