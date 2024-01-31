import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

import './index.css'

const SearchBar = props => {
  const {userSearch, searchText, onChangeSearchInput} = props

  const onUserSearch = () => {
    userSearch(searchText)
  }

  const handleSearchText = e => {
    onChangeSearchInput(e.target.value)
  }
  return (
    <div className="search-container">
      <input
        type="search"
        value={searchText}
        onChange={handleSearchText}
        placeholder="Search"
        className="search-input"
      />
      <div className="search-icon-box">
        <button
          type="button"
          className="search-icon-btn"
          onClick={onUserSearch}
          aria-label="search-icon"
        >
          <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
        </button>
      </div>
    </div>
  )
}

export default SearchBar
