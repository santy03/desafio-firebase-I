import { useEffect, useState } from "react";
import { useParams } from "react-router";
import customFetch from "../utils/CustomFetch";
import ItemDetail from "./ItemDetail";
import products from '../utils/products';

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const {idItem} = useParams();
    console.log(idItem);

    useEffect(() => {
        customFetch(2000, products.find(item =>item.id === parseInt(idItem)))
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, []);
    console.log(dato);
    
    return (
        <ItemDetail item={dato} />
    );
}

export default ItemDetailContainer;