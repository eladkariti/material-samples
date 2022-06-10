import { TransparentVerticalDivider } from '../../ui/divider';
import './login.css';
import LoginInput from "./LoginInput";
import LoginWelcome from "./LoginWelcome";


const Login = () => {

    return (
        <div className="app_bg_column flex">
            <div className="center app_bg_row loginMain ">
                <LoginWelcome />
                <TransparentVerticalDivider width={150} />
                <LoginInput />
            </div>
            <div className="loginExtra"></div>

        </div>

    )

}


export default Login;