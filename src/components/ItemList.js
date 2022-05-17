import Item from "./Item";
import { ProductsContainer } from './StyledComponents';

const ItemList = ({ items }) => {
    return (
        <ProductsContainer>
        {
            items.length > 0?
			items.map(item => <Item id={item.id} key={item.id} title={item.name} price={item.cost} pictureUrl={item.image[0]} stock={item.stock}/>)
			: <p>Recalculando...</p>
        }
        </ProductsContainer>
    );
}

export default ItemList;