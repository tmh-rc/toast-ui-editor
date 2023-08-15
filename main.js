import { TextEditor } from './TextEditor.js';

new TextEditor({
    el:document.querySelector("#editor"),
    placeholder: 'Please enter text 1'
});

new TextEditor({
    el:document.querySelector("#editor2"),
    height: '500px',
    placeholder: 'Please enter text 2'
});