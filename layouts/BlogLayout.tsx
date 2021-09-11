import React, { PropsWithChildren } from 'react'
import { Transition } from '@headlessui/react'
import readingTime from 'reading-time'
import avatar from '../images/avatar.jpg'
import Image from 'next/image'

export interface BlogLayoutProps extends PropsWithChildren<any> {}

export default function BlogLayout({ children, frontmatter }: BlogLayoutProps) {
    const { title, published } = frontmatter

    return (
        <article>
            <div className='flex'>
                {/* Blog Header */}
                <div className='text-center border-b mb-10'>
                    <h1 className='flex flex-2 items-center text-5xl tracking-wide leading-tight lining-nums font-sans font-bold text-gray-800 my-10'>
                        {title}
                        <span className='sr-only'>{`Read article "${title}"`}</span>
                    </h1>
                    <div className='flex justify-around text-xl w-5/6 mx-auto items-center mb-10 space-x-4 md:space-x-12'>
                        <div className='h-28 w-28'>
                            <Image
                                className='rounded-full mr-2'
                                layout='intrinsic'
                                src={avatar}
                                alt='Brennan Toles'
                            />
                        </div>
                        <a href='https://twitter.com/tolesdev'>@tolesdev</a>
                        <span className='flex items-center'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='h-5 w-5 text-pink-400 mr-1'
                                viewBox='0 0 20 20'
                                fill='currentColor'
                            >
                                <path d='M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z' />
                            </svg>
                            {/* <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='h-6 w-6 text-pink-400 mr-2'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                                />
                            </svg> */}
                            <span className='font-semibold text-gray-500'>
                                {published}
                            </span>
                        </span>
                    </div>
                </div>
                {/* Callout */}
                {/* <Transition
                    as='div'
                    className='flex md:flex-1 justify-between items-center w-full shadow-sm bg-white rounded-md p-2 mt-4'
                    show
                    enter='transition-opacity duration-200'
                >
                    <div className='flex flex-1'>
                        <img
                            className='w-12 rounded-full'
                            src='https://via.placeholder.com/48x48'
                            alt='Brennan Toles'
                        />
                        <div className='inline-flex flex-col justify-center ml-2'>
                            <p className='text-xs text-gray-400'>
                                Brennan Toles
                            </p>
                            <p className='text-xs font-medium text-indigo-600'>
                                @tolesdev
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-1 justify-center items-center overflow-hidden'>
                        <Transition
                            show
                            className='text-sm font-thin text-gray-400'
                            as='span'
                            enter='transition-transform delay-150 duration-1000'
                            enterFrom='translate-y-10'
                            enterTo='translate-y-0'
                        >
                            {readingTime(published).text}
                        </Transition>
                    </div>
                    <span className='flex flex-1 justify-end items-center text-md text-gray-500'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-4 w-4 text-pink-400'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                            />
                        </svg>
                        <span className='ml-1'>{published}</span>
                    </span>
                </Transition> */}
            </div>
            {/* Content */}
            <section>{children}</section>
        </article>
    )
}
