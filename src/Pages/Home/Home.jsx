import React from 'react'
import PropTypes from 'prop-types'
import styles from './Home.module.css'

function Home(props) {
  return (
    <div className={styles.container}>
  <a href="#animals" className={styles.item}><img src="https://placeimg.com/640/480/animals" alt="Animals"></img></a>
  <a href="#architecture" className={styles.item}><img src="https://placeimg.com/640/480/architecture" alt="Architecture"></img></a>
  <a href="#nature" className={styles.item}><img src="https://placeimg.com/640/480/nature" alt="Nature"></img></a>
  <a href="#people" className={styles.item}><img src="https://placeimg.com/640/480/people" alt="People"></img></a>
  <a href="#tech" className={styles.item}><img src="https://placeimg.com/640/480/tech" alt="Tech"></img></a>
</div>
  )
}

Home.propTypes = {}

export default Home
