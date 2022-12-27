import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const SignUp = () => {

    const {user, googleSignIn,createUser } = useContext(AuthContext);
    console.log(createUser)
    const navigate = useNavigate();

    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
  
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name,photoURL,email,password);
        createUser(email, password)
        .then(result=>{
          const user = result.user;
          navigate('/AddTask')  
          console.log(user)
          form.reset()
        })
        .catch(error =>{
          console.error(error);
        })

        form.reset()
    }

    return (
        <div className="">
        <form
          onSubmit={handleRegister}
          className="flex w-1/2 mx-auto mt-[20%] flex-col gap-8 bg-green-200"
        >
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Your Name" />
            </div>
            <TextInput
              id="name"
              type="text"
              placeholder="nayan"
              required={true}
              name="name"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="name@flowbite.com"
              required={true}
              name="email"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput
              id="password1"
              type="password"
              required={true}
              name="password"
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Button onSubmit={handleRegister} type="submit">
            Submit
          </Button>
          <p>Already have an account? <Link className="" to="/SignIn">Please <span className="text-blue-800">Login</span></Link> </p>
        </form>
      </div>
    );
};

export default SignUp;