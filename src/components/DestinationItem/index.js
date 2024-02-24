import './index.css'

const DestinationItemList = props => {
  const {destinationsDetailes} = props
  const {name, imgUrl} = destinationsDetailes

  return (
    <div className="list-container">
      <img className="image" src={imgUrl} alt={name} />
      <p className="name">{name}</p>
    </div>
  )
}
export default DestinationItemList
