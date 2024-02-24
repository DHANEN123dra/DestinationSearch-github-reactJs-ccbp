import {Component} from 'react'
import DestinationItemList from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onClickSearchResults = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchResults = destinationsList.filter(eachDestinationItem =>
      eachDestinationItem.name
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <h1 className="heading">Destination Search</h1>
        <div className="search-container">
          <input
            type="search"
            className="search-input"
            onChange={this.onClickSearchResults}
            value={searchInput}
            placeholder="Search"
          />
          <img
            className="img"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
          />
        </div>

        <ul className="images-container">
          {searchResults.map(eachItem => (
            <DestinationItemList
              destinationsDetailes={eachItem}
              key={eachItem.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
