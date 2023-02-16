// material
import { Container, Typography } from '@mui/material';
import PokemonCards from 'features/PokemonList/presenter/components/PokemonCard'

const PokemonDetailPage = () => {
    return (
        <Container maxWidth={'lg'}>
            <Typography variant="h3" component="h1" paragraph>
                Seed Pokémon
            </Typography>

            <PokemonCards/>

        </Container>
    )
}

export default PokemonDetailPage