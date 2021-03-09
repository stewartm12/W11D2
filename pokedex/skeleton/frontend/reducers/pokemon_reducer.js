import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';

const pokemonReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      const new_pokemon = action.pokemon
      return Object.assign({}, state, new_pokemon);
    default:
      return state;
  }
}

export default pokemonReducer;