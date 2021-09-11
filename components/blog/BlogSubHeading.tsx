import { PropsWithChildren } from 'react'

export interface BlogSubHeadingProps extends PropsWithChildren<any> {}

export default function BlogSubHeading(props: BlogSubHeadingProps) {
    const { children, ...rest } = props
    return (
        <h2
            className='group font-sans text-lg text-center text-gray-600 p-0'
            {...rest}
        >
            {children}
        </h2>
    )
}
