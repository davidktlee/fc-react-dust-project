import React from 'react'
import Card from './../Card/Card'
import * as S from './style'

interface PropsType {
  datas: []
  city?: string
}

function CardContainer({ datas, city }: PropsType) {
  return (
    <S.Container>
      {datas &&
        datas.map((data: any, index: number) => (
          <Card
            key={`${data.stationName}-${index}`}
            pm10Grade={data.pm10Grade}
            pm10Value={data.pm10Value}
            dataTime={data.dataTime}
            stationName={data.stationName}
            sidoName={city}
          />
        ))}
    </S.Container>
  )
}

export default React.memo(CardContainer)
