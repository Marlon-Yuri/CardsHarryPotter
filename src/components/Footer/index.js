import React from 'react'
import * as S from './style'

export function Footer() {
    return (
        <S.Container>

            <S.BoxList>
                <S.List>
                    <S.ListItem to="https://github.com/Marlon-Yuri" > <img src="https://logodownload.org/wp-content/uploads/2019/08/github-logo-icon-0.png" alt="" width="40" />     </S.ListItem>
                    <S.ListItem to="https://www.linkedin.com/in/marlon-yuri-jesus-97437b207/"> <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="" width="40" /> </S.ListItem>
                </S.List>


            </S.BoxList>

        </S.Container>
    )

}