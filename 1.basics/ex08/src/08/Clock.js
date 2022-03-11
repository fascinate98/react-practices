import React from 'react'

const Clock = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const html =
        "<span>" + 
        ('0' + (hours > 12 ? hours - 12 : hours)).slice(-2) + 
        " : " +
        ('0' + minutes).slice(-2) +
        " : " +
        ('0' + seconds).slice(-2) +
        " " +
        (hours > 12 ? 'PM' : 'AM') +
        "</span>";

    return (
      // coment 01 : 컴포넌트 안이기 떄문에 자바스크립트 구문이 가능하다.
       <div  
       // coment02 : 여기서도 다중행 주석이 가능하다.
       /*
        응애 
       */
       className='clock'
       title='시계'>
      
            {('0' + (hours > 12 ? hours - 12 : hours)).slice(-2)}
            { ' : ' }

            {/**
             *  comment03: 이런 방식으로 표현식이 실행되는 블록 안에서 주석 사용 가능
             */}

            {('0' + minutes).slice(-2)}
            { ' : ' }

            {/**
             *  JSX는 HTML이 아니다!! <!--> ㄴ는 사용 불가
             */}

            {('0' + seconds).slice(-2)}
            { ' ' }
            {hours > 12 ? 'PM' : 'AM'}
        </div>
    )
    
}

export default Clock