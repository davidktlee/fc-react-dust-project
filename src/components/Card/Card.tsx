import React, { useEffect, useRef, useState } from 'react'
import * as S from './style'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import { useAppDispatch } from '../../store/store'
import { bookmarkActions } from '../../store/slices/bookmarkSlice'

interface PropsType {
  // dataTime: string

  stationName: string
  sidoName: string | undefined
  pm10Grade: string
  pm10Value: string
  dataTime: string
  clickState?: boolean
}

function Card({ pm10Grade, sidoName, stationName, dataTime, pm10Value }: PropsType) {
  const [clickStateBool, setClickStateBool] = useState(false)
  const dispatch = useAppDispatch()
  const [color, setColor] = useState('')
  const [text, setText] = useState('')
  const onClickStar = (stationName: string) => {
    // click하면 dispatch 보내서 위치 저장
    if (!clickStateBool) {
      dispatch(
        bookmarkActions.likedArea({
          payload: { stationName, sidoName, pm10Grade, dataTime, pm10Value },
        })
      )
      setClickStateBool(true)
    } else if (clickStateBool) {
      dispatch(
        bookmarkActions.unLikedArea({
          payload: stationName,
        })
      )
      setClickStateBool(false)
    }
  }
  useEffect(() => {
    if (pm10Grade === '1') {
      setColor('#32cd32')
      setText('좋음')
    } else if (pm10Grade === '2') {
      setColor('#6b8e23')
      setText('조금 좋음')
    } else if (pm10Grade === '3') {
      setColor('#F7E600')
      setText('보통')
    } else if (pm10Grade === '4') {
      setColor('#ff4500')
      setText('나쁨')
    }
  }, [])

  return (
    <>
      <S.Container className={color}>
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
        <S.ResultArea>
          <S.ResultText>{text || '정보 없음'}</S.ResultText>
          <div>미세먼지 수치: {pm10Value}</div>
          <S.ResultTime>{dataTime}</S.ResultTime>
        </S.ResultArea>
      </S.Container>
    </>
  )
}

export default React.memo(Card)
/*    */
