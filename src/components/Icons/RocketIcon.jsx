export default function RocketIcon({size = "20", stroke = "currentColor", fill = "none"}) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4.5 16.5L12 3L19.5 16.5" />
            <circle cx="12" cy="11" r="2" />
            <path d="M8 11.5L4.5 16.5H19.5L16 11.5" />
            <path d="M10 20C10 20 12 23 12 23C12 23 14 20 14 20" />
        </svg>
    )
};