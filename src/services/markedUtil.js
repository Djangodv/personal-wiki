import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";

export async function parse(markdownText) {

    // let
    const content = marked.parse(markdownText);
    const tokens = marked.lexer(markdownText);

    return {
        content: content,
        tokens: tokens
    }
    
}