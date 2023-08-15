import "./fullscreen.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import "prismjs/themes/prism.css";
import Editor from "@toast-ui/editor";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight-all.js";

export class TextEditor {

    constructor(options) {
        const defaultOptions = {
            initialEditType: "wysiwyg",
            previewStyle: "vertical",
            plugins: [[codeSyntaxHighlight]],
            placeholder: "Please enter text.",
            toolbarItems: [
                ["heading", "bold", "italic", "strike"],
                ["hr", "quote"],
                ["ul", "ol"],
                ["image", "link"],
                ["code", "codeblock"],
                [
                    {
                        el: this.createFullscreenButton(),
                        command: "fullscreen",
                        tooltip: "Fullscreen (Press ESC exit)",
                    },
                ],
            ]
        };
    
        const editorOptions = Object.assign(defaultOptions, options);
        this.editor = new Editor(editorOptions);
    
        return this.editor;
    }

    createFullscreenButton() {
        const button = document.createElement("button");
        button.className = "toastui-editor-toolbar-icons last";
        button.style.backgroundImage = "none";
        button.style.margin = "0";
        button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="height: 1.2rem;wdith: 1.2rem">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                    </svg>`;

        button.addEventListener("click", () => {
            if (this.editor.getHeight() == this.editor.options.height) {
                this.editor.setHeight("100vh");
                document.querySelector("body").classList.add('body');
                this.editor.options.el.classList.add("fullscreen");
            } else {
                this.editor.setHeight(this.editor.options.height);
                document.querySelector("body").classList.remove('body');
                this.editor.options.el.classList.remove("fullscreen");
            }
        });

        return button;
    }
}
