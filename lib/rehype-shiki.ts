import { getHighlighter } from 'shiki'
import { visit } from 'unist-util-visit'
import { toString } from 'hast-util-to-string'
import { u } from 'unist-builder'

export default function attacher(options) {
    let settings = options || {}
    let theme = settings.theme || 'one-dark-pro'
    let highlighter
    let useBackground = true
    return transformer

    async function transformer(tree, file, next) {
        getHighlighter({ theme }).then((hl) => {
            highlighter = hl
            visit(tree, 'element', visitor)
            next()
        })
    }

    function visitor(node, index, parent) {
        try {
            if (
                !parent ||
                parent.tagName !== 'pre' ||
                node.tagName !== 'code'
            ) {
                return
            }

            const shikiTheme = highlighter.getTheme()

            if (useBackground) {
                addStyle(parent, 'background: ' + shikiTheme.bg)
            }

            const lang = codeLanguage(node)

            if (!lang) {
                // Unknown language, fall back to a foreground colour
                addStyle(node, 'color: ' + shikiTheme.settings.foreground)
                return
            }

            const tokens = highlighter.codeToThemedTokens(toString(node), lang)
            const tree = tokensToHast(tokens)

            node.children = tree
        } catch (error) {
            console.error(error)
        }
    }
}

function tokensToHast(lines) {
    let tree = []

    for (const line of lines) {
        if (line.length === 0) {
            tree.push(u('text', '\n'))
        } else {
            for (const token of line) {
                tree.push(
                    u(
                        'element',
                        {
                            tagName: 'span',
                            properties: { style: 'color: ' + token.color }
                        },
                        [u('text', token.content)]
                    )
                )
            }

            tree.push(u('text', '\n'))
        }
    }

    // Remove the last \n
    tree.pop()

    return tree
}

function addStyle(node, style) {
    let props = node.properties || {}
    let styles = props.style || []
    styles.push(style)
    props.style = styles
    node.properties = props
}

function codeLanguage(node) {
    const className = node.properties.className || []
    let value

    for (const element of className) {
        value = element

        if (value.slice(0, 9) === 'language-') {
            return value.slice(9)
        }
    }

    return null
}
