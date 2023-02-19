import * as React from "react";
import { useState } from "react";

export default function Tab () {
const [toggleState, setToggleState] = useState(1);

const toggleTab = (index)  => {
    setToggleState(index);
}
    return (
        <div>
        <p>Please choose what part of the site you want to visit by clicking a tab below</p>
        <div className="container">
            
            <div className="bloc-tabs">
                <div className="tabs active-tabs" onClick={() => toggleTab(1)}>Tab 1</div>
                <div className="tabs" onClick={() => toggleTab(2)}>Tab 2</div>
                <div className="tabs" onClick={() => toggleTab(3)}>Tab 3</div>
                <div className="tabs" onClick={() => toggleTab(4)}>Tab 4</div>
            </div>

            <div className="content-tabs">
                <div className="content active-content">
                    <h2> API link to page #1 </h2>
                </div>

                <div className="content">
                    <h2> API link to page #2 </h2>
                </div>

                <div className="content">
                    <h2> API link to page #3 </h2>
                </div>

                <div className="content">
                    <h2> API link to page #4</h2>
                </div>
            </div>

        </div>
        </div>
    )
}

/*
RESEARCH: toggleState === ? content active-content: content - can I use if conditionals syntaxt not ter if this won't work?, unless it is not a syntax issue but also
what trying to do?
ALSO, clarify making them manually vs. from scratch - think I am kinda in the middle of both?
*/