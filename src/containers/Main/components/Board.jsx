import React, { memo } from 'react'
import PropTypes from 'prop-types'
import Card from './Card'
import { Grid, Skeleton } from '../../../components'
import { getByDisplayValue } from '@testing-library/react'

const Board = ({ data }) => {
  const { cases, todayDeaths, recoverd, deaths, todayCases } = data

  const getValue = (value) =>
    value ? value : <Skeleton variant="text" width={182} height={60} />

  return (
    <Grid container spacecing={4}>
      <Grid item xs={12} md={3}>
        <Card value={getValue(cases)} label="Total de casos" color="#5d78ff" />
      </Grid>
    </Grid>
  )
}

export default Board
