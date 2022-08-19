import React from 'react'
import styled from 'styled-components'

export const Container = styled.div`
  border: 1px solid;
  margin: 20px auto;
  border-radius: 10px;
  width: 300px;
  height: 150px;
  background-color: #999;
  &.1 {
    background-color: 'green';
  }
  &.2 {
    background-color: 'green';
  }
  &.3 {
    background-color: 'red';
  }
  &.4 {
    background-color: 'red';
  }
`
export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ItemGu = styled.span`
  font-size: 18px;
  margin: 10px;
`
export const ItemCity = styled.span`
  flex: 1;
  font-size: 13px;
  margin: 3px;
`
export const ItemBookMark = styled.span`
  font-size: 22px;
  margin: 10px;
  cursor: pointer;
`

export const resultArea = styled.div`
  display: flex;
  justify-content: center;
`
