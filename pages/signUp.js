import RegistrationForm from '@/components/user/registrationForm'
import classes from './signUp.module.css'

function SignUp(){
    return(
        <div className = {classes.sectionOne}>
            <h1>Sign Up Page</h1>

            <RegistrationForm/>
        </div>
    )
}

export default SignUp