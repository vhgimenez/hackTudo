import { React, } from 'react';
import { Overlay, CardContainer } from './styles';

export const CardTime = ({ isVisibleTime, toggleCardTime, nameAdvert }) => {

    return (
    <>
        <Overlay isVisibleTime={isVisibleTime} onClick={toggleCardTime} />
        <CardContainer isVisibleTime={isVisibleTime}>
            <p>O anúncio "{nameAdvert}" está ativo há mais de um mês, deseja exclui-lo?</p>
        </CardContainer>
    </>
        
    )
}