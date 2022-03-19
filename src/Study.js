import React from "react"
import First from "./First";
import Second from "./Second";
import "./Study.css"
import Third from "./Third";
import Fourth from "./Fourth";
import Sixth from "./Sixth";
//import alanBtn from '@alan-ai/alan-sdk-web';

var Study = () => {
    return(
        <div className="container">
            <h2 className="title">Study App:-</h2>
            <br/>
            <hr/>
            <h3>Classes provided:-</h3>
            <div>
                <ul>
                    <li>Grade first</li>
                    <li>Grade second</li>
                    <li>Grade third</li>
                    <li>Grade fourth</li>
                    <li>Grade fifth</li>
                    <li>Grade sixth</li>
                </ul>
            </div>
            <br/>
            <br/>
            <br/>
<div>
    <h3>Subjects of Class 1st</h3>
    <ul>
        <li>Science</li>
        <li>Mathematics</li>
    </ul>
</div>
<div>
    <h3>Subjects of Class 2nd</h3>
    <ul>
        <li>Science</li>
        <li>Mathematics</li>
    </ul>
</div>
<div>
    <h3>Subjects of Class 3rd</h3>
    <ul>
        <li>Science</li>
        <li>Mathematics</li>
    </ul>
</div>
<div>
    <h3>Subjects of Class 4th</h3>
    <ul>
        <li>Science</li>
        <li>Mathematics</li>
    </ul>
</div>
<div>
    <h3>Subjects of Class 5th</h3>
    <ul>
        <li>Science</li>
        <li>Mathematics</li>
    </ul>
</div>
<div>
    <h3>Subjects of Class 6th</h3>
    <ul>
        <li>Science</li>
        <li>Mathematics</li>
        <li>Social Science</li>
    </ul>
</div>
<br/>
<br/>
<First />
<br/>
<hr/>
<hr/>
<Second/>
<br/>
<hr/>
<hr/>
<Third/>
<br/>
<hr/>
<hr/>
<Fourth />
<br/>
<hr/>
<hr/>
<Sixth />
            </div>
    )
}
export default Study;