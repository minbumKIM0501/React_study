import { createActions, handleActions } from 'redux-actions';

/* 초기 state 값 */
const initialState = [
    {
        id: 0,
        name: ''
    }
];
/* 액션 타입 설정 */
export const GET_POKEMONS = 'pokemons/GET_POKEMONS';

/* 액션 함수 설정 */
const actions = createActions({
    [GET_POKEMONS]: () => { }
});
/* 리듀서 함수 */
const pokemonReducer = handleActions(
    {
        [GET_POKEMONS]: (state, {payload}) => {
            console.log('(reducer) payload', payload);

            return payload;
        }
    },
    initialState
);

export default pokemonReducer;