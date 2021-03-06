import React, { useState, useEffect } from 'react'
import { api } from '../../services/api'
import * as S from './style'


export function Main () {

const [list, setList] = useState ([])

useEffect (() => {
    api.get()
    .then(response => setList(response.data))
}, [ ])

return (
    <S.Container>
        {list.slice(0,25).map((item, index) => (

        <S.BoxImage key={index}>
          <S.H1>  {item.name}   </S.H1>
          <p> {item.house} </p>
          <p>  {item.ancestry} </p>
          <S.Img src={item.image} alt="{item.name}" width="200px" height="320px" />
        </S.BoxImage>

))}
    </S.Container>
)
}