import React from "react";
//import '../css/Boton.css';

function Editor(props) {

    const startingText =  "# A heading element (H1 size) #\n"
            +"## A sub heading element (H2 size) #\n"
            +"[A link to Google](http://www.Google.com)\n" 
            +"\n This is an inline `"    
            +"const tryIt = () => {return alert('Hello!')}"
            +"` \n"
            +"\n```"
            +"a code block"
            +"```\n"
            +"\n"
            +"  - FirstItem\n"
            +"  - SeconItem\n"
            +"\n"
            +">"
            +"> This is blockquote\n"
            +">"
            +"\n >> Block Quotes!"
            +"![freeCodeCamp IMages](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n"
            +"**and bolded text**\n";

    return (
        <div id="editorContainer" className='editor-container'>
            <textarea className="" id="editor">{startingText}</textarea>
        </div>
    
    );
}

export default Editor;
