import React, { useState} from "react";
import '../styles/App.css';













const App = ()=>{
    
    let [name1,setName1]=useState("")
    let [name2,setName2]=useState("")
let [result1,setResult1] = useState("")



function calculateLength(){

    if(!name1.trim() && !name2.trim()){
setResult1("Please Enter valid input")
return
}


let arr1 = name1.split("")
let arr2 = name2.split("")

for(let i=0;i<=arr1.length;i++){

    let index = arr2.indexOf(arr1[i])

    if(index!=-1){

        arr1.splice(i,1)
        arr2.splice(index,1)
i--
    }
}

let length = arr1.length + arr2.length;


let result = handleRelation(length)

setResult1(result)

}


function handleRelation(count){

    let relationStatus = ["Siblings","Friends","Love","Affection","Marriage","Enemy"]

return relationStatus[count%6]


}

console.log((result1));


function clearBtn(){
    setName1("")
    setName2("")
    setResult1("")
}
    return(
        <div id="main">
          

        
            <input type="text" data-testid="input1" name="name1" onChange={(e)=>{setName1(e.target.value)}} value={name1}/>
            <input type="text" data-testid="input2"  name="name2" onChange={(e)=>{
                setName2(e.target.value)
            }} value={name2}/>
            <button data-testid="calculate_relationship" name="calculate_relationship" onClick={calculateLength}>Calculate relation future</button>
            <button data-testid="clear" name="clear" onClick={clearBtn}>Clear</button>
        <h3 data-testid="answer">{result1}</h3>
        </div>
    )


}
    
        


export default App;
