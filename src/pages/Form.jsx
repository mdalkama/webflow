import React from 'react'
import { useForm, useWatch } from 'react-hook-form'
const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        reset,
        control
    } = useForm({ mode: 'onChange' });

const selectedAccountType = useWatch({ control ,name: 'accountType',});

    const onSubmit = (data) => {
        console.log("✅ Form Data:", data);
        alert("Form Submitted! Check console.");
    };

    return (
        <div className='user-form'>
            <form onSubmit={handleSubmit(onSubmit)} action="">
                <div className='form-heading'>
                    <p className='heading'>Profile</p>
                    <p className='description'>Manage Your name, preferences and account settings.</p>
                </div>
                <div className='main-form'>
                    <div className='input-text'>
                        <label htmlFor="firstname">
                            First name
                        </label>
                        <input type="text" id="firstname" placeholder='First name' {...register('name.firstName', { required: true })} />
                    </div>
                    <div className='input-text'>
                        <label htmlFor="lastname">
                            Last name
                        </label>
                        <input type="text" id="lastname" placeholder='Last name' {...register('name.lastName', { required: true })} />
                    </div>
                    <div className='input-text'>
                        <label htmlFor="email">
                            Email
                        </label>
                        <input type="email" id="email" placeholder='Email' {...register('email', { required: true })} />
                    </div>
                    <div className='input-text'>
                        <label htmlFor="password">
                            Password
                        </label>
                        <input type="password" id="password" placeholder='Password' {...register('password', { required: true })} />
                    </div>
                    <div className='input-text'>
                        <label htmlFor="phone">
                            Phone
                        </label>
                        <div className='input-split-phone'>
                            <select className='input' name="country-code" id="phone" {...register('mobile.countryCode', { required: true })}>
                                <option value="+91">+91</option>
                                <option value="+92">+92</option>
                            </select>
                            <input type="number" id="phone" placeholder='phone' {...register('mobile.number', { required: true, minLength: 10, maxLength: 10 })} />
                        </div>
                    </div>
                    <div className='input-text'>
                        <label htmlFor="communication-preference">
                            Communication Preference
                        </label>
                        <div className='input-split-communication'>
                            <input type="radio" value="phone" checked name="phone" id="phone-preference" {...register('communicationPreference', { required: true })} />
                            <label htmlFor="phone-preference">Phone</label>
                            <input type="radio" value="email" name="email" id="email-preference" {...register('communicationPreference', { required: true })}/>
                            <label htmlFor="email-preference">Email</label>
                        </div>
                    </div>
                    <div className='input-text'>
                        <label htmlFor="account-type">
                            Account Type
                        </label>
                            <select className='select-input' name="account-type" id="account-type" {...register('accountType', { required: true })}>
                            <option value="" >
                                -- Select Account Type --
                            </option>
                                <option value="individual">Individual</option>
                                <option value="Company">Company</option>
                            </select>
                    </div>
                    {
                        selectedAccountType === 'Company' && (
                            <div className='input-text'>
                                <label htmlFor="company-name">
                                    Company Name
                                </label>
                                <input type="text" id="company-name" placeholder='Company Name' {...register('companyName', { required: true })} />
                            </div>
                        )
                    }
                    {
                        selectedAccountType === 'individual' && (
                            <div className='input-text'>
                                <label htmlFor="pan-number">
                                    PAN number
                                </label>
                                <input type="text" uppecase="true" id="pan-number" placeholder='PAN number' {...register('pan', { required: true })} />
                            </div>
                        )
                    }
                </div>
                <div className='action-btns'>
                    <button onClick={() => {
                        reset()
                    }} className='reset-btn'>Reset</button>
                    <button disabled={!isValid} type='submit'className={`submit-btn ${isValid ? '' : 'disabled'}`}>Save changes</button>
                </div>
            </form>
        </div>
    )
}

export default Form
