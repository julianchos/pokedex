
import { POKEMON_API } from 'main/services/Apis/pokemon_api'

export class Pokemon {
    async getPokemonList (data) {
        const body = {
            limit: data.limit,
            offset: data.offset
        }
      const response = await POKEMON_API.getPokemonList({ data: body })
      return response
    }
    async getPokemonDetail (data) {
        const response = await POKEMON_API.getPokemonDetail({ id: data.id })
        return response
    }
}
