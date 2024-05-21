export default function BtnBase({ children,onClick,type="button",className}) {
  return (
      <button type={type}
          onClick={onClick}
          className={`
          px-3.5 py-2.5 bg-blue-600 rounded-lg shadow border border-blue-600 justify-center items-center gap-1 inline-flex 
          ${className && className}`
          }>
      {children}
    </button>
  )
}


