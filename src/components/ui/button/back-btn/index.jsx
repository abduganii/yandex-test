export default function BackBase({ children,type="button",onClick,className}) {
    return (
      <button type={type} onClick={onClick} className={` px-3.5 py-2.5 rounded-lg shadow border border-blue-600 justify-center items-center gap-1 inline-flex ${className && className}`}>
        {children}
      </button>
    )
  }
  