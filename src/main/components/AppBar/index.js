import * as React from 'react'
import { styled, alpha } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import logo from 'main/assets/logo.png'
import MenuItem from '@mui/material/MenuItem'
import Icon from '@mui/material/Icon'
import SearchIcon from '@mui/icons-material/Search'
import InputBase from '@mui/material/InputBase'


const pages = ['Pokémon', 'Friends', 'Me'];

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '20px',
    color: '#111',
    border: '1px',
    borderColor: '#111',
    backgroundColor: alpha(theme.palette.common.white, 0.85),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.95),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#111',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '19ch',
            '&:focus': {
                width: '30ch',
            },
        },
    },
}))

function ResponsiveAppBar({onChangeFilter}) {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleChangeSearch = (e) => {
        onChangeFilter(e.target.value)
    };

    return (
        <AppBar position="fixed" sx={{background: 'linear-gradient(to bottom, #6dedb7 0%, #33D7B1 50%, #6dedb7 100%)'}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Icon sx={{ fontSize: 45, display: { xs: 'none', md: 'flex' }, mr: 1 }}>
                        <img src={logo} />
                    </Icon>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            ml: 1,
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'Pokemon , sans-serif',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            fontSize: '30px',
                            color: '#ffcb08',
                            textDecoration: 'none',
                        }}
                    >
                        PoGo
                    </Typography>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            ml: 1,
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'Monserrat , sans-serif',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Guide
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },

                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography sx={{color: '#1d8696', fontFamily:'Monserrat , sans-serif'}} textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Icon sx={{ fontSize: 45, display: { xs: 'flex', md: 'none' }, mr: 1 }}>
                        <img src={logo} />
                    </Icon>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'Pokemon , sans-serif',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            fontSize: '30px',
                            color: '#ffcb08',
                            textDecoration: 'none',
                        }}
                    >
                        PoGo
                    </Typography>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'Pokemon , sans-serif',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            fontSize: '30px',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Guide
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: '#1d8696', fontFamily:'Monserrat , sans-serif', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                                onChange={handleChangeSearch}
                            />
                        </Search>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;