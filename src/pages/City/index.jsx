import React, { memo, useCallback, useState, useEffect } from 'react'
import { getCity } from '../../services/api'
import { ContainerStyled } from './styles'
import Board from './components/Board'
import Panel from './components/Panel'

const City = () => {
  const [data, setData] = useState({})
  const [city, setCity] = useState({'RS'})


  const getCovidCity = useCallback(city => {
    getCity(city).then(resp => setData(resp))
  }, [])
  useEffect(() => {
    getCovidCity(city)
    console.log(city)
  }, [getCovidCity, city])

  const handleChange = ({ target }) => {
    const city = target.value
    setCity(city)
  }

  return (
    <ContainerStyled>
      <div className="mb-2">
        <Panel
          data={data}
          updatAt={updateAt}
          onChange={handleChange}
          country={country}
          getCovidData={getCovidData}
        />
      </div>
      <Board data={data} />
    </ContainerStyled>
  )
}

export default memo(City)
