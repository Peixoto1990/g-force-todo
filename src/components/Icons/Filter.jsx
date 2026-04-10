export default function Filter({size = "24", stroke = "currentColor", fill = "none"}) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H20" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
            <path d="M7 12H17" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
            <path d="M10 18H14" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
        </svg>
    )
}