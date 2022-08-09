export default function titleViewAll (props) {
  return (
    <div className='titleViewAll'>
      <h1 className='text-primary'>{props.title}</h1>
      <h2 className="text-danger font-light">View All ›</h2>
    </div>
  )
}
