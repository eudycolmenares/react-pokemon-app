import icono from '../../assets/images/fire.png';

export const PokemonTitle = () => {
  return (
    <section className='pokemontitle__container'>
      <figure>
        <img src={icono} className='pokedex__icono' />
      </figure>
      <h1 className='pokemontitle__title'>Charizard</h1>
    </section>
  )
}
