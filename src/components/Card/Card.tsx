import React, { useState } from 'react'
import * as S from './style'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
interface PropsType {
  datas: []
}

function Card({ datas }: PropsType) {
  const [clickState, setClickState] = useState(false)
  const [backgroundColor, setBackgroundColor] = useState('gray')
  const onClickStar = () => {
    // click하면 dispatch 보내서 위치 저장
  }
  datas.map((data: any) => {
    if (data.pmGrade === '1' || '2') {
      setBackgroundColor('green')
    } else if (data.pmGrade === '3' || '4') {
      setBackgroundColor('red')
    }
  })

  return (
    <>
      {datas.map((data: any) => (
        <S.Container style={{ backgroundColor: backgroundColor }}>
          <S.ItemContainer>
            <S.ItemGu>{data.stationName}</S.ItemGu>
            <S.ItemCity>{data.sidoName}</S.ItemCity>
            {clickState ? (
              <S.ItemBookMark onClick={() => setClickState((prev) => !prev)}>
                <AiOutlineStar />
              </S.ItemBookMark>
            ) : (
              <S.ItemBookMark onClick={() => setClickState((prev) => !prev)}>
                <AiFillStar />
              </S.ItemBookMark>
            )}
          </S.ItemContainer>
          <div>{data.pmGrade}</div>
          <div>{data.pmValue}</div>
          <div>{data.dataTime}</div>
        </S.Container>
      ))}
    </>
  )
}

export default Card
