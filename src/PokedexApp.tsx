import './styles.css'

import { Header } from './components/ui/Header'
import { PokemonScreen } from './components/pokemon/PokemonScreen'
import { Footer } from './components/ui/Footer'

export const PokedexApp = () => {
  return (
    <main className="pokedex__main">
      <div className="pokedex__container">
        <Header />
        <PokemonScreen />
        <Footer />
      </div>
    </main>
  )
}
