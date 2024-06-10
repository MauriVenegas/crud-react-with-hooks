import React from 'react'

// hooks react redux
import { useDispatch, useSelector } from 'react-redux'

// importamos la acción
import {
  obtenerPokemonsAction,
  siguientePokeAction,
  anteriorPokeAction,
} from './redux/PokeDucks'

const Pokemones = () => {
  const dispatch = useDispatch()
  const pokemones = useSelector((store) => store.pokemones.array)
  const offset = useSelector((store) => store.pokemones.offset)

  return (
    <>
      <h1>Redux</h1>
      {pokemones.length > 0 && offset > 0 && (
        <button
          onClick={() => dispatch(anteriorPokeAction(20))}
          type="button"
          className="me-2 btn btn-outline-primary"
        >
          Anterior
        </button>
      )}
      <button
        onClick={() => dispatch(obtenerPokemonsAction())}
        type="button"
        className="me-2 btn btn-primary"
      >
        Obtener pokemones
      </button>
      {pokemones.length > 0 && (
        <button
          onClick={() => dispatch(siguientePokeAction(20))}
          type="button"
          className="btn btn-outline-primary"
        >
          Siguiente
        </button>
      )}
      <div className="mt-2 list-group">
        {pokemones.length > 0 && (
          <li
            className="list-group-item bg-secondary text-white text-center"
            aria-current="true"
          >
            Lista de Pokemones
          </li>
        )}
        {pokemones.map((pokemon) => (
          <a
            key={pokemon.name}
            className="list-group-item list-group-item-action"
            href={pokemon.url}
          >
            {pokemon.name}
          </a>
        ))}
      </div>
    </>
  )
}

export default Pokemones
