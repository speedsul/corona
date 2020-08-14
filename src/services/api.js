import axios from 'axios'
const path = 'https://coronavirus-19-api.herokuapp.com/countries'
const pathCities = 'https://brasil.io/api/dataset/covid19/caso/data'
// 'https://brasil.io/api/dataset/covid19/caso/data?is_last=True&state=AL'

const getCountry = country =>
  axios.get(`${path}/${country}`).then(res => res.data)

export const getCity = city =>
  axios
    .get(`${pathCities}?is_last=True&state=${city}`)
    .then(res => res.data.results)

export default {
  getCountry,
}
