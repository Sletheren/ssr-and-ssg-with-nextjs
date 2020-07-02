import React from 'react'
import fetch from 'isomorphic-unfetch'

const Home = ({ data }) => {
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

export async function getStaticProps () {
  const response = await fetch('https://swapi.dev/api/films/')
  const data = await response.json()

  return { props: { data: data.results } }
}

export default Home
