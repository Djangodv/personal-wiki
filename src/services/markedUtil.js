import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js"; // Include marked.js

let firstHeader = true;

const renderer = {
    
    heading({tokens, depth}) {
        const text = this.parser.parseInline(tokens);
        console.log(tokens);

        if (depth == 1) {
            if (firstHeader) {
                firstHeader = false;
                return `<div><h${depth}>${text}h1</h${depth}>\n`;
            } else if (!firstHeader) {
                return `</div><div><h${depth}>${text}h2</h${depth}>\n`;
                // Fix: last <div> never gets closed
                // Not closing tags and attributes: https://stackoverflow.com/questions/7125354/what-are-the-actual-problems-of-not-closing-tags-and-attributes-in-html
            }
        }

        return `<h${depth}>${text}</h${depth}>\n`;
    }

};

marked.use({ renderer });

export async function parse(markdownText) {

    firstHeader = true;

    // let
    const content = marked.parse(markdownText);
    const tokens = marked.lexer(markdownText);

    console.log(content);
    console.log(tokens); // Debug

    return {
        content: content,
        tokens: tokens
    }
    
}