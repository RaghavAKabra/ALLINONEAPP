import { useState } from "react"

var Clock = () => {
    
let time = new Date().toLocaleTimeString();
let date = new Date().toLocaleDateString();
var [cdate, setCdate] = useState(date);
var updateTime = () => {
    date = new Date().toLocaleDateString();
    setCtime(time)
}
    var [ctime, setCtime] = useState(time);
    var updateTime = () => {
        time = new Date().toLocaleTimeString();
        setCtime(time)
    }
    setInterval(updateTime, 1000)
    return(
        
<div>
            <style>
@import url('https://fonts.googleapis.com/css2?family=Smooch+Sans:wght@100&display=swap');

</style>
<div style={{}}>
          <h1 style={{color: "white",textAlign: "center",fontFamily: "Smooch Sans",fontSize: "4rem", border: "2.5px solid red", borderRadius: "20px", maxWidth: "300px",paddingLeft: "10px"}}>{ctime}</h1>
          <hr/>
          <h3 style={{color: "white"}}>Date:-</h3>
         
          <h1 style={{color: "white",textAlign: "center",fontFamily: "Smooch Sans",fontSize: "4rem", border: "2.5px solid red", borderRadius: "20px", maxWidth: "300px",paddingLeft: "10px"}}>{cdate}</h1>  <input type="date" />
        
          <br/>
          </div>
        </div>
    )
}
export default Clock