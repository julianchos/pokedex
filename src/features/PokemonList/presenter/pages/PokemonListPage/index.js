import React, { useEffect, useState } from 'react'
// material
import { Container, Typography } from '@mui/material';

//components
import PokemonCards from 'features/PokemonList/presenter/components/PokemonCard'
import { Pokemon } from 'features/PokemonList/model/pokemon_entity'

const PokemonListPage = () => {
    const [pokemonList, setPokemonList] = useState(null)

    useEffect(
        () => {
            getPokemons()
        }, [])

    const getPokemons = async() => {
        const pokemon = new Pokemon()
        const response = await pokemon.getPokemonList({
            limit: 10,
            offset: 0
        })
        if (response && response.data && response.data.results.length > 0) {
            setPokemonList(response.data.results)
        }
    }

    return (
        <Container maxWidth={'lg'}>
            <Typography variant="h3" component="h3" paragraph sx={{fontFamily: 'Pokemon , sans-serif', color: '#1d8696'}}>
                Pokémon List
            </Typography>

            { pokemonList && pokemonList.map((item) => {
                return (
                    <PokemonCards data={item} key={item.name}/>
                );
            })}
        </Container>
    )
}

export default PokemonListPage