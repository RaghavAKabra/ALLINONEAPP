import React from "react"
import Book from "./Book"
import Clock from "./Clock"
import "./Header.css"
import Note from "./NoteTaking"
import Study from "./Study"
import TicTacToe from "./TicTacToe"
import About from "./About"
var Header = () => {
    return(
        <div className="Main Div">
           <marquee>
           <h2 className="AppName">
                ALL IN ONE APP
</h2>   

</marquee>   

<hr/>

<About />
<h2 style={{color: "white"}}>OUR FUNTIONALITIES:-</h2>
<ul>
    <li><button className='clock'>Clock</button></li>
    <li><button className='book'>Book Reader</button></li>
    <li><button className='study'>Study Tool</button></li>
    <li><button className='clock'> NOTES</button></li>
    <li><button className='book'>TicTacToe</button></li>
</ul>
<br/>
<hr/>
<hr/>
<h1 style={{color: "white"}}>Clock:-</h1>
<h3 style={{color: "white"}}>Time:-</h3>
<div>
    <Clock />
</div>
<br/>
<hr/>
<hr/>
<div>
    <i>Book Reader:-</i>
    <br/>
    <Book />
    <br/>
    <hr/>
    <hr/>
    <Study />
    <br/>
    <div>
        <Note />
    </div>
    <hr/>
<br/>
<TicTacToe />
</div>

        </div>
    )
}
export default Header