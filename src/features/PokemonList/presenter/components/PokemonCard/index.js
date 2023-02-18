import {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom'
import {
    Box,
    Card,
    Grid,
    Divider,
    Typography,
    Skeleton,
    Chip
} from '@mui/material'
import PropTypes from 'prop-types'
import {Pokemon} from 'features/PokemonList/model/pokemon_entity'

const PokemonCards = ({ data }) => {
    const [pokemonDetail, setPokemonDetail] = useState({})
    const navigate = useNavigate()

    useEffect(
        () => {
            const getPokemonDetail = async () => {
                const pokemon = new Pokemon()
                const response = await pokemon.getPokemonDetail({
                    id: data.name
                })
                if (response && response.data && Object.keys(response.data).length>0) {
                    setPokemonDetail(response.data)
                }
            }
            getPokemonDetail()
        }, [data])

    const handleSelectPokemon = () => {
        if(pokemonDetail && pokemonDetail.name)
            navigate('/pokemon/' + pokemonDetail.name)
    }

    return (
        <Box >
            {pokemonDetail &&
                <>
                    <Grid container sx={{width: '100%'}} justifyContent="center" spacing={4} marginBottom={3} marginTop={1}>
                        <Grid item xs={4} alignItems="center">
                            <img className="animated infinite pulse delay-2s" onClick={handleSelectPokemon} style={{marginTop: '-30px', cursor: 'pointer'}} src={pokemonDetail.sprites && pokemonDetail.sprites.other && pokemonDetail.sprites.other.home && pokemonDetail.sprites.other.home.front_default} width={170} />
                        </Grid>
                        <Grid item xs={8}>
                            <Typography onClick={handleSelectPokemon} sx={{ fontFamily:'Monserrat , sans-serif', fontSize: '21px', color: '#44696c', fontWeight: 600, textTransform: 'uppercase', cursor: 'pointer' }}>
                                {data.name || pokemonDetail.name}
                            </Typography>
                            <Typography  sx={{ fontFamily:'Monserrat , sans-serif',  fontSize: '13px', color: '#111', fontWeight: 600, textTransform: 'uppercase' }}>
                                {pokemonDetail.types && pokemonDetail.types.reduce((res, { type: { name } }) => res + ' / ' + (name ?? ''), '').slice(2)}
                            </Typography>

                            <Grid sx={{fontFamily:'Monserrat , sans-serif', background: '#e8f0e1', borderRadius: '17px', width: '327px', overflow: 'hidden', marginTop: '10px', marginBottom: '7px'}}>
                                <table width="100%" border="0" cellSpacing="0" cellPadding="0">
                                    <tbody>
                                    <tr height={'30px'}>
                                        <td width="14%">
                                            <Typography  sx={{ fontFamily:'Monserrat , sans-serif', textAlign: 'center',  fontSize: '14px', color: '#111', fontWeight: 600, textTransform: 'uppercase' }}>
                                                #{pokemonDetail.id}
                                            </Typography></td>
                                        <td width="20%">
                                            <Typography sx={{ fontFamily:'Monserrat , sans-serif', textAlign: 'center',  fontSize: '11px', color: '#111', fontWeight: 300, textTransform: 'uppercase' }}>
                                                Max HP
                                            </Typography>
                                        </td>
                                        <td width="23%">
                                            <Grid sx={{background: '#71edb9', paddingY:'7px', fontWeight: 600, borderRadius: '18px', fontSize: '14px', textAlign: 'center', color: '#fff', letterSpacing:'1px' }}>
                                                89
                                                <Typography variant={'span'} sx={{fontSize: '10px', fontWeight: 400 }}>
                                                    HP
                                                </Typography>
                                            </Grid>
                                        </td>
                                        <td width="20%">
                                            <Typography sx={{ fontFamily:'Monserrat , sans-serif', textAlign: 'center',  fontSize: '11px', color: '#111', fontWeight: 300, textTransform: 'uppercase' }}>
                                                Max CP
                                            </Typography>
                                        </td>
                                        <td width="23%">
                                            <Grid sx={{background: '#c35fff', paddingY:'7px', fontWeight: 600, borderRadius: '18px', fontSize: '14px', textAlign: 'center', color: '#fff', letterSpacing:'1px' }}>
                                                <Typography variant={'span'} sx={{fontSize: '10px', fontWeight: 400 }}>
                                                    CP
                                                </Typography>
                                                1136
                                            </Grid>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </Grid>
                            <Grid sx={{fontFamily:'Monserrat , sans-serif', fontWeight: 400, width: '327px', overflow: 'hidden', marginTop: '10px', marginBottom: '7px'}}>
                                <table width="100%" border="0" cellSpacing="0" cellPadding="0">
                                    <tbody>
                                    <tr>
                                        <td width="24%" align="left" valign="top">
                                            <Typography sx={{ fontFamily:'Monserrat , sans-serif', fontSize: '14px', color: '#666', fontWeight: 300 }}>
                                                Height:
                                            </Typography>
                                        </td>
                                        <td width="26%" valign="top">
                                            <Typography sx={{ fontFamily:'Monserrat , sans-serif', fontSize: '14px', color: '#111', fontWeight: 400 }}>
                                                <strong>~ {pokemonDetail.height / 10} m</strong>
                                            </Typography>
                                        </td>
                                        <td width="24%" valign="top">
                                            <Typography sx={{ fontFamily:'Monserrat , sans-serif', fontSize: '14px', color: '#666', fontWeight: 300 }}>
                                                Generation:
                                            </Typography>
                                        </td>
                                        <td width="26%" valign="top">
                                            <Typography sx={{ fontFamily:'Monserrat , sans-serif', fontSize: '14px', color: '#111', fontWeight: 400 }}>
                                                <strong>I</strong>
                                            </Typography>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="left" valign="top">
                                            <Typography sx={{ fontFamily:'Monserrat , sans-serif', fontSize: '14px', color: '#666', fontWeight: 300 }}>
                                                Weight:
                                            </Typography>
                                        </td>
                                        <td valign="top">
                                            <Typography sx={{ fontFamily:'Monserrat , sans-serif', fontSize: '14px', color: '#111', fontWeight: 400 }}>
                                                <strong>~ {pokemonDetail.weight /10} kg</strong>
                                            </Typography>
                                        </td>
                                        <td valign="top">
                                            <Typography sx={{ fontFamily:'Monserrat , sans-serif', fontSize: '14px', color: '#666', fontWeight: 300 }}>
                                                Candy:
                                            </Typography>
                                        </td>
                                        <td valign="top">
                                            <Typography sx={{ fontFamily:'Monserrat , sans-serif', fontSize: '14px', color: '#111', fontWeight: 400 }}>
                                                <strong>Bulbasaur</strong>
                                            </Typography>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Divider/>

                </>
            }
        </Box>
    )
}

PokemonCards.propTypes = {
    data: PropTypes.object.isRequired,
};

PokemonCards.defaultProps = {
    data: {},
};

export default PokemonCards;
