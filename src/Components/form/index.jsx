import React from 'react';
import './styles.css'

//hook form
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup";
import { onlyLetters, tel, DDD } from '../utils/validation';



const Form = () => {
    const schema = yup.object().shape({
        name: yup.string().matches(onlyLetters).min(3, 'mínimo 3 caracteres').required('Required field !'),
        surName: yup.string().matches(onlyLetters).min(3, 'mínimo 3 caracteres').required('Required field !'),
        lastName: yup.string().matches(onlyLetters).min(3, 'mínimo 3 caracteres').required('Required field !'),
        birthDate: yup.string().required('Required field !'),
        email: yup.string().email().required('Required field !'),
        DDD: yup.string().matches(DDD).min(2, 'mínimo 2 caracteres').required('Required !'),
        tel: yup.string().matches(tel).min(9, 'mínimo 9 caracteres').max(9, 'máximo 9 caracteres').required('Required field !'),
        aboutLanguage: yup.string().required('Required field !'),

    });

    const { register, handleSubmit, formState: { errors }, } = useForm({
        resolver: yupResolver(schema)
    });

    const newUser = (user) => {
        console.log(user)
    }
    console.log(errors)
    return (
        <div className='formContainer'>
            <div className="title">
                <h1>Form</h1>
            </div>

            <form action="#" onSubmit={handleSubmit(newUser)}>
                <div className='row'>
                    <div className='colum'>
                        <label htmlFor="name"><strong>Name</strong> </label>
                        <input style={{ border: errors.name ? '1px solid red' : '' }} type="text" id="name" placeholder='First name' {...register("name")} />

                    </div>
                    <div className='colum'>
                        <label htmlFor="surName"><strong>Surname</strong></label>
                        <input style={{ border: errors.surName ? '1px solid red' : '' }} type="text" id="surName" placeholder='Surname' {...register("surName", { pattern: /^[A-Za-z]+$/i })} />

                    </div>
                    <div className='colum'>
                        <label htmlFor="lastName"><strong>Last Name</strong></label>
                        <input style={{ border: errors.lastName ? '1px solid red' : '' }} type="text" id="lastName" placeholder='Last Name' {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />

                    </div>
                </div>
                <div className='colum'>
                    <label htmlFor="birthDate"><strong>Birth date</strong></label>
                    <input style={{ border: errors.birthDate ? '1px solid red' : '' }} type="date" id="birthDate" {...register("birthDate")} />
                </div>

                <div className='colum'>
                    <label htmlFor="email"><strong>E-mail</strong></label>
                    <input style={{ border: errors.email ? '1px solid red' : '' }} type='email' id="email" placeholder='e-mail' {...register("email", { pattern: /[a-z]+@[a-z]+\.com(\.br)*/ })} />

                </div>
                <div className='row tel'>
                    <div className='colum DDD' >
                        <label htmlFor="DDD"><strong>DDD</strong></label>
                        <input style={{ border: errors.DDD ? '1px solid red' : '' }} type="tel" id="DDD" maxLength="2" placeholder='DDD' {...register("DDD")} />

                    </div>
                    <div className='colum'>
                        <label htmlFor="tel"><strong>Tel</strong></label>
                        <input style={{ border: errors.tel ? '1px solid red' : '' }} type="tel" id="tel" maxLength="9" placeholder='00000-0000' {...register("tel")} />

                    </div>
                </div>
                <div className='colum'>

                    <p><strong>Qual linguagem de programação você mais gosta ?</strong></p>

                    <div className='row radios'>
                        <label htmlFor="javaScript"><strong>JavaScript</strong></label>
                        <input type="radio" name='javaScript' id="javaScript" value='javaScript' />
                        <p>|</p>
                        <label htmlFor="Python"><strong>Python</strong></label>
                        <input type="radio" name='Python' id="Python" value='Python' />
                        <p>|</p>
                        <label htmlFor="C#"><strong>C#</strong></label>
                        <input type="radio" name='C#' id="C#" value='C#' />
                        <p>|</p>
                        <label htmlFor="C++"><strong>C++</strong></label>
                        <input type="radio" name='C++' id="C++" value='C++' />
                        <p>|</p>
                        <label htmlFor="PHP"><strong>PHP</strong></label>
                        <input type="radio" name='PHP' id="PHP" value='PHP' />
                        <p>|</p>
                        <label htmlFor="Swift"><strong>Swift</strong></label>
                        <input type="radio" name='Swift' id="Swift" value='Swift' />
                        <p>|</p>
                        <label htmlFor="Java"><strong>Java</strong></label>
                        <input type="radio" name='Java' id="Java" value='Java' />
                        <p>|</p>
                        <label htmlFor="Go"><strong>Go</strong></label>
                        <input type="radio" name='Go' id="Go" value='Go' />
                        <p>|</p>
                        <label htmlFor="SQL"><strong>SQL</strong></label>
                        <input type="radio" name='SQL' id="SQL" value='SQL' />
                        <p>|</p>
                        <label htmlFor="Ruby"><strong>Ruby</strong></label>
                        <input type="radio" name='Ruby' id="Ruby" value='Ruby' />
                    </div>
                    <div className='colum'>
                        <label htmlFor="aboutLanguage"><strong>Descreva um pouco sobre sua linguagem de programação favorita</strong></label>
                        <textarea style={{ border: errors.aboutLanguage ? '1px solid red' : '' }} id="aboutLanguage" cols="30" rows="10" {...register("aboutLanguage")} ></textarea>

                    </div>
                </div>
                <button type="submit">SUBMIT</button>
            </form>
        </div>
    );
}

export default Form;