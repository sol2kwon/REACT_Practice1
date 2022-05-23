import { Board } from '@/components'
import React from 'react'
import { connect } from 'react-redux'

const BoardPage = () => {
  const onChange = e => {
    e.preventDefault()

}
const onSubmit = e => {
  e.preventDefault()

}
  return (
    <Board onChange={onChange} onSubmit={onSubmit}/>
  )
}

const mapStateToProps = state => ({})
const BoardActions = {}
export default connect(mapStateToProps, BoardActions)(BoardPage);