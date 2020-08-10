 import TodoList from './todoList'

export default function Card(props) {
  return (
    <div className='relative w-auto inline-block h-auto bg-gray-200 p-4 mt-3 ml-4 text-left'>

    <div className='relative p-5 text-center'>
      <h3 className='text-blue-900 shadow-sm text-4xl cursor-default'>{props.cardName}</h3>
    </div>

    <TodoList/>

  </div>
  )
}
