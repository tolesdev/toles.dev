import { PropsWithChildren } from 'react'

export interface BlogParagraphProps extends PropsWithChildren<any> {}

export default function BlogParagraph(props: BlogParagraphProps) {
    const { children, ...rest } = props

    return (
        <p className='leading-loose mb-5 last-of-type:mb-0' {...rest}>
            {children}
        </p>
    )
}
