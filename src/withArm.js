import React,{useState} from 'react';

const Army = (Men,shoting) =>{

    const NewMen = (props)=>{
        const [shot,setShots] = useState(0);
        const handlers = ()=>{
            setShots(shot+shoting);
        }
        return <Men hocname="AK47" {...props} hochandlers={handlers} hocShots={shot} />
    }
    return NewMen;
 
}
export default Army;