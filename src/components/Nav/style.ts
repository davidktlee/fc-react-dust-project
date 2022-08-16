import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Container = styled.div`
  width: 100vw;
  height: 60px;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-space-between;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

export const StyledLink = styled(NavLink)`
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  text-decoration: none;
  color: black;
  :active {
    color: #fff;
    background-color: #000;
  }
`
