import ItemCount from './ItemCount';
import ItemList from './ItemList';
import customFetch from "../utils/CustomFetch";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { collection, getDocs } from "firebase/firestore";
import db  from "../utils/ConfiguracionFirebase";
import {fetchFirestore } from "../utils/fetchFirestore";

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();

   
    useEffect(() => {
        fetchFirestore(idCategory)
            .then(result => setDatos(result))
            .catch(err => console.log(err));
    }, []);

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
    }
    return (
        <>  
            <ItemList items={datos} />
        </>
    )
}

export default ItemListContainer;
