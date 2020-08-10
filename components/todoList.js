import Link from 'next/link'

export default function todoList() {
  return(
    <div>
      <ul className='text-2xl p-4 m-2 leading-10 tracking-wide'>
        <Link href='#'>
           <li className='cursor-pointer'><span className='text-red-700 '>23</span> orders to fix</li>
        </Link>

        <Link href='#'>
          <li className='cursor-pointer'><span className='text-red-700'>4</span> orders overdued</li>
        </Link>

        <Link href='#'>
          <li className='cursor-pointer'><span className='text-red-700'>8</span> orders ready for pickup</li>
        </Link>

        <Link href='#'>
          <li className='cursor-pointer'><span className='text-red-700'>43</span> customers scheduled for fitting</li>
        </Link>

      </ul>
    </div>
  )
}
