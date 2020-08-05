import React, { memo, useCallback, useState, useEffect } from 'react'
import Api from '../../services/api'
import { ContainerStyled } from './styles'
import Board from './components/Board.jsx'

const Main = () => {
  const [data, setData] = useState({})
  const [country, setCountry] = useState('brazil')

  const getCovidData = useCallback((country) => {
    Api.getCountry(country).then((data) => setData(data))
  }, [])
  useEffect(() => {
    getCovidData(country)
  }, [getCovidData, country])

  return (
    <ContainerStyled>
      <div className="mb-2"></div>
      <Board data={data} />
    </ContainerStyled>
  )
}

export default memo(Main)
