import React, { useEffect, useState } from 'react'
import * as S from './style'
import CardContainer from './../../components/CardContainer/CardContainer'

import { cities } from '../../static/Cities'
import areaApi from '../../api/axiosApi'
function ViewAllArea() {
  const [city, setCity] = useState('서울')
  const [datas, setDatas] = useState<[]>([])
  const [error, setError] = useState<Error | null>(null)
  const changeOptionHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.currentTarget
    setCity(value)
  }

  const [isLoading, setIsLoading] = useState(false)
  const getDust = async () => {
    setIsLoading(true)
    try {
      const res = await areaApi({
        url: '/getCtprvnRltmMesureDnsty',
        params: { numOfRows: 1000, pageNo: 1, sidoName: city },
      })
      const { items } = res.data.response.body
      setDatas(items)
    } catch (error) {
      console.log(error)
      setError(error as Error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getDust()
  }, [city])

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>에러 발생</p>
      ) : (
        <S.Container>
          <S.SelectsContainer>
            <S.Select name="city" onChange={changeOptionHandler}>
              {cities.map((city: any, index: number) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </S.Select>
          </S.SelectsContainer>
          {datas && <CardContainer datas={datas} city={city} />}
        </S.Container>
      )}
    </>
  )
}

export default ViewAllArea
