import axios from 'axios'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IProductsInterface } from '../../interfaces/IProductsInterface'
import { ProductsContainer, ProductsContent } from './styles'

const URL = import.meta.env.VITE_HOSTNAME
const PORT = import.meta.env.VITE_BACKEND_PORT

export function Products() {
  const [products, setProducts] = useState<IProductsInterface[]>([])
  // const [name, setName] = useState('')

  useEffect(() => {
    const url = `http://${URL}:${PORT}/`
    axios
      .get<IProductsInterface[]>(url)
      .then((response) => {
        setProducts(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <ProductsContainer>
      <h1>Estes são os produtos disponíveis para assinatura</h1>
      {/* <input type="text" onChange={(e) => setName(e.target.value)} /> */}
      <ProductsContent>
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.img}></img>
            <h2>{product.name}</h2>
            <p>R$:{product.price}</p>
            <NavLink to={`/product/${product.id}`}>
              <button>VER PRODUTO</button>
            </NavLink>
          </div>
        ))}
      </ProductsContent>
    </ProductsContainer>
  )
}
