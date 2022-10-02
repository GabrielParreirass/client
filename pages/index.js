import styles from '../styles/Home.module.css'


export async function getStaticProps() {

    const maxPokemons = 20

    const api = 'https://pokeapi.co/api/v2/pokemon/'

    const res = await fetch(`${api}/?limit=${maxPokemons}`)

    const data = await res.json()

    // data.results.forEach((item, index) => {
    //     item.id = index + 1
    // });

    return{
      props:{
        pokemons: data.results
      }
    }



}


export default function Home({ pokemons }) {

  return (
    <div className={styles.container}>
      {pokemons.map(i=>(
        <h3>{i.name}</h3>
      ))}
    </div>
  )
}
