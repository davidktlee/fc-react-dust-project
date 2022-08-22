import React, { useEffect, useState } from 'react'
import * as S from './style'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

interface PropsType {
  stationName: string
  pm10Grade: string
  sidoName: string
  pm10Value: string
  dataTime: string
  onClickStar: Function
  clickStateBool: boolean
}

function BookmarkCard({
  stationName,
  pm10Grade,
  sidoName,
  pm10Value,
  dataTime,
  onClickStar,
  clickStateBool,
}: PropsType) {
  const [color, setColor] = useState('')
  useEffect(() => {
    if (pm10Grade === '1') {
      setColor('#32cd32')
    } else if (pm10Grade === '2') {
      setColor('#6b8e23')
    } else if (pm10Grade === '3') {
      setColor('#F7E600')
    } else if (pm10Grade === '4') {
      setColor('#ff4500')
    }
  }, [])
  return (
    <>
      <S.Container className={color}>
        <S.ItemContainer>
          <S.ItemGu>{stationName}</S.ItemGu>
          <S.ItemCity>{sidoName}</S.ItemCity>
          {/* {clickStateBool ? (
            <S.ItemBookMark onClick={() => onClickStar(stationName)}>
              <AiOutlineStar />
            </S.ItemBookMark>
          ) : ( */}
          <S.ItemBookMark onClick={() => onClickStar(stationName)}>
            <AiFillStar />
          </S.ItemBookMark>
          {/* )} */}
        </S.ItemContainer>
        <>
          <div>{pm10Grade ? pm10Grade : '정보 없음'}</div>
          <div>{pm10Value}</div>
          <div>{dataTime}</div>
        </>
      </S.Container>
    </>
  )
}

export default BookmarkCard
