import image from '../../assets/images/charizard.png';
import { PokemonImage } from './PokemonImage';

export const PokemonCard = () => {
  return (
    <section className="pokemoncard__container">

      <div className="pokemoncard__card">
        {/* <figure>
          <img src={ image } className='pokemonimage__image' />
        </figure> */}
        <PokemonImage />
      </div>
    </section>
  )
}
