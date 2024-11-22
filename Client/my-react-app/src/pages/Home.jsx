
import axios from 'axios';
import Product from '../compontes/Product'
import { useEffect, useState } from 'react';

const Home = () => {
    const [productData, setproductData] = useState([]);
    async function getProduct() {
        try{
             const res=await axios.get('http://localhost:2000/api/v1/getCard') ;
           //  console.log(res.data.data);
             setproductData((res.data.data));
        }
        catch(err){
            console.log(err);
            setproductData([]);
        }
        
    }
    useEffect(()=>{
      getProduct();
    },[])

  return (
    <div className=" grid grid-cols-4 gap-2 border-width: 8px box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px">
     {
       productData.map((val)=>{ 
      return  <Product key={val.id} product={val}/>})
     }
    </div>
   
  )
}

export default Home