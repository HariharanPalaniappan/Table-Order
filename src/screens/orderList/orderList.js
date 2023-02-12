import { useNavigate  } from "react-router-dom";
import './orderList.css';

function OrderList() {
    const tableList = ['Table 1','Table 2','Table 3','Table 4','Table 5','Table 6','Table 7','Table 8','Table 9','Table 10'];
    let navigate = useNavigate(); 
    const viewProductList = (e) => {
        navigate('/productList',{ state: e.target.id });
    }
    return(
        <div className="table-container">
            {tableList && tableList.map((e,i)=>{
                return <div onClick={e=>viewProductList(e)} className="table-box" id={i+1}>{e}</div>
            })}
        </div>
    );
}

export default OrderList;