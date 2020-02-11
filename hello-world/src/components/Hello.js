import React from 'react'

// function Hello()
// {
//     return <h1> Hello ppp </h1>
// }
const Hello = () =>
{
    // return(
    //     <div className='dummyClass'>
    //         <h1>hello purv</h1>
    //     </div>
    // )
    return React.createElement('div',{id:'hello',className:'dummyclass'}
    ,React.createElement('h1',null,'hello purv'))
}
export default Hello