import { useEffect } from 'react'
import { useOutletContext, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../contexts/api'
import { useState } from 'react'
import SingleProduct from './SingleProduct'
import { productList } from '../../backend/data'

const Products = () => {
  const [products, setProducts] = useState(productList);
  const [searchParam, setSearchParam] = useState("");

  const [featProductId, setFeatProductId] = useState(null);
  const featuredProduct = products.find((product) => product.id === featProductId)
  console.log(featuredProduct);

  function handleClick(product) {  // updating whatever id was clicked by calling setProducts
    console.log("Product id: ", product.id);
    setFeatProductId(product.id);
  }

  useEffect(() => {
    async function getProducts() {
      try {
        await fetch(`${BASE_URL}/products`, {
          headers: {
            'Content-Type': 'application/json',
          },
        }).then(response => response.json())
          .then(result => {
            setProducts(result.products)
          })
          .catch(console.error);
      } catch (error) {
        console.log(error)
      }
    }
    getProducts();

  }, [])

  const productsToDisplay = searchParam ? 
  products.filter((product) => product.title.toLowerCase().includes(searchParam)) : products;

  return (
    <div>
        <h1>Products</h1>
        <label>
            Search:{" "}
            <input
                type="text"
                placeholder="search"
                onChange={(e) => setSearchParam(e.target.value.toLowerCase())}
            />
        </label>

        {/* {
            productsToDisplay.map((productToDisplay) => {
                return <SingleProduct key={productToDisplay.id} product={productToDisplay} token={token}></SingleProduct>
            })
        } */}
    </div>
)
} 

  //----------//

  // see if you can figure out how this works, notice no props in the function parameter list

  // const {
  //   values: { sample, array },
  //   setters: { setSample, setArray }
  // } = useOutletContext()
  // const navigate = useNavigate()

  //   useEffect(() => {
  //     // just a navigate demo on a timer
  //     let id = setTimeout(() => navigate('/account'), 5000)
  //     // make sure to clear an interval or timeout if you choose to do things on a timer!
  //     return () => clearTimeout(id)
  //   }, [])

  //   return (
  //     <div>
  //       <p>{sample}</p>
  //       <ul>
  //         <li>{array.map((el, i) => (i % 2 ? <strong>{el}</strong> : <em>{el}</em>))}</li>
  //       </ul>
  //     </div>
  //   )


export default Products
