import React from 'react'
import { Form } from 'antd'
import { Link } from 'react-router-dom'

function Login() {

    const onFinish=(values)   => {
        console.log(values);
    }
    return (
        <div className='flex justify-center items-center h-screen font-family-1'>
            <div className='card w-400 p-3'>
                <div className='flex flex-col'>
                    {/*naglowek login*/}
                    <h1 className='text-2xl flex justify-center'>Login</h1>
                    <Form
                    layout='vertical'onFinish={onFinish}>
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
                        label='password'
                        >
                            <input type='password' className='w-90 border-radius' />
                        </Form.Item>
                        {/*przycisk login*/}
                        <button className='primary-button mt-2 w-404 border-radius' type='submit'>Login</button>
                        <Link to='/register' className='flex justify-right items-right mt-2 color color-black '>Don’t have account? <span className='color-primary ml-1 a:hover'>Sign Up</span></Link>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Login