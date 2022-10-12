import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ISignature } from '../../../../interfaces/ISignature'

const URL = import.meta.env.VITE_HOSTNAME
const PORT = import.meta.env.VITE_BACKEND_PORT

export function MySignatures() {
  const [signatures, setSignatures] = useState<ISignature[]>([])
  const navigate = useNavigate()

  const getSignatures = async (idUser: string) => {
    const urlTwo = `http://${URL}:${PORT}/signature/${idUser}`
    axios
      .get<ISignature[]>(urlTwo)
      .then((response) => {
        setSignatures(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const getAuthorization = async () => {
    const url = `http://${URL}:${PORT}/authorization`
    if (!localStorage.getItem('token')) {
      return navigate('/login')
    }
    const config = {
      headers: {
        authorization: JSON.parse(localStorage.getItem('token') || ''),
      },
    }
    try {
      const response = await axios.get<{ id: string }>(url, config)
      await getSignatures(response.data.id)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getAuthorization()
  }, [])

  return (
    <>
      {signatures.length === 0 ? (
        <h1>Sem assinaturas</h1>
      ) : (
        signatures.map((signature) => (
          <div key={signature.id}>
            <h2>{signature.product.name}</h2>
            <p>R$:{signature.product.price}</p>
          </div>
        ))
      )}
    </>
  )
}
