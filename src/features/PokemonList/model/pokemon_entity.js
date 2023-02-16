
import { POKEMON_API } from 'main/services/APIs/PayrollPayer'

export class Pokemon {
    async getPokemonList (data) {
        const body = {
            limit: data.limit,
            offset: data.offset
        }
      const response = await POKEMON_API.getPokemonList({ data: body })
      return response
    }
}
