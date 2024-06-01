import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import HideIc from '../assets/icons/eye-off-outline.svg'
import UnhideIc from '../assets/icons/eye-outline.svg'

const Loginscreen = () => {

    const navigate = useNavigate();
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
  
    const handleLogin = () => {
        navigate('/dashboard')
      // Implement login logic here
      console.log('Email:', email);
      console.log('Password:', password);
    };

  return (
    <Container>
      <div className='form-wrapper'>
        <div className='logo-wrapper'></div>
        <div className='text-container'>
            <p className='title'>Dashboard Kit</p>
            <p className='greetings'>Log In to Dashboard Kit</p>
            <p className='attentions'>Enter your email and password below</p>
        </div>
        <div className='email-title'>
            <p>EMAIL</p>
        </div>
        <div className='email-wrapper'>
            <input
            className='input-email'
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        <div className='password-title'>
            <p>PASSWORD</p>
            <div className='btn-forgotpw' onClick={()=>{}}>
                <p>Forgot password?</p>
            </div>
        </div>
        <div className='password-wrapper'>
          <input
            className='input-password'
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className='showhide-password' onClick={() => setShowPassword(!showPassword)}>
            {
                showPassword ? 
                <img src={HideIc} /> :
                <img src={UnhideIc} />
            }
          </div>
        </div>
        <div className='btn-login' onClick={handleLogin}>
          <p>Log In</p>
        </div>
        <div className='signup-wrapper'>
            <p>Don't have account?</p>
            <div className='signup-btn' onClick={()=>{}}>Sign up</div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.section`
    background-color: #363740;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;

    
    .form-wrapper{

        display: flex;
        flex-direction: column;
        background-color: #fff;
        border-radius: 10px;
        max-width: 400px;
        padding: 40px 30px 40px 30px;
        @media screen and (max-width: 576px) {
            width: 100%;
            padding: 40px 20px 20px 20px;
        }
        
        .logo-wrapper{
            background-color: #3851ff;
            align-self: center;
            height: 50px;
            width: 50px;
            border-radius: 25px;
        }
    
        .text-container{
            display: flex;
            flex-direction: column;
            /* align-self: center; */
            align-items: center;
            justify-content: center;
            .title{
                color: #9fa2b4;
                font-size: 20px;
                font-weight: bolder;
            }
            .greetings{
                font-size: 30px;
                font-weight: bold;
                margin-bottom: 5px;
            }
            .attentions{
                color: #9fa2b4;
                font-size: 16px;
                margin: 0px 0px 20px 0px;
            }
        }

        .email-title{
            p{
                margin-bottom: 5px;
                color: #9fa2b4;
                font-size: 12px;
            }
        }

        .email-wrapper{
            display: flex;
            width: 100%;
            margin-bottom: 10px;
            border-radius: 5px;
            filter: drop-shadow(0px 0px 2px #9fa2b4);
            .input-email{
                border-color: transparent;
                border-radius: 5px;
                width: 100%;
                padding: 5px;
            }
        }

        .password-title{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin-bottom: -5px;
            p{
                color: #9fa2b4;
                font-size: 12px;
            }
            .btn-forgotpw{
                align-self: center;
                &:hover{
                    p{color: #3851ff}
                }
                p{
                    color: #9fa2b4;
                    align-items: center;
                    justify-content: center;
                    align-self: center;
                    font-size:11px
                }
            }
        }

        .password-wrapper{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            background-color: #fff;
            border-color: #000;
            border-radius: 5px;
            max-width: 100%;
            margin-bottom: 20px;
            filter: drop-shadow(0px 0px 2px #9fa2b4);
            .input-password{
                width: 100%;
                padding: 5px;
                background-color: #fff;
                border-radius: 7px;
                border-color:transparent;
            }
            .showhide-password{
                display: flex;
                background-color: #fff;
                align-items: center;
                justify-content: center;
                width: 30px;
                cursor: pointer;
                img{
                    width: 20px;
                    height: 20px;
                    padding-right: 10px;
                    padding-left: 10px;
                }
            }
        }

        .btn-login{
            background-color: #3851ff;
            border-radius: 5px;
            display: flex;
            max-width: 100%;
            margin-bottom: 20px;
            height: 30px;
            justify-content: center;
            align-items: center;
            p{
                color: #fff;
                font-weight: bold;
            }
            &:hover{
                filter: drop-shadow(0px 0px 5px #aaa )
            }
            cursor: pointer;
        }

        .signup-wrapper{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap:3px;
            font-size: 12px;
            color: #9fa2b4;
            .signup-btn{
                font-weight: bolder;
                color: #3851ff;
                cursor: pointer;
                &:hover{
                    filter: drop-shadow(0px 0px 2px #aaa )
                }
            }
        }
    }
`

export default Loginscreen;
