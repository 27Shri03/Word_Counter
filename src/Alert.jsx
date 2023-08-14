import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

export default function Alert_system(props) {
    return (
        props.msg && <Alert severity="success" sx={{ backgroundColor: 'lightgreen' }}>
            <AlertTitle>Success</AlertTitle>
            <strong>{props.msg}</strong>
        </Alert>
    );
}