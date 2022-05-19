import { PokemonTitle } from "./PokemonTitle"
import { PokemonImage } from "./PokemonImage"
import { PokemonInformation } from "./PokemonInformation"

export const PokemonScreen = () => {
  return (
    <section className="pokemonscreen__container">
      <PokemonTitle />
      <PokemonImage />
      <PokemonInformation />
    </section>
  )
}
