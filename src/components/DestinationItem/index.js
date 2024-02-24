import './index.css'

const DestinationItemList = props => {
  const {destinationsDetailes} = props
  const {name, imgUrl} = destinationsDetailes

  return (
    <li className="list-container">
      <img className="image" src={imgUrl} alt={name} />
      <p className="name">{name}</p>
    </li>
  )
}
export default DestinationItemList
