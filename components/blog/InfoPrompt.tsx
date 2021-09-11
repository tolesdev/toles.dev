import InformationCircleIcon from '@heroicons/react/outline/InformationCircleIcon'
import { PropsWithChildren } from 'react'

export interface InfoPromptProps extends PropsWithChildren<any> {
    title: string
}

export default function InfoPrompt(props: InfoPromptProps) {
    const { title, children, ...rest } = props
    return (
        <div
            className='w-full flex flex-col bg-purple-50 rounded-md shadow-md p-8 mb-8 last-of-type:mb-0'
            {...rest}
        >
            <div className='text-center font-semibold uppercase tracking-wide text-purple-700 text-x1'>
                {title}
            </div>
            <div className='flex justify-center relative h-10'>
                <div className='relative w-10 h-10 rounded-full bg-purple-50 z-10'>
                    <InformationCircleIcon className='absolute top-1 left-1 w-8 h-8 text-purple-700' />
                </div>
                <div className='absolute top-4 h-2 w-full rounded-md bg-purple-300'></div>
            </div>
            <div className='px-2 text-indigo-900'>{children}</div>
        </div>
    )
}
