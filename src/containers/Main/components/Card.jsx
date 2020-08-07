import React, { memo } from 'react'
// import PropTypes from 'prop-types'
import { Card as CardUI } from '../../../components'
import { LabelStyled, ValueStyled, CardContentStyled } from './styles'

const Card = ({ value, label, color }) => {
  return (
    <CardUI>
      <CardContentStyled color={color}>
        <ValueStyled>{value}</ValueStyled>
        <LabelStyled className="label">{label}</LabelStyled>
      </CardContentStyled>
    </CardUI>
  )
}

export default memo(Card)
