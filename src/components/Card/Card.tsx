import React, { useEffect, useRef, useState } from 'react'
import * as S from './style'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import { useAppDispatch } from '../../store/store'
import { bookmarkActions } from '../../store/slices/bookmarkSlice'

interface PropsType {
  // dataTime: string

  stationName: string
  sidoName: string
  pm10Grade: string
  pm10Value: string
  dataTime: string
  clickState?: boolean
}

function Card({ pm10Grade, sidoName, stationName, dataTime, clickState, pm10Value }: PropsType) {
  const [clickStateBool, setClickStateBool] = useState(false)
  const dispatch = useAppDispatch()
  if (clickState) {
    setClickStateBool(true)
  }
  const onClickStar = (stationName: string) => {
    // click하면 dispatch 보내서 위치 저장
    if (!clickState) {
      dispatch(
        bookmarkActions.likedArea({
          payload: { stationName, sidoName, pm10Grade, dataTime, pm10Value },
        })
      )
      setClickStateBool(true)
    } else if (clickState) {
      dispatch(
        bookmarkActions.unLikedArea({
          payload: stationName,
        })
      )
      setClickStateBool(false)
    }
  }

  return (
    <>
      <S.Container className={pm10Grade}>
        <S.ItemContainer>
          <S.ItemGu>{stationName}</S.ItemGu>
          <S.ItemCity>{sidoName}</S.ItemCity>
          {!clickStateBool ? (
            <S.ItemBookMark onClick={() => onClickStar(stationName)}>
              <AiOutlineStar />
            </S.ItemBookMark>
          ) : (
            <S.ItemBookMark onClick={() => onClickStar(stationName)}>
              <AiFillStar />
            </S.ItemBookMark>
          )}
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

export default Card
/*    */
