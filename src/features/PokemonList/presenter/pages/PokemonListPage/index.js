import React, { useEffect, useState } from 'react'
// material
import { Container, Typography, Box } from '@mui/material';

//components
import VirtualRender from 'features/PokemonList/presenter/components/VirtualRender';
import { Pokemon } from 'features/PokemonList/model/pokemon_entity'

//
import { VariableSizeList, FixedSizeList } from 'react-window'
import InfiniteLoader from "react-window-infinite-loader"

const PokemonListPage = () => {
    const [items, setItems] = useState([])
    const [moreItemsLoading, setMoreItemsLoading] = useState(false)
    const [hasNextPage, setHasNextPage] = useState(true)
    const [offset, setOffset] = useState(0)

    useEffect(
        () => {
            getPokemons()
        }, [])

    const getPokemons = async() => {
        setMoreItemsLoading(true)
        const pokemon = new Pokemon()
        const response = await pokemon.getPokemonList({
            limit: 10,
            offset: offset
        })
        if (response && response.data && response.data.results.length > 0) {
            setItems([...items, ...response.data.results])
            setOffset(offset + 10)
        }
        setMoreItemsLoading(false)
    }

    const Row = ({ index, style }) => (
        <VirtualRender
            item={items[index]}
            index={index}
            style={style}
            loading={index === items.length}
        />
    )

    const itemCount = hasNextPage ? items.length + 1 : items.length

    const loadMore = () => {
        getPokemons()
    }

    return (
        <Container maxWidth={'lg'} sx={{overflow: 'hidden'}}>
            <Box display={'flex'} justifyContent={'center'}>
                <Typography variant="h3" component="h3" paragraph sx={{fontFamily: 'Pokemon , sans-serif', color: '#1d8696'}}>
                    Pokémon List
                </Typography>
            </Box>

            <InfiniteLoader
                isItemLoaded={(index) => index < items.length}
                itemCount={itemCount}
                loadMoreItems={loadMore}
            >
                {({ onItemsRendered, ref }) => (
                    <FixedSizeList
                        height={500}
                        width={'100%'}
                        itemCount={itemCount}
                        itemSize={200}
                        className="list-container"
                        overscanCount={2}
                        onItemsRendered={onItemsRendered}
                        ref={ref}
                    >
                        {Row}
                    </FixedSizeList>
                )}
            </InfiniteLoader>
        </Container>
    )
}

export default PokemonListPage