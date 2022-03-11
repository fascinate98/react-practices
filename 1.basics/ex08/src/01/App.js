import React from 'react';

const App = function(){
    return (
        <div id = 'App'>
              <h2>App01</h2>
            <p>JSX Tutorials - 특징1: HTML과 차이점</p>
            {
                /*
                    1. 속성은 Camel Case
                */
            }
             <input type='text' maxLength='10'/>
             {
                /*
                    2. Element는 꼭 닫는다.
                    오류) <br>, <hr>, <input>
                */
            }
            <br/>
            <hr/>
            <img src = 'https://image.fmkorea.com/files/attach/new/20200820/486616/773901471/3046418198/6ffeeffe3d042cd908eb3cfdaea66c23.jpg'/>
            {
                /*
                    3. 속성 이름은 DOM API 기반이다. (HTML TAG 기반 x)
                     <div id = 'box' class = 'box'> ... </div>
                     document.getElementById('box').className = 'box';
                */
            }
            <div id = 'box' className='box'>
                box입니다.    
            </div>
        </div>
    );
}

export default App;