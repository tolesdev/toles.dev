import ExclamationCircleIcon from '@heroicons/react/outline/ExclamationCircleIcon'
import { PropsWithChildren } from 'react'

export interface WarningPromptProps extends PropsWithChildren<any> {
    title: string
}

export default function WarningPrompt(props: WarningPromptProps) {
    const { title, children, ...rest } = props
    return (
        <div
            className='w-full flex flex-col bg-yellow-50 rounded-md shadow-md p-8 mb-8 last-of-type:mb-0'
            {...rest}
        >
            <div className='text-center font-semibold uppercase tracking-wide text-yellow-700 text-x1'>
                {title}
            </div>
            <div className='flex justify-center relative h-10'>
                <div className='relative w-10 h-10 rounded-full bg-yellow-50 z-10'>
                    <ExclamationCircleIcon className='absolute top-1 left-1 w-8 h-8 text-yellow-700' />
                </div>
                <div className='absolute top-4 h-2 w-full rounded-md bg-yellow-400'></div>
            </div>
            <div className='px-2 text-yellow-900'>{children}</div>
        </div>
    )
}
