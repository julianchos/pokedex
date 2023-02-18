// material
import {Container, Grid, Typography, Button} from '@mui/material'
import React, {useEffect, useState} from "react"
import {useNavigate, useParams} from 'react-router-dom'
import {Pokemon} from 'features/PokemonList/model/pokemon_entity'


const PokemonDetailPage = () => {
    const { id } = useParams()
    const [pokemonDetail, setPokemonDetail] = useState({})
    const navigate = useNavigate()

    useEffect(
        () => {
            const getPokemonDetail = async () => {
                const pokemon = new Pokemon()
                const response = await pokemon.getPokemonDetail({
                    id: id
                })
                if (response && response.data && Object.keys(response.data).length>0) {
                    setPokemonDetail(response.data)
                }
            }
            getPokemonDetail()
        }, [id])

    return (
        <Container maxWidth={'xl'}>
            <Typography variant="h3" component="h3" paragraph sx={{fontFamily: 'Pokemon , sans-serif', color: '#1d8696', textTransform:'capitalize'}}>
                {id}
            </Typography>

            <Grid container justifyContent="center" spacing={4} marginBottom={3} marginTop={1}>
                <Grid item xs={2} alignItems="center">
                    <img className="animated infinite pulse delay-2s" style={{marginTop: '-30px'}} src={pokemonDetail.sprites && pokemonDetail.sprites.other && pokemonDetail.sprites.other.home && pokemonDetail.sprites.other.home.front_default} width={170} />
                </Grid>
                <Grid item xs={10}>
                    <Typography  sx={{ fontFamily:'Monserrat , sans-serif',  fontSize: '13px', color: '#a3a3a3', fontWeight: 600, textTransform: 'uppercase' }}>
                        {pokemonDetail.types && pokemonDetail.types.reduce((res, { type: { name } }) => res + ' / ' + (name ?? ''), '').slice(2)}
                    </Typography>
                    <Typography marginTop={1} sx={{ width: '327px', fontFamily:'Monserrat , sans-serif', fontSize: '13px', color: '#111'}}>
                        This Pokémon ipsum dolor sit amet oh, you're my best friend Luvdisc Baltoy Giovanni Heatran Red. Misty Breloom Metagross Ditto Budew Silver Infernape. Rage Wingull Slowbro Pokemon Elite Four Infernape Vaporeon. Celadon Department Store Celadon Department Store Golbat Ninetales Sableye Crawdaunt Sewaddle. Vermilion City Illumise Carnivine Rayquaza Mawile Oshawott Cacnea.
                    </Typography>

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
                <Grid item xs={12}>
                    <Grid sx={{fontFamily:'Monserrat , sans-serif', background: '#e8f0e1', borderRadius: '17px', width: '550px', overflow: 'hidden', marginTop: '10px', marginBottom: '7px'}}>
                        <table width="100%" border="0" cellSpacing="0" cellPadding="0">
                            <tbody>
                            <tr height={'30px'}>
                                <td width="14%">
                                    <Typography  sx={{ fontFamily:'Monserrat , sans-serif', textAlign: 'center',  fontSize: '21px', color: '#111', fontWeight: 600, textTransform: 'uppercase' }}>
                                        #{pokemonDetail.id}
                                    </Typography></td>
                                <td width="20%">
                                    <Typography sx={{ fontFamily:'Monserrat , sans-serif', textAlign: 'center',  fontSize: '18px', color: '#111', fontWeight: 300, textTransform: 'uppercase' }}>
                                        Max HP
                                    </Typography>
                                </td>
                                <td width="23%">
                                    <Grid sx={{background: '#71edb9', paddingY:'7px', fontWeight: 600, borderRadius: '18px', fontSize: '21px', textAlign: 'center', color: '#fff', letterSpacing:'1px' }}>
                                        89
                                        <Typography variant={'span'} sx={{fontSize: '15px', fontWeight: 400 }}>
                                            HP
                                        </Typography>
                                    </Grid>
                                </td>
                                <td width="20%">
                                    <Typography sx={{ fontFamily:'Monserrat , sans-serif', textAlign: 'center',  fontSize: '18px', color: '#111', fontWeight: 300, textTransform: 'uppercase' }}>
                                        Max CP
                                    </Typography>
                                </td>
                                <td width="23%">
                                    <Grid sx={{background: '#c35fff', paddingY:'7px', fontWeight: 600, borderRadius: '18px', fontSize: '21px', textAlign: 'center', color: '#fff', letterSpacing:'1px' }}>
                                        <Typography variant={'span'} sx={{fontSize: '15px', fontWeight: 400 }}>
                                            CP
                                        </Typography>
                                        1136
                                    </Grid>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid padding={1} sx={{fontFamily:'Monserrat , sans-serif', background: 'linear-gradient(to bottom, #f0f7f5 0%, #cbfac5 300%)', borderRadius: '17px', width: '550px', overflow: 'hidden', marginTop: '10px', marginBottom: '7px'}}>
                        <Typography sx={{fontSize: '21px', color: '#44696c', fontWeight: 600, textTransform: 'uppercase' }}>
                            Pokémon go {pokemonDetail.name}
                        </Typography>

                        <table width="100%" border="0" cellSpacing="0" cellPadding="0">
                            <tbody>
                            <tr>
                                <td width="30%" align="right" valign="top" className="title">Generation:</td>
                                <td colSpan="3" valign="top" className="detail"><a href="/generation/generation-i">I</a>
                                </td>
                            </tr>
                            <tr>
                                <td width="30%" align="right" valign="top" className="title">Region:</td>
                                <td colSpan="3" valign="top" className="detail"><a href="/region/kanto">Kanto</a></td>
                            </tr>
                            <tr>
                                <td align="right" valign="top" className="title">Height:</td>
                                <td colSpan="3" valign="top" className="detail">~ 0.7 m</td>
                            </tr>
                            <tr>
                                <td align="right" valign="top" className="title">Weight:</td>
                                <td colSpan="3" valign="top" className="detail">~ 6.9 kg</td>
                            </tr>
                            <tr>
                                <td width="30%" align="right" valign="top" className="title">Stamina:</td>
                                <td width="5%" valign="top" className="detail">90</td>
                                <td width="64%" valign="top" className="detail">
                                    <div className="progress loading7"></div>
                                </td>
                                <td width="1" align="right" valign="top" className="detail"></td>
                            </tr>
                            <tr>
                                <td align="right" valign="top" className="title">Attack:</td>
                                <td valign="top" className="detail">118</td>
                                <td valign="top" className="detail">
                                    <div className="progress loading8" ></div>
                                </td>
                                <td align="right" valign="top" className="detail"></td>
                            </tr>
                            <tr>
                                <td align="right" valign="top" className="title">Defence:</td>
                                <td valign="top" className="detail">118</td>
                                <td valign="top" className="detail">
                                    <div className="progress loading9" ></div>
                                </td>
                                <td align="right" valign="top" className="detail"></td>
                            </tr>
                            <tr>
                                <td align="right" valign="top" className="title">Alternative forms:</td>
                                <td colSpan="3" valign="top" className="detail"><a
                                    href="bulbasaur">Bulbasaur</a> &nbsp; / &nbsp;<a href="/shiny/bulbasaur">Shiny
                                    Bulbasaur</a>
                                    &nbsp; / &nbsp;<a href="/species/shadow-bulbasaur">Shadow Bulbasaur</a></td>
                            </tr>
                            </tbody>
                        </table>
                    </Grid>

                    <Button sx={{background: 'linear-gradient(to right, #a2db95 0%, #6dedb7 100%)', borderRadius: '18px'}} variant="contained">Compare {pokemonDetail.name}</Button>
                </Grid>
            </Grid>
        </Container>
    )
}

export default PokemonDetailPage