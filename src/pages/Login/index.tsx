import React from 'react'
import { KeyIcon, UserIcon } from '../../components/Icon'

function Login() {
    return (
        <form className='w-full'>
            <h2 className='font-bold text-[34px] mb-10 text-center'>Đăng nhập</h2>
            <div className='relative mb-4'>
                <label htmlFor='login_username' className='font-normal text-base leading-6'>
                    Tài khoản
                </label>
                <UserIcon className='absolute top-1/2 left-4' />
                <input
                    className='w-full pl-12 py-3 pr-4 border-neutrals-03 border outline-none rounded'
                    type='text'
                    id='login_username'
                    placeholder='Tài khoản'
                />
            </div>
            <div className='relative mb-4'>
                <label htmlFor='login_password' className='font-normal text-base leading-6'>
                    Mật khẩu
                </label>
                <KeyIcon className='absolute top-1/2 left-4' />
                <input
                    className='w-full pl-12 py-3 pr-4 border-neutrals-03 border outline-none rounded'
                    type='password'
                    id='login_password'
                    placeholder='Mật khẩu'
                />
            </div>
            <a
                href='#'
                className='mb-8 inline-block float-right text-primary font-normal text-base leading-6 hover:underline cursor-pointer'
            >
                Quên mật khẩu?
            </a>
            <button className='w-full text-lg leading-8 bg-primary text-white border rounded py-3 hover:opacity-80 transition duration-200'>
                Đăng nhập
            </button>
        </form>
    )
}

export default Login
