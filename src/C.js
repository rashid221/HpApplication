import React, { Component } from 'react';

const C=()=>{
    return(<>
    
    </>)
}

const songs = [
    {
        title:"jhume jo pathan",
        album:"pathan"
    },
    {
        title:"tumse bi jyada",
        album:"siddhat"
    }
]

const books = [
    {
        title:"Jungle jungle pata chala",
     album:"Jungle Book"
},
{
    title:"harry",
 album:"harry potter"
},
]
 

const Books = (props)=>{
    return(<>
       {books.map((item)=>{
           return <h1> {`Book title: ${item.title} and the album is : ${item.album}`} </h1>;
       })}
       <h1>{props.hocdata.modal}</h1>
    </>)
}
const Songs = ()=>{
    return(<>
    {songs.map((item)=>{
           return <h1> {item.title} </h1>;
       })}
    </>)
}

const Hoc = (Component,classes)=>{
    const data = {
        modal:'pavilion',
        brand:'hp'
    }
return (props)=>(
    <div className={classes}>
        {console.log(props)}
    <Component hocdata={data}/>
    </div>
)
    }
    const BooksHoc = Hoc(Books,'dark');
    const SongsHoc = Hoc(Songs,'dark');

export default C;
export {Books,Songs,BooksHoc,SongsHoc}
