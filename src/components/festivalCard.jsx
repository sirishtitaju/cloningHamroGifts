export default function ({ ...props }) {
  return (
    <div className={props.class}>
      <img src={props.src} width='45px' />
      <h2 className='font-light'>{props.cardName}</h2>
    </div>
  )
}
