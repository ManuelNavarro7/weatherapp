
import React,{useState, useEffect,useContext,createContext} from 'react' 
export const shopContext = createContext()

const {Provider}= shopContext

const CustomProvider = ({children})=>{

    const api ={
        key:"7fdbbb89ce6a8603a28b17d41a9a6674",
        base: "https://api.openweathermap.org/data/2.5/"


        
    }

    const [query , setQuery]=useState('');
    const [weather, setWeather]=useState({});

    const search = evt =>{
        if(evt.key ==="Enter"){
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
            .then(res=>res.json())
            .then(result=>{
                setWeather(result);
                setQuery('');
                console.log(result);
            
            })
        }
    }

{/*
    const [items,setItem]= useState([])

    async function getApi (){
        const call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Alaska&units=metric,uk&APPID=7fdbbb89ce6a8603a28b17d41a9a6674`)
        const response = await call.json();
        return response
    }
    
   

    useEffect (
        ()=>{
            getApi()
           
                .then((response)=>{setItem([response])
             })
             

        },[])
    
    */  }

        const dateBuilder=(d)=>{
            let Meses =["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
            let Dias =["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"]

            let dia = Dias[d.getDay()];
            let date = d.getDate();
            let mes = Meses[d.getMonth()];
            let año = d.getFullYear();

            return `${dia} ${date} ${mes} ${año}`
        }


    return (
        <Provider value={{dateBuilder,setQuery,search,query,weather}}>
            {children}
        </Provider>
    )
}

export default CustomProvider