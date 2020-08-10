import Nav from '../components/nav'
import Card from '../components/card'

export default function Dashboard() {
  return (
    <>
    <Nav />
    <div className='flex-wrap'>
      <Card cardName='To-Do Today'/>
      <Card cardName='Business Live'/>
      <Card cardName='Inventory'/>
      <Card cardName='News'/>
      <Card cardName='To-Do this month'/>
    </div>
    </>
  )
}
