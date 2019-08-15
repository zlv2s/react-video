import React from 'react'

class SearchBar extends React.Component {
  state = { searchVal: '' }
  onFormSubmit = e => {
    e.preventDefault()
    // Todo
  }
  render() {
    return (
      <div className="ui segment search-bar">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="search">Video Search</label>
            <input
              type="text"
              id="search"
              onChange={e => this.setState({ searchVal: e.target.value })}
              value={this.state.searchVal}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar