import { useLocation  } from "react-router-dom";
import { user_data } from "../../dummyData/dummy";
import Product from "../../components/product/product";

function ProductList() {
    const {state} = useLocation();
    return(
        <div id={state}>
            {user_data && user_data["product-list"].map(e=>{
                return <Product product={e} key={e.product_id}/>;
            })}
        </div>
    );
}
export default  ProductList;