import '@/styles/core.css'
import MenuIcon from '@heroicons/react/outline/MenuAlt4Icon'
import ChevronUpIcon from '@heroicons/react/outline/ChevronUpIcon'
import * as React from 'react'
import { Transition } from '@headlessui/react'

export default function App({ Component, pageProps }) {
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout || ((page) => page)
    const [isNavigationOpen, setIsNavigationOpen] = React.useState(false)
    const toggleNavigation = () => setIsNavigationOpen((isOpen) => !isOpen)

    return (
        <div>
            <header className='flex items-center justify-between w-full flex-1 pt-8 pb-4 border-b-2 relative'>
                <p className='text-3xl font-medium text-gray-500'>toles.dev</p>
                {/* Menu - Desktop */}
                <div className='hidden sm:block'>
                    <ul className='inline-flex w-5/6 mr-2 space-x-4'>
                        <li className='text-indigo-600 font-medium rounded-md p-2 hover:bg-gradient-to-r hover:from-indigo-700 hover:to-indigo-800 hover:text-white'>
                            Blog
                        </li>
                        <li className='text-indigo-600 font-medium rounded-md p-2 hover:bg-gradient-to-r hover:from-indigo-700 hover:to-indigo-800 hover:text-white'>
                            About
                        </li>
                        <li className='text-indigo-600 font-medium rounded-md p-2 hover:bg-gradient-to-r hover:from-indigo-700 hover:to-indigo-800 hover:text-white'>
                            Contact
                        </li>
                    </ul>
                </div>
                {/* Menu - Mobile */}
                <div className='relative sm:hidden w-6 h-6'>
                    <Transition
                        show={!isNavigationOpen}
                        appear
                        className='text-gray-500 w-6 h-6'
                        enter='transition-opacity duration-500'
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                    >
                        <MenuIcon onClick={toggleNavigation} />
                    </Transition>
                    <Transition
                        as='nav'
                        show={isNavigationOpen}
                        className='w-48 absolute top-6 right-4 p-2 flex rounded-md shadow-md text-xl select-none bg-white'
                        enter='transition-opacity'
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                    >
                        <ul className='inline-flex flex-col w-full mr-2'>
                            <li className='w-full text-purple-600 font-medium rounded-md p-2 hover:bg-purple-50'>
                                Blog
                            </li>
                            <li className='w-full text-purple-600 font-medium rounded-md p-2 hover:bg-purple-50'>
                                About
                            </li>
                            <li className='w-full text-purple-600 font-medium rounded-md p-2 hover:bg-purple-50'>
                                Contact
                            </li>
                        </ul>
                    </Transition>
                    <Transition
                        appear
                        show={isNavigationOpen}
                        className='absolute -top-2 right-0'
                        enter='transition-opacity'
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                    >
                        <div className='h-10 w-10 rounded-full flex justify-center items-center shadow-md bg-gradient-to-b from-white via-white to-pink-50'>
                            <ChevronUpIcon
                                className='text-pink-400 w-6 h-6'
                                onClick={toggleNavigation}
                            />
                        </div>
                    </Transition>
                </div>
            </header>
            <main>{getLayout(<Component {...pageProps} />, pageProps)}</main>
        </div>
    )
}
