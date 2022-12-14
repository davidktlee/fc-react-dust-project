import React, { useEffect, useState } from 'react'
import { useAppDispatch, useBookmarkSelector } from './../../store/store'

import { bookmarkActions } from '../../store/slices/bookmarkSlice'
import BookmarkCard from './../../components/Card/BookmarkCard/BookmarkCard'
import * as S from './style'

function BookMark() {
  const [selector, setSelector] = useState(useBookmarkSelector((state: any) => state.liked))
  const dispatch = useAppDispatch()
  const [clickStateBool, setClickStateBool] = useState(false)

  const onClickStar = (stationName: string) => {
    setSelector(selector.filter((item: any) => item.payload.stationName !== stationName))
    dispatch(bookmarkActions.unLikedArea({ payload: selector }))
  }

  return (
    <>
      <S.Container>
        <S.h1>즐겨찾기</S.h1>
        {selector &&
          selector.flatMap((data: any, index: number) => (
            <BookmarkCard
              key={`${index}-${data.payload.stationName}`}
              stationName={data.payload.stationName}
              pm10Grade={data.payload.pm10Grade}
              sidoName={data.payload.sidoName}
              pm10Value={data.payload.pm10Value}
              dataTime={data.payload.dataTime}
              onClickStar={onClickStar}
              clickStateBool={clickStateBool}
            />
          ))}
      </S.Container>
    </>
  )
}

export default BookMark
