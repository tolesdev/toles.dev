import { PropsWithChildren } from 'react'

export interface BlogHeadingProps extends PropsWithChildren<any> {}

export default function BlogHeading(props: BlogHeadingProps) {
    const { children, ...rest } = props
    return (
        <h2
            className='group tracking-wide text-xl font-semibold text-gray-500 font-sans mb-5'
            {...rest}
        >
            {children}
        </h2>
    )
}
