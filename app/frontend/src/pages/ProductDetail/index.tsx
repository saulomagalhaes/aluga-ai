import axios from 'axios'
import { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { HeaderLogged } from '../../components/HeaderLogged'
import { Product } from './components/Product'

const URL = import.meta.env.VITE_HOSTNAME
const PORT = import.meta.env.VITE_BACKEND_PORT

export function ProductDetail() {
  const [logged, setLogged] = useState(false)

  useEffect(() => {
    const url = `http://${URL}:${PORT}/authorization`

    if (!localStorage.getItem('token')) {
      return setLogged(false)
    }
    const config = {
      headers: {
        authorization: JSON.parse(localStorage.getItem('token') || ''),
      },
    }
    axios
      .get<{ id: string }>(url, config)
      .then((_response) => {
        setLogged(true)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])
  return (
    <>
      {logged ? <HeaderLogged /> : <Header />}
      <Product logged={logged} />
    </>
  )
}
