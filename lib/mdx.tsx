import rehypeAutolink from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import { h } from 'hastscript'
import { bundleMDXFile } from 'mdx-bundler'
import * as fs from 'fs/promises'
import * as path from 'path'
import rehypeShiki from '@/lib/rehype-shiki'
import rehypeSection from '@/lib/rehype-section'

export async function getBlogSlugs() {
    const files = await fs.readdir(path.join(process.cwd(), 'blog'), 'utf8')
    return files.map((p) => p.replace('.mdx', ''))
}

export async function getFileMDX(slug: string) {
    const filePath = path.join(process.cwd(), 'blog', `${slug}.mdx`)
    const { birthtime } = await fs.stat(filePath)

    const { code, frontmatter } = await bundleMDXFile(filePath, {
        xdmOptions: (options) => {
            options.remarkPlugins = [...(options.remarkPlugins ?? [])]
            options.rehypePlugins = [
                rehypeShiki,
                rehypeSection,
                rehypeSlug,
                [
                    rehypeAutolink,
                    {
                        behavior: 'append',
                        content(node) {
                            return [h('span.anchor.anchor-link', '#')]
                        }
                    }
                ],
                ...(options.rehypePlugins ?? [])
            ]
            return options
        }
    })

    return {
        code,
        frontmatter: {
            published: new Intl.DateTimeFormat('en-US', {
                day: '2-digit',
                month: '2-digit',
                year: '2-digit'
            })
                .formatToParts(birthtime)
                .map((part) => (part.type === 'literal' ? '.' : part.value))
                .join(''),
            ...frontmatter
        }
    }
}
