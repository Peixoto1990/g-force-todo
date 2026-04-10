export default function Config({size = "24", stroke = "currentColor", fill = "none"}) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
            <path d="M4 21V14M4 10V3" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2 14H6" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

            <path d="M12 21V12M12 8V3" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 8H14" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

            <path d="M20 21V16M20 12V3" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18 16H22" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}