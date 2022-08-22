import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './../../components/Card/Card'
import * as S from './style'
import CardContainer from './../../components/CardContainer/CardContainer'

const allCities = [
  '서울',
  '경기',
  '부산',
  '대구',
  '인천',
  '광주',
  '대전',
  '울산',
  '강원',
  '충북',
  '충남',
  '전북',
  '전남',
  '경북',
  '경남',
  '제주',
  '세종',
]

function ViewUserArea() {
  const [backgroundColor, setBackgroundColor] = useState('green')
  const [isLoading, setIsLoading] = useState(false)
  const [city, setCity] = useState<any>('서울')
  const [guNames, setGuNames] = useState<any>([])
  const [selectedGuName, setSelectedGuName] = useState('')
  const [items, setItems] = useState<any>([])
  const changeCity = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCity(e.currentTarget.value)
  }
  const changeGuName = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGuName(e.currentTarget.value)
  }
  const getUserArea = async () => {
    const queryParams = {
      serviceKey:
        'i6NBYvSPoHeMW79uztyefBELCckuvljpWPNb8uIpR7CMbXatMgAL++hdd4Tn8YCPNF7iEoY3T2ErVa6GVaMPpQ==',
      returnType: 'json',
      numOfRows: 1000,
      pageNo: 1,
      sidoName: city,
    }
    setIsLoading(true)
    try {
      const res = await axios.get('B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty', {
        params: queryParams,
      })
      const { items } = res.data.response.body
      setGuNames(items.map((item: any) => item.stationName))
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }
  const getSpecificArea = async () => {
    const queryParams = {
      serviceKey:
        'i6NBYvSPoHeMW79uztyefBELCckuvljpWPNb8uIpR7CMbXatMgAL++hdd4Tn8YCPNF7iEoY3T2ErVa6GVaMPpQ==',
      returnType: 'json',
      dataTerm: 'DAILY',
      stationName: selectedGuName,
    }
    try {
      const res = await axios.get('B552584/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty', {
        params: queryParams,
      })
      const { items } = res.data.response.body
      setItems(items[0])
    } catch (error) {}
  }
  useEffect(() => {
    getUserArea()
  }, [])
  useEffect(() => {
    getUserArea()
  }, [city])
  useEffect(() => {
    getSpecificArea()
  }, [selectedGuName])

  return (
    <S.Container>
      <S.SelectsContainer>
        <S.Select name="city" onChange={changeCity}>
          {allCities.map((city, index) => (
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
  )
}

export default ViewUserArea
