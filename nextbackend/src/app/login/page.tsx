import {Metadata} from 'next'
import Login from './Login';


export const metadata: Metadata = {
    title: "Login: Auth",
  };

function LoginPage() {
  return (
    <Login />
  )
}

export default LoginPage