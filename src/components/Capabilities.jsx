import React from 'react'
import { useParams } from 'react-router-dom'

const Capabilities = () => {
  let {capability} = useParams()
  return (
    <div><h1>{capability}</h1></div>
  )
}

export default Capabilities