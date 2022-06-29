import React from 'react'
import styles from './Search.module.css'

function Search() {
  return (
    <div className={styles._search_div}>
      <input className={styles.search_input} type="text" placeholder="Search for anime"></input>
      <button className={styles.search_btn} type="submit">Search</button>
    </div>
  )
}

export default Search
