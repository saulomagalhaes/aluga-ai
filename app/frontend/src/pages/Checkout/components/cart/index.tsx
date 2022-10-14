import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IProductsInterface } from '../../../../interfaces/IProductsInterface'
import { ContainerCart, Product } from './styles'

const URL = import.meta.env.VITE_HOSTNAME
const PORT = import.meta.env.VITE_BACKEND_PORT

export function Cart(props: { userId: string }) {
  const storage = JSON.parse(localStorage.getItem('product') || '[]')
  const [file, setFile] = useState('')
  const navigate = useNavigate()

  const handleFile = (e: any) => {
    setFile(e.target.files[0])
  }

  const checkout = () => {
    const url = `http://${URL}:${PORT}/signature/checkout`
    const config = {
      headers: {
        authorization: JSON.parse(localStorage.getItem('token') || ''),
        'Content-Type': 'multipart/form-data',
      },
    }
    const formData = new FormData()
    formData.append('arquivo', file)
    formData.append('userId', props.userId)
    formData.append('productId', storage[0].id)
    axios
      .post(url, formData, config)
      .then((_response) => {
        navigate('/signatures')
      })
      .catch((_error) => {
        alert('Você não enviou o documento solicitado')
      })
  }
  return (
    <ContainerCart>
      <Product>
        {storage.map((product: IProductsInterface) => (
          <div key={product.id}>
            <h1>{product.name}</h1>
            <img src={product.img} alt="product" />
            <h2>
              Valor Total: R$ {product.price.toFixed(2).replace('.', ',')}
            </h2>
          </div>
        ))}
        <h3>Precisamos que você envie algum documento</h3>
        <input type="file" name="arquivo" id="arquivo" onChange={handleFile} />
        <button onClick={checkout}>Assinar</button>
      </Product>
    </ContainerCart>
  )
}
