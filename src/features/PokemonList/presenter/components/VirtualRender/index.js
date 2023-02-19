import React from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import {Grid, Box} from "@mui/material"
import PokemonCards from 'features/PokemonList/presenter/components/PokemonCard'

const Loader = ({style}) => (
    <div style={style}>
        {/*<Grid container sx={{width: '100%'}} justifyContent="center" spacing={4} marginBottom={3} marginTop={1}>
            <Grid item alignItems="center">
                <CircularProgress color="secondary" />
            </Grid>
            <Grid item alignItems="center">
                <span>Loading item...</span>
            </Grid>
        </Grid>*/}
    </div>
)

const Item = ({ item, index, style }) => (
    <div style={style}>
        <Box display={'flex'} width={'100%'} justifyContent={'center'}>
            <PokemonCards data={item} key={index} />
        </Box>
    </div>
);

const VirtualRender = ({ item, index, style, loading }) => {
    return (loading) ? <Loader style={style} /> : <Item item={item} index={index} style={style} />
}

export default VirtualRender