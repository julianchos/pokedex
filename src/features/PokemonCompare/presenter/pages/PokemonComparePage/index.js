// material
import {Box, Container, Grid, Typography, Card} from '@mui/material';
import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import MenuItem from "@mui/material/MenuItem";
import {Pokemon} from "features/PokemonList/model/pokemon_entity";
import CircularProgress from "@mui/material/CircularProgress";

const PokemonComparePage = () => {
    const [loading, setLoading] = useState(false)
    const [details, setDetails] = useState([])
    const { id } = useParams()

    useEffect(
        () => {
            if (id) {
                const ids = id.split('--')
                if (ids.length > 0) {
                    getDetailsForCompare(ids)
                }
            }
        }, [id])

    const getDetailsForCompare = (ids) => {
        setLoading(true)
        const promises = [];
        const pokemon = new Pokemon()
        ids.map((id) => (
            promises.push(pokemon.getPokemonDetail({id: id}))
        ))
        Promise.all(promises).then(res => {
            setDetails(res)
            setLoading(false)
        });

    }

    return (
        <Container sx={{width: '100%'}} maxWidth={'xl'}>
            <Box display={'flex'} justifyContent={'center'}>
                <Typography variant="h3" component="h3" paragraph sx={{fontFamily: 'Pokemon , sans-serif', color: '#1d8696', textTransform:'capitalize'}}>
                    Compare pokemons
                </Typography>
            </Box>

            {loading &&
                <Grid container sx={{width: '100%'}} justifyContent="center" spacing={4} marginBottom={3} marginTop={1}>
                    <Grid item alignItems="center">
                        <CircularProgress color="secondary" />
                    </Grid>
                    <Grid item alignItems="center">
                        <span>Loading pokemons...</span>
                    </Grid>
                </Grid>
            }

            <Box display={'flex'} justifyContent={'center'}>
            {
                details && details.map((pokemon) => (
                    <Card sx={{margin: '5px', padding: '5px'}} xs={6} key={pokemon.data.id}>
                        <Box xs={12}  justifyContent={'center'}>
                            <Typography sx={{fontFamily: 'Monserrat , sans-serif', fontSize: '24px', color: '#111', textTransform:'capitalize'}}>
                                #{pokemon.data.id}
                            </Typography>
                            <Typography sx={{fontFamily: 'Pokemon , sans-serif',fontSize: '35px', color: '#ffcb08', textTransform:'capitalize'}}>
                                {pokemon.data.name}
                            </Typography>
                            <Grid item xs={4} alignItems="center">
                                <img className="animated infinite pulse delay-2s"  src={pokemon.data.sprites && pokemon.data.sprites.other && pokemon.data.sprites.other.home && pokemon.data.sprites.other.home.front_default} width={170} />
                            </Grid>
                            <Grid item xs={8} >
                                <Typography sx={{ fontFamily:'Monserrat , sans-serif',  fontSize: '13px', color: '#a3a3a3', fontWeight: 600, textTransform: 'uppercase' }}>
                                    {pokemon.data.types && pokemon.data.types.reduce((res, { type: { name } }) => res + ' / ' + (name ?? ''), '').slice(2)}
                                </Typography>
                                <Typography marginTop={1} sx={{ fontFamily:'Monserrat , sans-serif', fontSize: '13px', color: '#111'}}>
                                    This Pokémon ipsum dolor sit amet oh, you're my best friend Luvdisc Baltoy Giovanni Heatran Red. Misty Breloom Metagross Ditto Budew Silver Infernape.
                                </Typography>
                            </Grid>
                        </Box>
                    </Card>
                ))
            }
            </Box>

            {
                details && details.map((pokemon) => (
                    <Grid item xs={12} display={'flex'} justifyContent={'center'} key={pokemon.data.id}>
                        <Grid sx={{fontFamily:'Monserrat , sans-serif', background: '#e8f0e1', borderRadius: '17px', width: '550px', overflow: 'hidden', marginTop: '10px', marginBottom: '7px'}}>
                            <table width="100%" border="0" cellSpacing="0" cellPadding="0">
                                <tbody>
                                <tr height={'30px'}>
                                    <td width="14%">
                                        <Typography  sx={{ fontFamily:'Monserrat , sans-serif', textAlign: 'center',  fontSize: '21px', color: '#111', fontWeight: 600, textTransform: 'uppercase' }}>
                                            #{pokemon.data.id}
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
                ))
            }


        </Container>
    )
}

export default PokemonComparePage