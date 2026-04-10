export default function Logo({size = "40", stroke = "currentColor", fill = "none"}) {
    return (
        <svg width={size} height={size} viewBox="0 0 40 40" fill={fill} xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="3.5" fill="currentColor" />

            <path
                d="M10 20C10 14.4772 14.4772 10 20 10C25.5228 10 30 14.4772 30 20C30 25.5228 25.5228 30 20 30"
                stroke={stroke}
                strokeWidth="3"
                strokeLinecap="round"
            />

            <path
                d="M15 33L19 37L28 28"
                stroke={stroke}
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}