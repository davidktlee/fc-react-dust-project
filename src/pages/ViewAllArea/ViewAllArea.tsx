import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import * as S from './style'
import Card from '../../components/Card/Card'
import { createLanguageService } from 'typescript'
import CardContainer from './../../components/CardContainer/CardContainer'
import { useAppDispatch } from '../../store/store'
import { bookmarkActions } from '../../store/slices/bookmarkSlice'

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
  const [datas, setDatas] = useState<any>([])
  const allItems = useRef<any>('')
  const dispatch = useAppDispatch()
  const [backgroundColor, setBackgroundColor] = useState('')
  const changeOptionHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.currentTarget
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
      console.log(items)
      const { stationName } = res.data.response.body.items

      allItems.current = items
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }
  useEffect(() => {
    allItems.current = []
    getDust()
  }, [])
  useEffect(() => {
    getDust()
  }, [city])

  console.log(allItems)
  return (
    <>
      <S.Container>
        {isLoading && <p>Loading...</p>}
        <S.SelectsContainer>
          <S.Select name="city" onChange={changeOptionHandler}>
            {allCities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </S.Select>
        </S.SelectsContainer>

        <CardContainer datas={allItems.current} />
      </S.Container>
    </>
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
