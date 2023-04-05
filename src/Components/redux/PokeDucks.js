import axios from "axios";

// constantes
const dataInicial = {
  array: [],
  offset: 0
};

// types
const GET_POKE_SUCCESS = "GET_POKE_SUCCESS";
const GET_POKE_NEXT_SUCCESS = 'GET_POKE_NEXT_SUCCESS';
const GET_POKE_PREVIOUS_SUCCESS = 'GET_POKE_NEXT_SUCCESS';

// Reducer
export default function pokesReducer(state = dataInicial, action) {
  switch (action.type) {
    case GET_POKE_SUCCESS:
      return { ...state, array: action.payload };
    case GET_POKE_NEXT_SUCCESS:
      return { ...state, array: action.payload.array, offset: action.payload.offset };
    case GET_POKE_PREVIOUS_SUCCESS:
      return { ...state, array: action.payload.array, offset: action.payload.offset };
    default:
      return state;
  }
}

// Acciones
export const obtenerPokemonsAction = () => async (dispatch, getState) => {

  // const offset = getState().pokemones.offset;
  const {offset} = getState().pokemones; //nuevo en JavaScript
  try {
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`
    );
    dispatch({
      type: GET_POKE_SUCCESS,
      payload: res.data.results,
    });
  } catch (error) {
    console.log(error);
  }
};

export const siguientePokeAction = (numero) => async (dispatch, getState) => {

  const {offset} = getState().pokemones;
  const siguiente = offset + numero;

  try {
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?offset=${siguiente}&limit=20`
    );
    dispatch({
      type: GET_POKE_NEXT_SUCCESS,
      payload: {
          array: res.data.results,
          offset: siguiente
      }
  })
  } catch (error) {
    console.log(error);
  }
};

export const anteriorPokeAction = (numero) => async (dispatch, getState) => {

  const {offset} = getState().pokemones;
  const siguiente = (offset - numero) < 0 ? 0 : offset - numero;

  try {
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?offset=${siguiente}&limit=20`
    );
    dispatch({
      type: GET_POKE_PREVIOUS_SUCCESS,
      payload: {
          array: res.data.results,
          offset: siguiente
      }
  })
  } catch (error) {
    console.log(error);
  }
};
