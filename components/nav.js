import Menu from './menu'

export default function Nav() {
  return (

    <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight cursor-default">Client Management Sutygon Ltd.</span>
      </div>
      <Menu />
    </nav>

  )
}
