import React, { useEffect, useState } from 'react'
import axios from 'axios'
import * as S from './style'
import Card from './../../components/Card/Card'

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
function ViewAllArea() {
  const [city, setCity] = useState('서울')
  const [datas, setDatas] = useState([])
  const changeOptionHandler = (e: React.FormEvent<HTMLOptionElement>) => {
    const { value } = e.currentTarget
    console.log(value)
    setCity(value)
  }
  const queryParams = {
    serviceKey:
      'i6NBYvSPoHeMW79uztyefBELCckuvljpWPNb8uIpR7CMbXatMgAL++hdd4Tn8YCPNF7iEoY3T2ErVa6GVaMPpQ==',
    returnType: 'json',
    numOfRows: 1000,
    pageNo: 1,
    sidoName: city,
  }
  const [isLoading, setIsLoading] = useState(false)
  const getDust = async () => {
    setIsLoading(true)
    try {
      const res = await axios.get('B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty', {
        params: queryParams,
      })
      const { items } = res.data.response.body
      setDatas(items)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }
  useEffect(() => {
    getDust()
  }, [city])

  return (
    // 불러온 값 map 돌려서 Card 컴포넌트 불러오기
    <S.Container>
      {isLoading && <p>Loading...</p>}
      <S.SelectsContainer>
        <S.Select name="city">
          {allCities.map((city, index) => (
            <option onChange={changeOptionHandler} key={index} value={city}>
              {city}
            </option>
          ))}
        </S.Select>
      </S.SelectsContainer>
      <div>
      
          {/* <Card
            key={index}
            dataTime={data.dataTime}
            pmValue={data.pm10Value}
            pmGrade={data.pm10Grade}
          /> */}

      </div>
    </S.Container>
  )
}

export default ViewAllArea

/*    <S.SelectsContainer>
        <S.Select name="guName">
          {guName.map((gu, index) => (
            <S.Option key={index} value={gu}>
              {gu}
            </S.Option>
          ))}
        </S.Select>
      </S.SelectsContainer> */
