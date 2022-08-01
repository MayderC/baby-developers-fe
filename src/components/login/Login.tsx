import { useState } from 'react'
import BabyButton from '../BabyButton/BabyButton';

function Login() {

  const [canHiddePass, setCanHiddePass] = useState<boolean>(false)

  return(
<form className="bg-moradito shadow-2xl rounded-card p-6">
  <div className="md:flex md:items-center mb-6">
    <div className="">
      <input
        name='username'
        className="bg-white appearance-none border-3 border-purple-500 rounded-card w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-purple-two" 
        id="inline-full-name" 
        type="text" 
        autoFocus
        placeholder='Username'
      />
    </div>
  </div>
  <div className="md:flex md:items-center mb-6">
      <input
        name='password'
        className="bg-white appearance-none border-3 border-purple-500 rounded-card w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-purple-two" 
        id="inline-password" 
        type={canHiddePass ? 'text' : 'password'} 
        placeholder="******************"
      />
  </div>
  <div className="md:flex md:items-center mb-6">
    <label className="md:w-2/3 block text-gray-500 font-bold">
      <input 
        name='canHidePass'
        className="mr-2 leading-tight" 
        type="checkbox"
        onChange={(e)=> setCanHiddePass(e.target.checked)}
      />
      <span className="text-sm text-purple-dark hover:cursor-pointer select-none">
        show password
      </span>
    </label>
  </div>
    <div className="">
      <BabyButton text='Login' onClick={(e)=>{console.log(e)}}></BabyButton>
    </div>
</form>
);
}

export default Login;