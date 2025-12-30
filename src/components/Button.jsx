import './Button.css'
export default function Button({ children, onClick, type, variant }) {
  return (
    <button onClick={onClick} type={type} className={`btn-${variant}`}>
      {children}
    </button>
  );
}
