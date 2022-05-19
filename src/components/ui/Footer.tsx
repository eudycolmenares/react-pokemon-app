import { PokemonCard } from "../pokemon/PokemonCard"

export const Footer = () => {
  return (
    <footer className="footer__container">
      <div className="footer__subcontainer">
        <h4 className="footer__title">Others</h4>
        {
          [1,2,3,4].map( item =>
            <PokemonCard />
          )
        }
      </div>
    </footer>
  )
}
