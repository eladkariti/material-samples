import { CircularProgress } from "@mui/material"
import { LoginCard } from "../../ui/cards/login/loginCard"

const LoginInput = () => {
    return (
        <div className="app_bg_column">
            <LoginCard/>
            <CircularProgress className="centered_loader" variant='indeterminate' />
        </div >
    )
}


export default LoginInput