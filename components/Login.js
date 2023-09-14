import {signIn} from "next-auth/react"

function Login() {
  return (
    <div className="grid place-items-center">
      <img
        src="https://i.ibb.co/Lzdxvg5/Screenshot-from-2023-08-11-07-44-08.png"
        width={400}
        height={400}
        objectFit="contain"
      />
      <h1 onClick={()=>signIn()}className="p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer">Login with Facebook</h1>
    </div>
  )
}


export default Login