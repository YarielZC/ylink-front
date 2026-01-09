import { Link } from 'react-router-dom'
import './Href.css'

export default function Href({to, className, variant_color, have_decoration, children}) {
  return (
    <div className='Href'>
      <Link to={to} className={`${className} ${variant_color} ${have_decoration ? 'decoration' : ''}`}>{children}</Link>
    </div>
  )
}
