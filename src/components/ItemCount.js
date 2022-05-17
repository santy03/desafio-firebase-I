import { Button } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import { ProductAmountContainer, ProductAmount } from './StyledComponents';



const ItemCount = ({ stock = 0, initial = 1,  onAdd }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(initial);
    },[]);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }
    
    const decrement = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    }
    return (
            <ProductAmountContainer>
                <Button variant="text"  style={{color:"#067506"}} onClick={increment}><Add /></Button>
            <ProductAmount>{count}</ProductAmount>
                 <Button variant="text"  style={{color:"red"}} onClick={decrement}><Remove /></Button>
            {
                stock
                ? <Button variant="contained" color="primary" onClick={() => onAdd(count)}>Agregar al changuito</Button>
                : <Button variant="contained" disabled>Agregar al changuito</Button>
            }
            </ProductAmountContainer>
    );
}

export default ItemCount;