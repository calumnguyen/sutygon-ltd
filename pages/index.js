import Nav from '../components/nav'
import Login from '../components/login'

export default function IndexPage() {

  const newDate = new Date();
  const dd = String(newDate.getDate()).padStart(2, '0');
  const mm = String(newDate.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = newDate.getFullYear();

  const today = dd + '/' + mm + '/' + yyyy;

  return (
    <div>
      <Nav />
      <div className="py-20">
        <h1 className="text-5xl text-center text-blue-900 cursor-default">
            Đăng nhập để mở cửa hàng {today}
        </h1>
        <Login
        action='/sudo-login'
        method='POST'/>
      </div>
    </div>
  )
}
