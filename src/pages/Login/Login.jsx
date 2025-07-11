import './Login.css'
import logo from '../../assets/logo.png'
import { useState } from 'react'
import { login, signup } from '../../firebase'

const Login = () => {
    const [signState, setSignState] = useState('Sign In')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const user_auth = async (e) => {
        e.preventDefault()
        if (signState === 'Sign In') {
            await login(email, password)
        } else {
            await signup(name, email, password)
        }
    }

    return (
        <div className='login'>
            <img src={logo} alt="" className='login-logo' />
            <div className="login-form">
                <h1>{signState}</h1>
                <form action="">
                    {signState === 'Sign Up' && <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Your name' />}
                    <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder=' Email' />
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
                    <button type='submit' onClick={user_auth}>{signState}</button>
                    <div className="form-help">
                        <div className="remember">
                            <input type="checkbox" />
                            <label htmlFor="">Remember Me</label>
                        </div>
                        <p>Need Help?</p>
                    </div>
                </form>
                <div className="form-switch">
                    {signState === 'Sign In' ?
                        <p>New to Netflix? <span onClick={() => setSignState('Sign Up')}>Sign Up Now</span></p>
                        : <p>Already have account? <span onClick={() => setSignState('Sign In')}>Sign In Now</span></p>
                    }
                </div>
            </div>
        </div >
    )
}

export default Login