import { useEffect, useState } from "react"
import "./Book.css"
import alanBtn from '@alan-ai/alan-sdk-web';

var Book = () => {
  var [searchValue,setsearchValue] = useState("");
   var handleclick = () => {
     alert("To use this app click mic button then say read and book name and for great personalities just name you say.")
   }
    var Story = [
	"panchtantra stories",
	"akbar and birbal" ,
	"tenali rama",
	"two friends",
"shivaji maharaj",
	"shivaji maharaj's attack on shaista khan",
  "esacape from agra",
"Another beginning"
    ]
    var Fiction = [
      "harry potter chapter 1",
      "harry potter chapter 2",
      "harry potter chapter 3",
      "harry potter chapter 4",
      "harry potter chapter 5",
      "harry potter chapter 6",
      "harry potter chapter 7",
  ]
  
    var greatpersonalities = [
       "Mahatma Gandhi",
       "Abdul Kalam",
       "Elon Musk",
       "Isaac Newton",
       "Swami Vivekananda",
       "Mark Zuckerberg",
       "Ratan Tata",
       "Steve Jobs",
       "Mother Teressa",
       "Jawaharlal Nehru"
      ]
      var greatpersonalitiesbio = [

        "Elon Musk",
        "Mark Zuckerberg",
        "Steve Jobs",
       
       ]
var Books = [
    "Biography",
    "Stories",
    "Fiction",
]
var handleclearclick = () => {
  setsearchValue("")
}
var handleInputChange = (event) => {
  setsearchValue(event.target.value)
}
var shoulddisplayclearbutton = searchValue.length  > 0;
var filteredProductsbio = greatpersonalitiesbio.filter((personalities) => {

  return personalities.includes(searchValue)
  
  })
var filteredProducts = greatpersonalities.filter((personalities) => {

  return personalities.includes(searchValue)
  
  })
  
useEffect(() => {
    alanBtn({
        key: 'fbdd455fd9cc106476335372de6e20ca2e956eca572e1d8b807a3e2338fdd0dc/stage',
        onCommand: (commandData) => {
          if (commandData.command === 'go:back') {
            // Call the client code that will react to the received command
          }
        }
    });
  }, []);

return(
    <div>
        <h3  style={{color: "aliceblue", border: "1px solid red"}}>Here are some personalities who are great you can know about them inshort</h3>
        <h2>Great Personalities</h2>
        
        <ul>
        <input id="text" type="search" placeholder="Enter personality name" onChange={handleInputChange} value={searchValue}/>
       
{filteredProducts.map((personalities) =>
  <li>{personalities}</li>
)}
</ul>
<button id="btn"onClick={handleclick}>How to use this Book Reader</button>
<h2>Here are types of Books</h2>

<ul>
{Books.map((book) =>
  <li>{book}</li>
)}
</ul>
<br/>
<h2 style={{color: "whitesmoke"}}>Biography</h2>
<ul>
<input id="text" type="search" placeholder="Enter personality name" onChange={handleInputChange} value={searchValue}/>

{filteredProductsbio.map((personalitiesinbook) =>
  <li>{personalitiesinbook}</li>
)}
</ul>
<br/>
<h2 style={{color: "white"}}>Stories</h2>
<ul>

{Story.map((Storybooks) =>
  <li>{Storybooks}</li>
)}
</ul>
<br/>
<h2 style={{color: "whitesmoke"}}>Fiction</h2>
<ul>

{Fiction.map((Fictionbooks) =>
  <li>{Fictionbooks}</li>
)}

</ul>
<br/>

    </div>
)
}
export default Book