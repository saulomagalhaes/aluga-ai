import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IProductsInterface } from '../../interfaces/IProductsInterface'
import {
  fetchAllProducts,
  fetchOrderByAlphabetic,
  fetchOrderByPrice,
  fetchProductByName,
} from '../../services/axios'
import { Filter, ProductsContainer, ProductsContent } from './styles'

export function Products() {
  const [products, setProducts] = useState<IProductsInterface[]>([])
  const [name, setName] = useState('')
  const [orderAlphabetic, setOrderAlphabetic] = useState('ASC')
  const [orderPrice, setOrderPrice] = useState('ASC')

  const handleAllProducts = async () => {
    const products = await fetchAllProducts()
    setProducts(products)
  }

  useEffect(() => {
    handleAllProducts()
  }, [])

  const handleSearchName = async () => {
    if (name === '') {
      const products = await fetchAllProducts()
      setProducts(products)
    }
    const products = await fetchProductByName(name)
    setProducts(products)
  }

  const handleOrderPrice = async () => {
    const products = await fetchOrderByPrice(orderPrice)
    setProducts(products)
    if (orderPrice === 'ASC') {
      setOrderPrice('DESC')
    } else {
      setOrderPrice('ASC')
    }
  }
  const handleOrderAlphabetic = async () => {
    const products = await fetchOrderByAlphabetic(orderAlphabetic)
    setProducts(products)
    if (orderAlphabetic === 'ASC') {
      setOrderAlphabetic('DESC')
    } else {
      setOrderAlphabetic('ASC')
    }
  }

  return (
    <ProductsContainer>
      <h1>Estes são os produtos disponíveis para assinatura</h1>
      <Filter>
        <div>
          <input
            type="text"
            placeholder="Digite o nome do produto ou deixe em branco pra buscar todos"
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={handleSearchName}>Filtar por nome</button>
        </div>
        <div>
          <button onClick={handleOrderPrice}>Ordenar por valor</button>
          <button onClick={handleOrderAlphabetic}>
            Ordenar por ordem alfabética
          </button>
        </div>
      </Filter>
      <ProductsContent>
        {products.length === 0 ? (
          <h1>Nenhum Produto encontrado</h1>
        ) : (
          products.map((product) => (
            <div key={product.id}>
              <img src={product.img}></img>
              <h2>{product.name}</h2>
              <p>R$ {product.price.toFixed(2).replace('.', ',')}</p>
              <NavLink to={`/product/${product.id}`}>
                <button>VER PRODUTO</button>
              </NavLink>
            </div>
          ))
        )}
      </ProductsContent>
    </ProductsContainer>
  )
}
