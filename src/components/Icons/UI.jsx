export default function UI({size = "24", stroke = "currentColor", fill = "none"}) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="3" width="7" height="7" rx="1.5" stroke={stroke} strokeWidth="2" strokeLinejoin="round" />
            <rect x="14" y="3" width="7" height="7" rx="1.5" stroke={stroke} strokeWidth="2" strokeLinejoin="round" />
            <rect x="14" y="14" width="7" height="7" rx="1.5" stroke={stroke} strokeWidth="2" strokeLinejoin="round" />

            <circle cx="6.5" cy="17.5" r="3.5" stroke={stroke} strokeWidth="2" />
        </svg>
    )
}