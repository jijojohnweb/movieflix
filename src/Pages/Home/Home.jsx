import React from 'react'
// import {useState} from 'react'
import useFetch from 'react-fetch-hook'
// import PropTypes from 'prop-types'
import styles from './Home.module.css'

function Home(props) {
  // const [trending, setTrending] = useState([])

  const {isLoading,error,data} = useFetch("https://randomuser.me/api/");

  

  if(error) return (<p>Error :{error}</p>);

  
  if(isLoading) return (<p>hhhh</p>);
  else return (
<>
    <div className={styles.container}>

      {/* for(let i=0; i<props.length; i++) {} */}
  <a href="#animals" className={styles.item}><img src="https://placeimg.com/640/480/animals" alt="Animals"></img> </a>


    

  
</div>
<p>{props.apikey}</p>
<p>{JSON.stringify(data)}</p>
</>
  )

}

// Home.propTypes = {}

export default Home
