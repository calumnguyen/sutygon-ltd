export default function Login(props) {
  return (
    <div className='flex justify-center  h-48 content-center mt-4'>
    <form className="w-full max-w-sm" method={props.method} action={props.action}>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4 cursor-default" for="inline-full-name">
            Quản Lý
          </label>
        </div>
        <div className="md:w-2/3">
          <input className="bg-blue-200 appearance-none border-2 border-blue-200 rounded w-full py-2 px-4 text-blue-900 leading-tight" id="inline-username" type="text" value="Calum Nguyen" disabled/>
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4 cursor-default" for="inline-password">
            Mật Khẩu
          </label>
        </div>
        <div className="md:w-2/3">
          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-500" id="inline-password" type="password"
            placeholder="******************" required  />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3"></div>

      </div>
      <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
          <button className="shadow bg-blue-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
            Mở cửa
          </button>
        </div>
      </div>
    </form>
    </div>
  )
}
