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

            <div className= "content active-content: content">
                <div className="content active-content">
                    <h2> API link to page #1 </h2>
                </div>

                <div className="content active-content">
                    <h2> API link to page #2 </h2>
                </div>

                <div className="content active-content">
                    <h2> API link to page #3 </h2>
                </div>

                <div className="content active-content">
                    <h2> API link to page #4</h2>
                </div>
            </div>

        </div>
        </div>
    )
}

/*something wrong with the syntax of the toggleState?
{toggleState === 1 ? "content active-content: content"}
{toggleState === 2 ? "content active-content: content"}
{toggleState === 3 ? "content active-content: content"}
{toggleState === 4 ? "content active-content: content"}
*/


