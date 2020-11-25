import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

//Axios, useEffect Context API, usereducer, REDUX
const Esineet = (props) => {
    const [data,setData] = useState(["Dataa haetaan"])
    const [dataNoudettu, setDataNoudettu] = useState(false)
    const [valittuPaikkakunta, setValittuPaikkakunta] = useState("")
    const [searchItems, setSearchItems] = useState("")

    useEffect(()=>{
        async function haeDataa(){
            let result = await axios('https://api.huuto.net/1.1/categories/'+props.id+'/items?area='+valittuPaikkakunta)
            //console.log(result)
            let a = JSON.parse(result.request.response).items
            setData(JSON.parse(result.request.response).items); 
            setDataNoudettu(true);   
        }
        
        haeDataa();

        /// haku
        async function searchData(){
            let result = await axios('https://api.huuto.net/1.1/categories/'+props.id+'/items?area='+valittuPaikkakunta+'&words='+searchItems)
            //console.log(result)
            let a = JSON.parse(result.request.response).items
            setData(JSON.parse(result.request.response).items); 
            setDataNoudettu(true);   
        }
        
        searchData();

    },[props.id, valittuPaikkakunta, searchItems])
    
    const paikkakuntaTamperePainettu = ()=>{
        setValittuPaikkakunta("Tampere")
    }

    const paikkakuntaHelsinkiPainettu = ()=>{
        setValittuPaikkakunta("Helsinki")
    }

    /// haku
    const haku = (event) => {
        setSearchItems(event.target.value)
    }
    
    return (<div>
        <button onClick={paikkakuntaTamperePainettu}>Tampere</button>
        <button onClick={paikkakuntaHelsinkiPainettu}>Helsinki</button>
        <input onChange={(event) => haku(event)} placeholder="Etsi"></input>

        {!dataNoudettu ? "Odotetaan dataa..." :  data.map(alkio=><div>{alkio.title +" Paikassa:"+alkio.location}</div>)}
       
        </div>)

}

export default Esineet;