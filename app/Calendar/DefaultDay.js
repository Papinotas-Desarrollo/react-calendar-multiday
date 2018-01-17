import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

const getInline = (today, before) => ({
  cursor: before ? 'not-allowed' : 'inherit',
  background: today
  ? 'rgba(141, 224, 229, 0.5)'
  : before ? 'rgba(155, 155, 155, .2)' : '',
})

const DefaultDayComponent = props => {
  const { label, date, isToday, isOutOfRange, isCurrentChannelSelected, isSelected } = props
  const disableDate = isOutOfRange
  const onClick = (e) => {
    if (disableDate || (!isCurrentChannelSelected && isSelected)) {
      e.stopPropagation()
    }
  }

  return (
    <div onClick={onClick}
      className={getStyle(props)}
      style={getInline(isToday, isOutOfRange)}
      disabled={isOutOfRange}>
      {label}
    </div>)
}

DefaultDayComponent.propTypes = {
  label: PropTypes.number,
  date: PropTypes.object,
  isToday: PropTypes.bool,
  isOutOfRange: PropTypes.bool
}

export const getStyle = function ({date, isSelected, isCurrentChannelSelected}) {
  return `${isCurrentChannelSelected
    ? 'o_selected-current-channel-day' : isSelected ? 'o_selected-day' : ''} ${date.type}-day`
}

export default DefaultDayComponent
