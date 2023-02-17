import { BASE_URL } from 'main/utils/constants'
import { fetchHttp } from 'main/services/Http'

export const POKEMON_API = {
    getPokemonList: args => {
        return fetchHttp({
            path: `${BASE_URL}?limit=${args.data.limit}&offset=${args.data.offset}`,
            method: 'GET',
            data: null
        })
    },
    getPokemonDetail: args => {
        return fetchHttp({
            path: `${BASE_URL}/${args.id}`,
            method: 'GET',
            data: null
        })
    },
}