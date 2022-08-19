import React from 'react'
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
  return (
    <div>
      <S.Container className={pm10Grade}>
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
    </div>
  )
}

export default BookmarkCard
