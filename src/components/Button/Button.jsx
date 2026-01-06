import './Button.css'
export default function Button({ children, onClick, type, variant, className, styles }) {
  return (
    <button onClick={onClick} type={type} className={`btn-${variant} ${className}`} style={styles}>
      {children}
    </button>
  );
}
