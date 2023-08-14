import { useState } from "react";
import { Box } from "@mui/material";
import Typography from '@mui/material/Typography';
import TextField from "@mui/material/TextField";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CampaignIcon from '@mui/icons-material/Campaign';
import IconButton from '@mui/material/IconButton';

export default function Mainlogic(props) {
    const [field, setfield] = useState("");
    const changevalue = (event) => {
        setfield(event.target.value);
    }
    const uppercase = () => {
        props.msg("Converted to Uppercase");
        setfield((prev) => {
            return prev.toUpperCase();
        })
    }
    const lowercase = () => {
        props.msg("Converted to Lowercase");
        setfield((prev) => {
            return prev.toLowerCase();
        })
    }
    const capitalize = () => {
        props.msg("Sucessfully Capitalized");
        setfield((prev) => {
            return prev.charAt(0).toUpperCase() + prev.slice(1);
        })
    }
    const removespaces = () => {
        props.msg("Spaces have been removed successfully");
        setfield((prev) => {
            return prev.trim();
        })
    }
    const cleartext = () => {
        props.msg("Successfully Cleared");
        setfield("");
    }
    const copytext = () => {
        props.msg("Text Copied");
        navigator.clipboard.writeText(field);
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = field;
        window.speechSynthesis.speak(msg);
    }
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 2,
            backgroundColor: `${(props.checked) ? '#116D6E' : '#FFF1DC'}`,
            height: '1500px',
            transition: '1s',
        }}>
            <IconButton
                size="large"
                edge="start"
                style={{ color: `${(props.checked) ? 'white' : 'black'}`, transition: '1s' }}
                aria-label="Icon"
                onClick={speak}
            >
                <CampaignIcon />
            </IconButton>
            <Typography sx={{
                fontWeight: "bold",
                fontSize: "40px",
                color: `${(props.checked) ? 'white' : 'black'}`,
                transition: '1s'
            }}>Write your Text below : </Typography>
            <TextField
                id="outlined-multiline-static"
                label="Text"
                multiline
                value={field}
                onChange={changevalue}
                inputProps={{
                    style: {
                        width: "900px",
                        height: "200px",
                        fontSize: "30px",
                        color: `${(props.checked) ? 'white' : 'black'}`,
                        transition: '1s',
                    },
                }}
            />
            <Stack direction="row" spacing={2} sx={{
                margin: 1,
                height: '60px',
                alignItems: 'flex-start',
                flexWrap: "wrap"

            }}>
                <Button variant="contained" color="success" onClick={uppercase}>
                    Uppercase
                </Button>
                <Button variant="contained" color="success" onClick={lowercase}>
                    Lowercase
                </Button>
                <Button variant="contained" color="success" onClick={removespaces} >
                    Remove Spaces
                </Button>
                <Button variant="contained" color="success" onClick={copytext}>
                    Copy Text
                </Button>
                <Button variant="contained" color="success" onClick={capitalize}>
                    Capitalize
                </Button>
                <Button variant="contained" color="error" onClick={cleartext}>
                    CLEAR TEXT
                </Button>
            </Stack>
            <Typography sx={{
                fontWeight: "bold",
                fontSize: "40px",
                color: `${(props.checked) ? 'white' : 'black'}`, transition: '1s'
            }}>Text Summary: </Typography>
            <Typography variant="h5" sx={{ color: `${(props.checked) ? 'white' : 'black'}`, transition: '1s', marginTop: 3 }}>Words : {(field.length === 0) ? 0 : field.split(" ").length} and Characters : {field.length} </Typography>
            <Typography sx={{
                fontWeight: "bold",
                fontSize: "40px",
                marginTop: 3,
                color: `${(props.checked) ? 'white' : 'black'}`, transition: '1s'
            }}>Time taken to read : {(field.length === 0) ? 0 : (0.008 * field.split(" ").length)} minutes</Typography>
            <Typography sx={{
                fontWeight: "bold",
                fontSize: "40px",
                marginTop: 4,
                color: `${(props.checked) ? 'white' : 'black'}`, transition: '1s'
            }}>Preview:  </Typography>
            {(field.length==0)? <Typography variant="h5" sx={{ color: `${(props.checked) ? 'white' : 'black'}`, transition: '1s', marginTop: 3 , border: `${(field.length === 0 ? 'none' : '4px solid red')}` }}> Nothing to Preview! </Typography> : <Typography variant="h5" sx={{ color: `${(props.checked) ? 'white' : 'black'}`, transition: '1s', border: `${(field.length === 0 ? 'none' : '4px solid red')}`, p: 2 }}>{field}</Typography>}
        </Box>
    );
}