import React from 'react'
import { KeyIcon, UserIcon } from '../../components/Icon'

function Login() {
    return (
        <form className='w-full'>
            <h2 className='font-bold text-[34px] mb-10 text-center'>Đăng nhập</h2>
            <div className='relative mb-4'>
                <label htmlFor='login_username' className='text-base font-normal leading-6'>
                    Tài khoản
                </label>
                <UserIcon className='absolute top-1/2 left-4' />
                <input
                    className='w-full py-3 pl-12 pr-4 border rounded outline-none border-neutrals-03'
                    type='text'
                    id='login_username'
                    placeholder='Tài khoản'
                />
            </div>
            <div className='relative mb-4'>
                <label htmlFor='login_password' className='text-base font-normal leading-6'>
                    Mật khẩu
                </label>
                <KeyIcon className='absolute top-1/2 left-4' />
                <input
                    className='w-full py-3 pl-12 pr-4 border rounded outline-none border-neutrals-03'
                    type='password'
                    id='login_password'
                    placeholder='Mật khẩu'
                />
            </div>
            <a
                href='#'
                className='inline-block float-right mb-8 text-base font-normal leading-6 cursor-pointer text-primary-blue hover:underline'
            >
                Quên mật khẩu?
            </a>
            <button className='w-full py-3 text-lg leading-8 text-white transition duration-200 border rounded bg-primary-blue hover:opacity-80'>
                Đăng nhập
            </button>
        </form>
    )
}

export default Login
