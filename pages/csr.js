import React, { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'

const Home = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://swapi.dev/api/films/')
      const data = await response.json()
      setData(data.results)
    }
    getData()
  })
  return (
    <main>
      <h1>The Starwars films</h1>
      <ul>
        {data.map(item => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </main>
  )
}

export default Home
