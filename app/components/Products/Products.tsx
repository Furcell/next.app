import axios from "axios";
import { useEffect } from "react"

export default ()=>{
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
          .get(`https://fakestoreapi.com/products?sort=${sort}&limit=${limit}`)
          .then((result) => {
            setProducts(result.data);
          })      
      },[sort,limit])

    return(
        <ul>
        {
          products.map((product:any) => 
      
            <li ><img src={product.image}/>{product.title}</li>
          )
        }
      </ul>
        
    )
}



 