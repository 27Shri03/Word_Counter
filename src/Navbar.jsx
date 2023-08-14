import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TranslateTwoToneIcon from '@mui/icons-material/TranslateTwoTone';
import Switch from '@mui/material/Switch';
import { Link } from 'react-router-dom';

function ResponsiveAppBar(props) {
    return (
        <AppBar position="static" style={{ background: `${(props.checked) ? 'black' : '#3A98B9'}`, transition: '1s' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <IconButton
                        size="large"
                        edge="start"
                        style={{ color: `${(props.checked) ? 'white' : 'black'}`, transition: '1s' }}
                        aria-label="Icon"
                        sx={{ mr: 2 }}
                    >
                        <TranslateTwoToneIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: `${(props.checked) ? 'white' : 'black'}`,
                            textDecoration: 'none',
                            transition: '1s',
                        }}
                    >
                        Word Counter
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Link style={{ margin: 9, color : `${(props.checked) ? 'white' : 'black'}`, display: 'block' , transition : '1s',  textDecoration : 'none'}} to='/home' >
                            Home
                        </Link>
                        <Link style={{ margin: 9 , color : `${(props.checked) ? 'white' : 'black'}`, display: 'block' , transition : '1s' ,  textDecoration : 'none'}} to='/about'>
                            About
                        </Link>
                    </Box>
                    <Box sx={{ flexGrow: 0, color: `${(props.checked) ? 'white' : 'black'}` }}>
                        <Switch checked={props.checked} onChange={props.change} /> {(props.checked) ? 'Disable' : 'Enable'} Darkmode
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
