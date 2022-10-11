import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IProductsInterface } from '../../../../interfaces/IProductsInterface'
import { ProductContainer } from './styles'

const URL = import.meta.env.VITE_HOSTNAME
const PORT = import.meta.env.VITE_BACKEND_PORT

export function Product() {
  const [product, setProduct] = useState<IProductsInterface>(
    {} as IProductsInterface
  )
  const { id } = useParams()

  useEffect(() => {
    const url = `http://${URL}:${PORT}/product/${id}`

    axios
      .get<IProductsInterface>(url)
      .then((response) => {
        setProduct(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <ProductContainer>
      <img src={product.img}></img>
      <div>
        <h1>{product.name}</h1>
        <p>Formas de pagamento: Cartão de Crédito e PIX</p>
        <p>Parcelamento em até 12x</p>
        <p>Frete grátis para todo o Brasil</p>
        <p>Valor: R${product.price}</p>
        <button>Assinar</button>
      </div>
    </ProductContainer>
  )
}
