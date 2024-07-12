import { SignUp } from '@clerk/clerk-react'


const SignUpPage = () => {
  return (
    <div>
      <SignUp
      signInUrl='/sign-in' forceRedirectUrl={"/tracking"}
      />
    </div>
  )
}

export default SignUpPage
