import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { HeaderLogged } from '../../components/HeaderLogged'
import { Cart } from './components/cart'

const URL = import.meta.env.VITE_HOSTNAME
const PORT = import.meta.env.VITE_BACKEND_PORT

export function Checkout() {
  const navigate = useNavigate()
  const [userId, setUserId] = useState('')
  useEffect(() => {
    const url = `http://${URL}:${PORT}/authorization`

    if (!localStorage.getItem('token')) {
      return navigate('/login')
    }
    const config = {
      headers: {
        authorization: JSON.parse(localStorage.getItem('token') || ''),
      },
    }
    axios
      .get<{ id: string }>(url, config)
      .then((response) => {
        setUserId(response.data.id)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])
  return (
    <>
      <HeaderLogged />
      <Cart userId={userId} />
    </>
  )
}
