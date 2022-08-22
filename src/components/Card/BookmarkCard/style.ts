import React from 'react'
import styled from 'styled-components'

export const Container = styled.div`
  border: 1px solid;
  margin: 20px auto;
  border-radius: 10px;
  width: 300px;
  height: 150px;
  background-color: ${(props) => props.className || 'gray'};
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

export const ResultArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ResultText = styled.div`
  width: 100px;
  height: 20px;
  text-align: center;
  border: 1px solid;
  border-radius: 5px;
  padding: 12px 0;
  font-size: 20px;
`
export const ResultTime = styled.div`
  font-size: 14px;
`
