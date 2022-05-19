import icono from '../../assets/images/pokedex.png';

export const Header = () => {
  return (
    <header className='header__main'>
      <figure>
        <img src={ icono } className='pokedex__icono' />
      </figure>
      <h4 className='header__title'>Pokédex_</h4>
    </header>
  )
}
