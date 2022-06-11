import { CardActions, Link } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { FilledButton, Button } from '../../../ui/button';
import { HorizontalDivider } from '../../../ui/divider';
import { DisclaimerText } from '../../../ui/text';
import { TextField } from '../../../ui/textField';


export const LoginCard = () => {
    return (<Card variant='elevation' className='login_fade_out'>
        <CardContent>
            <TextField inputMode='email' label='Email' hint='Enter your email' fullWidth={true} focused={true} />
            <br />
            <br />
            <TextField type='password' label='Password' hint='Enter your password' fullWidth={true} />
            <br />
            <br />
            <br />
            <FilledButton fullWidth={true}> login</FilledButton>
            <br />
            <br />
            <Button fullWidth={true} >Forgot Your Password?</Button>
            <br />
            <br />
            <HorizontalDivider />

        </CardContent>

        <CardActions>
            <DisclaimerText>By pressing login you are acknowledge to the<Link href='https://www.one.co.il'> terms and conditions</Link> </DisclaimerText>
        </CardActions>
    </Card>)
}



