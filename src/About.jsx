import Typography from '@mui/material/Typography'
import { Box } from '@mui/material';

export default function About(props){
    return (
        <Box sx={{backgroundColor: `${(props.checked) ? '#116D6E' : '#FFF1DC'}` , height : '525px' , transition: '1s'}}>
        <div style={{display: 'flex',justifyContent : 'center' }}>
        <Typography variant="h3" color="initial" sx={{fontWeight : 'bold' , p:2 , color: `${(props.checked) ? 'white' : 'black'}` , transition: '1s'}}>About</Typography>
        </div>
        <Typography variant="h5" color="initial" sx={{ml : 3 , mt:2 , color: `${(props.checked) ? 'white' : 'black'}` , transition: '1s'}}>
            This React Application allows the user to manipulate the text however the user want. Using this application one can perform :
            <ul>
                <li>Uppercase</li>
                <li>Lowercase</li>
                <li>Capitalize</li>
                <li>Convert Text to Speech</li>
                <li>Copy Text</li>
            </ul> 
        </Typography>
        </Box>
    );
}