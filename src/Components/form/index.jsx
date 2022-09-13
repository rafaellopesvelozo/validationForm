import React from 'react';
import './styles.css'

//hook form
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import schema from './valdiation'




const Form = () => {
    
    const { register, handleSubmit, formState: { errors }, } = useForm({
        resolver: yupResolver(schema)
    });

    const newUser = (data) => {
        console.log(data)
    }
    return (
        <div className='formContainer'>
            <div className="title">
                <h1>Form</h1>
            </div>

            <form action="#" onSubmit={handleSubmit(newUser)}>
                <div className='row'>
                    <div className='colum'>
                        <label htmlFor="name"><strong>Name</strong> </label>
                        <input style={{ border: errors.name ? '1px solid red' : '' }}
                            type="text"
                            id="name"
                            placeholder='First name'
                            {...register("name")} />
                        <span className="error">{errors?.name?.message}</span>
                    </div>
                    <div className='colum'>
                        <label htmlFor="surName"><strong>Surname</strong></label>
                        <input style={{ border: errors.surName ? '1px solid red' : '' }}
                            type="text"
                            id="surName"
                            placeholder='Surname'
                            {...register('surName')} />
                        <span className="error">{errors?.surName?.message}</span>
                    </div>
                    <div className='colum'>
                        <label htmlFor="lastName"><strong>Last Name</strong></label>
                        <input style={{ border: errors.lastName ? '1px solid red' : '' }}
                            type="text"
                            id="lastName"
                            placeholder='Last Name'
                            {...register('lastName')} />
                        <span className="error">{errors?.lastName?.message}</span>
                    </div>
                </div>
                <div className='colum'>
                    <label htmlFor="birthDate"><strong>Birth date</strong></label>
                    <input style={{ border: errors.birthDate ? '1px solid red' : '' }}
                        type="date"
                        id="birthDate"
                        {...register('birthDate')} />
                    <span className="error">{errors?.birthDate?.message}</span>
                </div>

                <div className='colum'>
                    <label htmlFor="email"><strong>E-mail</strong></label>
                    <input style={{ border: errors.email ? '1px solid red' : '' }}
                        type='email'
                        id="email"
                        placeholder='e-mail'
                        {...register('email')} />
                    <span className="error">{errors?.email?.message}</span>
                </div>
                <div className='row tel'>
                    <div className='colum DDD' >
                        <label htmlFor="DDD"><strong>DDD</strong></label>
                        <input style={{ border: errors.DDD ? '1px solid red' : '' }}
                            type="number"
                            name='DDD'
                            id="DDD"                        
                            maxlength="2"
                            placeholder='DDD'
                            {...register("DDD")} />
                        <span className="error">{errors?.DDD?.message}</span>
                    </div>
                    <div className='colum'>
                        <label htmlFor="tel"><strong>Tel</strong></label>
                        <input style={{ border: errors.tel ? '1px solid red' : '' }}
                            type="number"
                            id="tel"
                            maxlength="9"                    
                            placeholder='XXXXX-XXXX'
                            {...register("tel")} />
                        <span className="error">{errors?.tel?.message}</span>
                    </div>
                </div>
                <div className='colum'>
                    <p><strong>What programming language do you like the most?</strong></p>
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
                        <label htmlFor="aboutLanguage"><strong>Describe a little about your favorite programming language</strong></label>
                        <textarea style={{ border: errors.aboutLanguage ? '1px solid red' : '' }} id="aboutLanguage" cols="30" rows="10" {...register("aboutLanguage")} ></textarea>
                        <span className="error">{errors?.aboutLanguage?.message}</span>
                    </div>
                </div>
                <button type="submit">SUBMIT</button>
            </form>
        </div>
    );
}

export default Form;