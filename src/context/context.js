import React, {useState, useEffect, createContext} from "react";

export const BBContext = createContext();


const BASEURL = "https://bobsburgers-api.herokuapp.com"


export const BBContextProvider = ({children}) => {
    const [characters, setCharacters] = useState([]);
    const [burgers, setBurgers] = useState([]);
    const [stores, setStores] = useState([]);


    useEffect(() => {
        const getCharacters = async() =>{
            const charactersApi = await fetch(`${BASEURL}/characters`);
            const charactersJSON = await charactersApi.json();
            setCharacters(charactersJSON)
            console.log(charactersJSON);
    }
    getCharacters()
}, []);

    useEffect(() => {
    const getBurgers = async() =>{
        const burgersApi = await fetch(`${BASEURL}/burgerOfTheDay`);
        const burgersJSON = await burgersApi.json();
        setBurgers(burgersJSON)
}
getBurgers()
}, []);

useEffect(() => {
    const getStores = async() =>{
        const storesApi = await fetch(`${BASEURL}/storeNextDoor`);
        const storesJSON = await storesApi.json();
        setStores(storesJSON)
}
getStores()
}, [])



return (<BBContext.Provider value = {{characters, burgers, stores}}>
    {children}
</BBContext.Provider>)
}
