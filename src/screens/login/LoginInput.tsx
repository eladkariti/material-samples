import { CircularProgress } from "@mui/material"
import { LoginCard } from "../../ui/cards/login/loginCard"
import { VerifyCard } from "../../ui/cards/verify/loginCard"

const LoginInput = () => {
    return (
        <div className="app_bg_column">
            
            <LoginCard />
            <VerifyCard/>
            <CircularProgress className="centered_loader" variant='determinate' />
        </div >
    )
}


export default LoginInput