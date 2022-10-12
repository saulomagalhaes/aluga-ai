import axios from 'axios'
import { useState } from 'react'
import { IProductsInterface } from '../../../../interfaces/IProductsInterface'

const URL = import.meta.env.VITE_HOSTNAME
const PORT = import.meta.env.VITE_BACKEND_PORT

export function Cart(props: { userId: string }) {
  const storage = JSON.parse(localStorage.getItem('product') || '[]')
  const [file, setFile] = useState('')
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
      .then((response) => {
        console.error(response)
      })
      .catch((_error) => {
        alert('Você não enviou o documento solicitado')
      })
  }
  return (
    <div>
      <div>
        {storage.map((product: IProductsInterface) => (
          <div key={product.id}>
            <h1>{product.name}</h1>
            <h2>{product.price}</h2>
            <img src={product.img} alt="product" />
          </div>
        ))}
      </div>
      <button onClick={checkout}>Comprar</button>
      <input type="file" name="arquivo" id="arquivo" onChange={handleFile} />
    </div>
  )
}
