import React from "react";


function Previewer (props) {

    return (
        <div id="previewerContainer" className='previewer-container'>
            <div className="" id="previewer">
                {props.textParsed}
            </div>
        </div>
    
    );
}

export default Previewer;
