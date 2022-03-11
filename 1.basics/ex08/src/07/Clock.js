import React from 'react'

export const Clock01 = () => {

    var time = new Date();
    var hour = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();

    //{time.toLocaleString('ko-KR')}


  return (
    <div>
        <p>{hour} : {min} : {sec}</p>
    </div>
  )
}
export default Clock01
