import React from 'react'
import styled from 'styled-components'

export const Container = styled.div`
  height: 590px;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
`
export const SelectsContainer = styled.div`
  width: 150px;
  height: 35px;
  border-radius: 4px;
  border: 2px solid lightcoral;
`
export const Select = styled.select`
  width: 150px;
  height: 35px;
  background: transparent;
  border: none;
  outline: none;
  padding: 0 5px;
  position: relative;
  z-index: 3;
  overflow: scroll;
`
export const Option = styled.option`
  height: 50px;
`
