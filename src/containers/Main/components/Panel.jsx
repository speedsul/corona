import React, { memo } from 'react'
// import RefreshIcon from 'assets/images/refresh.svg'
import { Card, Typography, Button, Select, MenuItem } from '../../../components'
import COUNTRIES from 'common/constants/countries'
import { CardPanelContentStyled } from './styles'

const navigatorHasShare = navigator.share

function Panel({ updatAt, onChange, data, country, getCovidData }) {
  //   const { cases, recovered, deaths, todayCases, todayDeaths } = data

  const renderCountries = (country, index) => (
    <MenuItem key={`country-${index}`} value={country.value}>
      <img
        src={country.flag}
        alt={`Pais-${country.label}`}
        className="icom-country"
      />

      <div className="label">{country.label}</div>
    </MenuItem>
  )
  const textCovid19 = `Pais: ${country}`
  const shareInfo = () => {
    navigator.share({
      title: `Dados do Covid19 - ${country}`,
      text: textCovid19,
      url: 'https://covid19dio.netlify.app/',
    })
  }
  const copyInfo = () => {
    navigator.clipboard.writeText(textCovid19)
  }

  const renderShareButton = (
    <div>
      <Button variant="contained" color="primary" onClick={shareInfo}>
        Compartilhar
      </Button>
    </div>
  )
  const renderCopyButton = (
    <div>
      <Button variant="contained" color="primary" onClick={copyInfo}>
        Copiar
      </Button>
    </div>
  )

  return (
    <Card>
      <CardPanelContentStyled>
        <div>
          <Typography variant="h5" component="span" color="primary">
            COVID19
          </Typography>
          <Typography variant="h6" component="span" color="primary">
            Painel Coronavirus
          </Typography>
          <Typography variant="body2" component="span" color="primary">
            Atualizado em: {updatAt}
          </Typography>
          <div className="pt-2">
            <Select
              onChange={onChange}
              value={country}
              className="select-coutry"
            >
              {COUNTRIES.map(renderCountries)}
            </Select>
          </div>
        </div>
        {navigatorHasShare ? renderShareButton : renderCopyButton}
      </CardPanelContentStyled>
    </Card>
  )
}

export default memo(Panel)
