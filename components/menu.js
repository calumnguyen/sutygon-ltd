import Link from 'next/link'

const links = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/order', label: 'Order' },
  { href: '/operation', label: 'Operation'},
]

export default function Menu() {
  const isPermitted = true;

 if (isPermitted) {
   return (
     <ul className="flex justify-between items-center p-8">
          <ul className="flex justify-between items-center space-x-4">
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
              <Link href={href}>
                <a  className="btn-blue no-underline">
                  {label}
                </a>
                </Link>
              </li>
            ))}
          </ul>
        </ul>)
 } else {
   return false;
 }

}
