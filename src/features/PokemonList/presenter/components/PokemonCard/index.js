import {
    Box,
    Card,
    Grid,
    Divider,
    Typography,
    Skeleton,
    Chip
} from '@mui/material'

const PokemonCards = ({ data, selectLoan, preViewCredit, loading, loadingMessage, type}) => {
    return (
        <Grid width={1}>
            <Grid container justifyContent="center" spacing={2}>
                <Grid item xs={3}>
                    <Card>foto</Card>
                </Grid>
                <Grid item xs={9}>
                    <Card>detalles</Card>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default PokemonCards;
