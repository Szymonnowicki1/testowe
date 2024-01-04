import React from 'react';
import { Form } from 'antd';
import { Link } from 'react-router-dom'
function Register() {

    const onFinish=(values)   => {
        console.log(values);
    }
    return (
        <div className='flex justify-center items-center h-screen font-family-1'>
            <div className='card w-400 p-3'>
                <div className='flex flex-col'>
                    {/*naglowek rejestracji*/}
                    <h1 className='text-2xl flex justify-center '>Registration</h1>
                    <Form
                    layout='vertical' onFinish={onFinish}>
                           <Form.Item
                        name='name'
                        label='Name'
                        >
                            <input type='text' className='w-90 border-radius '/>
                        </Form.Item>
                           <Form.Item
                        name='surname'
                        label='Surname'
                        >
                            <input type='text' className='w-90 border-radius '/>
                        </Form.Item>
                        {/*pole email*/}
                        <Form.Item
                        name='email'
                        label='Email'
                        >
                            <input type='text' className='w-90 border-radius '/>
                        </Form.Item>
                        {/*pole haslo*/}
                        <Form.Item
                        name='password'
                        label='Password'
                        >
                            <input type='password' className='w-90 border-radius' />
                        </Form.Item>
                        {/*przycisk login*/}
                        <button className='primary-button mt-2 w-404 border-radius' type='submit'>Sign Up</button>
                        <Link to='/login' className='flex justify-right items-right mt-2 color color-black a:hover'>Already have an account? <span className='color-primary ml-1 '>Sign In</span></Link>

                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Register;