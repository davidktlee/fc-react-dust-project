import React from 'react'
import * as S from './style'
import { GrLocation, GrMap, GrBookmark } from 'react-icons/gr'

function Nav() {
  return (
    <S.Container>
      <S.StyledLink
        to="/"
        style={({ isActive }) => ({
          textDecoration: isActive ? 'underline' : 'none',
        })}
      >
        <GrLocation />내 지역보기
      </S.StyledLink>
      <S.StyledLink
        to="/all"
        style={({ isActive }) => ({
          textDecoration: isActive ? 'underline' : 'none',
        })}
      >
        <GrMap />
        전체 지도보기
      </S.StyledLink>
      <S.StyledLink
        to="/bookmark"
        style={({ isActive }) => ({
          textDecoration: isActive ? 'underline' : 'none',
        })}
      >
        <GrBookmark />
        즐겨찾기
      </S.StyledLink>
    </S.Container>
  )
}

export default Nav
