import React from "react";
import {  useForm} from "react-hook-form";
import {  axiosWithAuth}  from "../utils/axiosWithAuth"

import {  Login, 
          VolunteerForm,
          Button, 
          Body, 
          Formgroup, 
          Styledform, 
          Labels, 
          Inputs  
} from "../Login/LoginStyles"





export default function LoginForm(props) {
  const { register, handleSubmit, errors } = useForm();


  const onSubmit = data => {
   

    axiosWithAuth()
      .post("#", data)

      .then(res => {
        
        localStorage.setItem("token", res.data.token);
        props.history.push("/dashboard");
      })
      .catch(err => {
        alert((err.message = "Invalid Username or Password"));
        console.log(err.response);
      });
  };


return (
  <VolunteerForm>
    <Login>DANE SANCTUARY VOLUNTEER OPPORTUNITIES</Login>
    <Body>
    * Indicates required field
    </Body>
    <form onSubmit={handleSubmit(onSubmit)}>
      <Styledform>
        <Formgroup>

          {/* Start of UserName field */}
          <Labels htmlFor='username'>
            First Name
            <Inputs
              type='text'
              name='username'
              placeholder='first name'
              ref={register({ required: true, minLength: 6, maxLength: 15 })}
            />
          </Labels>
          {errors.username && errors.username.type === "required" && (
            <span>Please enter a name</span>
          )}
          {errors.username && errors.username.type === "minLength" && (
            <span>Username is too short</span>
          )}
          {errors.username && errors.username.type === "maxLength" && (
            <span>Username is too long</span>
          )}
 <Labels htmlFor='username'>
            Last Name
            <Inputs
              type='text'
              name='username'
              placeholder='Last name'
              ref={register({ required: true, minLength: 6, maxLength: 15 })}
            />
          </Labels>
          {errors.username && errors.username.type === "required" && (
            <span>Please enter a name</span>
          )}
          {errors.username && errors.username.type === "minLength" && (
            <span>Username is too short</span>
          )}
          {errors.username && errors.username.type === "maxLength" && (
            <span>Username is too long</span>
          )}

          {/* End of UserName Field */}

          {/* Start of Password Field */}
          <Labels htmlFor='password'>
            <span>
              {" "}
           
            </span>
           Email
          </Labels>
          <Inputs
            type='text'
            placeholder='Email'
            name='password'
            ref={register({ required: true, minLength: 4 })}
          />

          {errors.password && errors.password.type === "required" && (
            <span>Email is required</span>
          )}
          {errors.password && errors.password.type === "minLength" && (
            <span>Password is too short - 4 characters</span>
          )}
                    {/* End of password field  */}
                    <p>I would like to volunteer to be of service to persons in sanctuary. I am willing to do the following (check all that apply):</p>
                    <input type="checkbox" placeholder=" I can provide occasional meals" name="pick me" ref={register} />  I can provide occasional meals
                    <input type="checkbox" placeholder=" I can provide occasional meals" name="pick me" ref={register} />   I can do grocery shopping and other errands 
                    <input 
                    type="checkbox" placeholder=" I can provide occasional meals" name="pick me" ref={register} />   I can provide transportation for family visits and other purposes as needed   <input 
                    type="checkbox" placeholder=" I can provide occasional meals" name="pick me" ref={register} />    I can provide accompaniment to legal proceedings  <input 
                        type="checkbox" placeholder=" I can provide occasional meals" name="pick me" ref={register} />   I can help with translating: use the comment box below to indicate: Spanish; Arabic; 
                     
                     <Labels htmlFor='username'>
            <Inputs
              type='text'
              name='username'
              placeholder='Other Language'
              ref={register({ required: true, minLength: 6, maxLength: 15 })}
            />
                    </Labels>
                    
                    <input 
                        type="checkbox" placeholder=" I can provide occasional meals" name="pick me" ref={register} />   I am a lawyer and can volunteer for pro-bono legal assistance (not related to deportation proceedings)
                     <input 
                        type="checkbox" placeholder=" I can provide occasional meals" name="pick me" ref={register} />   I am a health care professional and can volunteer for pro-bono medical care <input 
                        type="checkbox" placeholder=" I can provide occasional meals" name="pick me" ref={register} />   I am a mental health professional and can volunteer for emotional health support
                        <input 
                        type="checkbox" placeholder=" I can provide occasional meals" name="pick me" ref={register} />  I can write press releases
                     <input 
                        type="checkbox" placeholder=" I can provide occasional meals" name="pick me" ref={register} />  I can use social media to publicize events and actions
                     <input 
                        type="checkbox" placeholder=" I can provide occasional meals" name="pick me" ref={register} />   I can write statements in response to news and events
                     <input 
                        type="checkbox" placeholder=" I can provide occasional meals" name="pick me" ref={register} />  I can help arrange press conferences
                     <input 
                        type="checkbox" placeholder=" I can provide occasional meals" name="pick me" ref={register} />    I can write letters to the newspapers
                     <input 
                        type="checkbox" placeholder=" I can provide occasional meals" name="pick me" ref={register} />  I can attend rallies and other events
                     <input 
                        type="checkbox" placeholder=" I can provide occasional meals" name="pick me" ref={register} />    I can make lobby visits/phone calls to my legislators
                     <input 
                        type="checkbox" placeholder=" I can provide occasional meals" name="pick me" ref={register} />     I can create and maintain a database of email contacts of Coalition members
                     <input 
                        type="checkbox" placeholder=" I can provide occasional meals" name="pick me" ref={register} />    I can attend Coalition meetings and send out reports and updates to the membership as needed
                     <input 
                        type="checkbox" placeholder=" I can provide occasional meals" name="pick me" ref={register} />     I have experience speaking to the media and can act as spokesperson/train volunteers to be spokespeople on behalf of the Coalition
                     <input 
                        type="checkbox" placeholder=" I can provide occasional meals" name="pick me" ref={register} />    I can help create marketing and outreach materials to reach new congregations
                     <input 
                        type="checkbox" placeholder=" I can provide occasional meals" name="pick me" ref={register} />   I can speak to prospective congregations and organizations about the Dane Sanctuary Coalition
                     
                     <Labels htmlFor='username'>
                     Tell Us What Congregation you belong to and any other information from the above list *
            <Inputs
              type='text'
              name='username'
              ref={register({ required: true, minLength: 6, maxLength: 15 })}
            />
          </Labels>

                    

        </Formgroup>

        <div className='footer'>
          <Button>Submit</Button>
        </div>

      </Styledform>
    </form>
  </VolunteerForm>
);
}