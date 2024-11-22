
const Product = (props) => {
     let {product}=props;
     console.log(product);

     if (!product) {
        return <div>No product data available.</div>;
      }
  return (
    <div >
        <div className="">
         <h2>{product.title}</h2>
         <p>{product.description}</p>
         <img src={product.image} alt="image" className="w-32 h-40" />
         <p>Price is: {product.price}</p>
        </div>
     
    </div>
  )
}

export default Product


// const Product = (props) => {
//     const { product } = props;
  
//     if (!product) {
//       return <div>No product data available.</div>;
//     }
  
//     return (
//       <div>
//         <div>{product.title}</div>
//       </div>
//     );
//   };
  