import { Link } from 'react-router-dom'
import './Href.css'

export default function Href({to, className, children}) {
  return (
    <div className='Href'>
      <Link to={to} className={className}>{children}</Link>
    </div>
  )
}
