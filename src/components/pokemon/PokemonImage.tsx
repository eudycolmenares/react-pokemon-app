import image from '../../assets/images/charizard.png';

export const PokemonImage = () => {
  return (
    <section className='pokemonimage__container'>
      <figure>
        <img src={ image } className='pokemonimage__image' />
      </figure>
    </section>
  )
}
