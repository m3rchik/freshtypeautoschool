interface VkIconProps {
  size?: number
  className?: string
}

const VkIcon = ({ size = 20, className = "" }: VkIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M2 4C2 2.895 2.895 2 4 2h16c1.105 0 2 .895 2 2v16c0 1.105-.895 2-2 2H4c-1.105 0-2-.895-2-2V4z"/>
      <path d="M12.5 8.5c1.38 0 2.5 1.12 2.5 2.5 0 .7-.29 1.33-.76 1.78l1.91 2.72h-1.4l-1.6-2.27c-.21.05-.43.07-.65.07-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5zm0 1c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z" fill="white"/>
      <path d="M6.5 17h2v-6h1l.5-1h-1.5V9c0-.5.4-.9.9-.9h.6V7h-.6c-1.1 0-2 .9-2 2v1H6v1h1.5v6z" fill="white"/>
    </svg>
  )
}

export default VkIcon 