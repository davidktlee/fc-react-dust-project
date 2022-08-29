import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './../../components/Card/Card'
import * as S from './style'
import { cities } from '../../static/Cities'
import areaApi from './../../api/axiosApi'

interface Item {
  stationName: string
}

function ViewUserArea() {
  const [isLoading, setIsLoading] = useState(false)
  const [city, setCity] = useState<string>('서울')
  const [guNames, setGuNames] = useState<any>([])
  const [selectedGuName, setSelectedGuName] = useState<string | undefined>('')
  const [items, setItems] = useState<any>([])
  const [error, setError] = useState<Error | null>(null)
  const changeCity = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCity(e.currentTarget.value)
  }
  const changeGuName = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGuName(e.currentTarget.value)
  }
  const getUserArea = async () => {
    setIsLoading(true)
    try {
      const res = await areaApi({
        url: '/getCtprvnRltmMesureDnsty',
        params: { numOfRows: 1000, pageNo: 1, sidoName: city },
      })
      const { items } = res.data.response.body
      console.log(items)
      await setGuNames(items.map((item: Item) => item.stationName))
    } catch (error) {
      console.error(error)
      setError(error as Error)
    } finally {
      setIsLoading(false)
    }
  }
  const getSpecificArea = async () => {
    try {
      const res = await areaApi({
        url: '/getMsrstnAcctoRltmMesureDnsty',
        params: { dataTerm: 'DAILY', stationName: selectedGuName },
      })
      const { items } = res.data.response.body
      setItems(items[0])
    } catch (error) {
      console.error(error)
      setError(error as Error)
    }
  }

  useEffect(() => {
    getUserArea()
  }, [city])
  useEffect(() => {
    if (selectedGuName) {
      getSpecificArea()
    }
  }, [selectedGuName])

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>에러 발생</p>
      ) : (
        <S.Container>
          <S.SelectsContainer>
            <S.Select name="city" onChange={changeCity}>
              {cities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </S.Select>
          </S.SelectsContainer>
          <S.SelectsContainer>
            <S.Select name="guName" onChange={changeGuName}>
              {guNames &&
                guNames.map((gu: any, index: number) => (
                  <S.Option key={index} value={gu}>
                    {gu}
                  </S.Option>
                ))}
            </S.Select>
          </S.SelectsContainer>
          {!selectedGuName ? (
            <div>원하는 위치를 선택해주세요</div>
          ) : (
            <Card
              key={`${selectedGuName}`}
              pm10Grade={items.pm10Grade}
              pm10Value={items.pm10Value}
              dataTime={items.dataTime}
              stationName={selectedGuName}
              sidoName={items.sidoName}
            />
          )}
        </S.Container>
      )}
    </>
  )
}

export default ViewUserArea
