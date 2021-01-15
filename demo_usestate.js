import React,{useState}  from "react";


const Demo = () =>{
    const date = new Date()
    const [age,birthday] =useState(date.getDate())
    const [name,updateName] = useState('meet')
    const [profile,updateprofile] = useState({
        designation:"frontend devloper",
        exp:"2",
        company:"simform",
        salary:"50K",
    })
    const [msg,setMsg] = useState("")
    const [msgList,setMsgList] = useState([])
    const getData = () => {
        const pro1 = prompt("Enter new Designation",profile.designation)
        const pro2 = prompt("Experiance",profile.exp)
        const pro3 = prompt("Enter new Company",profile.company)
        const pro4 = prompt("Enter updated Salary",profile.salary)
        updateprofile({
            ...profile,
            designation : pro1,
            exp: pro2,
            company: pro3,
            salary: pro4
        })          
    }
    return(
    <div>
        
        <input value={age} type="text"/>
        <button onClick={()=>{ birthday(age + 30)}}>Add 30 days</button>
        <br></br>
        <input value={name} type="text" name="uname" id="i2" style={{marginTop:"20px"}}/>
        <button onClick={(e)=>{
            updateName(`${name} shah`)
            }}>Add my last Name</button>
        <table  style={{margin:"auto",marginTop:"20px",marginBottom:"20px"}}>
            <th>Emp Data</th>
            <tr>Designation:{profile.designation}</tr>
            <tr>Experiance:{profile.exp}</tr>
            <tr>Company:{profile.company}</tr>
            <tr>Salary:{profile.salary}</tr>
            <tr>
                <button onClick={getData}>
                    Edit Data
                </button>
            </tr>
        </table>
        <input type="text" placeholder="Enter your Hobbies" value={msg} 
        onChange={(e)=> {
            setMsg(e.target.value)
            }} />
        <button onClick={(e)=>{
            setMsgList([...msgList,
                {
                id:msgList.length +1,
                msg:msg
                }
            ])
            setMsg("");
        }}>Add </button>
        <div style={{width:100,margin:"auto"}}>
            <ul>
                {msgList.map((m)=>(
                    <li key={m.id}>{m.msg}</li>   
                                     
                )
                )}
            </ul>
            
        </div>
    </div>
    )
}
export default Demo