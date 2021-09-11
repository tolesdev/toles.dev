import { getMDXComponent } from 'mdx-bundler/client'
import { useMemo } from 'react'
import BlogHeading from '@/components/blog/BlogHeading'
import BlogSubHeading from '@/components/blog/BlogSubHeading'
import BlogParagraph from '@/components/blog/BlogParagraph'
import { getFileMDX, getBlogSlugs } from '@/lib/mdx'
import { GetStaticProps, GetStaticPaths } from 'next'
import BlogLayout from '@/layouts/BlogLayout'

export default function BlogPost({ code }) {
    const Post = useMemo(() => getMDXComponent(code), [code])

    return (
        <Post
            components={{
                h2: BlogHeading,
                h3: BlogSubHeading,
                h4: (props) => (
                    <h4 className='text-gray-700 font-medium' {...props}>
                        {props.children}
                    </h4>
                ),
                p: BlogParagraph,
                pre: (props) => (
                    <pre
                        {...props}
                        className='p-4 rounded-sm mb-8  overflow-x-scroll'
                    >
                        {props.children}
                    </pre>
                ),
                section: (props) => (
                    <section {...props} className='mb-8'>
                        {props.children}
                    </section>
                )
            }}
        />
    )
}

BlogPost.getLayout = function getLayout(
    page: React.ReactNode,
    pageProps: Map<string, unknown>
) {
    return <BlogLayout {...pageProps}>{page}</BlogLayout>
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
    const slugs = await getBlogSlugs()

    return {
        paths: slugs.map((slug) => ({ params: { slug } })),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps<
    { code: string; frontmatter: Record<string, any> },
    { slug: string }
> = async ({ params }) => {
    const { slug } = params
    const { code, frontmatter } = await getFileMDX(slug)

    return {
        props: { code, frontmatter }
    }
}
