import React, { useEffect, useState, memo } from 'react'
import {useOutletContext} from 'react-router-dom'

// material
import { Container, Typography, Box } from '@mui/material';

//components
import VirtualRender from 'features/PokemonList/presenter/components/VirtualRender';
import { Pokemon } from 'features/PokemonList/model/pokemon_entity'

//
import { FixedSizeList } from 'react-window'
import InfiniteLoader from "react-window-infinite-loader"

const PokemonListPage = memo(() => {
    const [items, setItems] = useState([])
    const [itemsBackup, setItemsBackup] = useState([])

    const [moreItemsLoading, setMoreItemsLoading] = useState(false)
    const [hasNextPage, setHasNextPage] = useState(true)
    const [offset, setOffset] = useState(0)

    const [context] = useOutletContext();


    useEffect(
        () => {
            if (items === null && itemsBackup === null) {
                getPokemons()
            }
        }, [])

    useEffect(
        () => {
            if (context && context.length >= 3) {
                var backup = []
                if (itemsBackup && itemsBackup.length === 0) {
                    setItemsBackup(items)
                    backup = items
                }

                if (itemsBackup.length === 0) {
                    setItems(backup.filter(function (el) {return el.name.includes(context.toLowerCase())}))
                } else {
                    setItems(itemsBackup.filter(function (el) {return el.name.includes(context.toLowerCase())}))
                }

            }
            if ((!context || context === '') && itemsBackup && itemsBackup.length > 0 ){
                setItems(itemsBackup)
                setItemsBackup([])
            }

        }, [context])

    const getPokemons = async() => {
        setMoreItemsLoading(true)
        const pokemon = new Pokemon()
        const response = await pokemon.getPokemonList({
            limit: 2000,
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
        if(itemsBackup.length === 0){
            getPokemons()
        }
    }

    return (
        <Container maxWidth={'lg'} sx={{overflow: 'hidden'}}>
            <Box display={'flex'} justifyContent={'center'}>
                <Typography variant="h3" component="h3" paragraph sx={{fontFamily: 'Pokemon , sans-serif', color: '#1d8696'}}>
                    Pokémon List
                </Typography>
            </Box>
            {
                context && context.length >=3 &&
                <Box display={'flex'} justifyContent={'center'}>
                    <Typography sx={{fontFamily: 'Monserrat , sans-serif', color: '#1d8696'}}>
                        Filtrando por "{context}"
                    </Typography>
                </Box>
            }


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
})

export default PokemonListPage