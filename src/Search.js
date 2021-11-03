import React from 'react'
import { useGlobalContext } from './context'

const Search = () => {
    const {searchQuery, setSearchQuery} = useGlobalContext();

    return (
        <section className="search-container">
            <h1 className="search-heading">Search Hacker News</h1>
            <input className="search-input" onChange={(e) => (setSearchQuery(e.target.value))} value={searchQuery} placeholder="Eg: Javascript" autoFocus/>
        </section>
    )
}

export default Search
