import Count from '../countComponent/count';
import './product.css';
function product(props) {
    return(
        <div className='product-container' id={props.product.product_id}>
            <div className='product-info'>
                <div className="product-name">{props.product.product_name}</div>
                <div className="product-price">₹{props.product.price}</div>
            </div>
            <div className='product-quantity'>
                <Count key={props.product.product_id}/>
            </div>
        </div>
    );
}
export default  product;