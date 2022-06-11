import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { FilledButton} from '../../../ui/button';
import { TextField } from '../../../ui/textField';


export const VerifyCard = () => {
    return (<Card variant='elevation' className='login_slide_in' >
        <CardContent>
            <TextField inputMode='email'  hint='Enter your code' fullWidth={true} focused={true} />
            <br />
            <br />
            <FilledButton fullWidth={true}> Continue</FilledButton>
            <br />
            <br />
         

        </CardContent>

    </Card>)
}



