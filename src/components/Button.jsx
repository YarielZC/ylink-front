import './Button.css'
export default function Button({ children, variant, onClick, type,}) {
  return (
    <button variant={variant} onClick={onClick} type={type} className={`btn-${variant}`}>
      {children}
    </button>
  );
}
