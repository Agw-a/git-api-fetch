import React from 'react';
import ReactLoading from 'react-loading';



const Loading = () => {

  
  return (
    <div className='loading-state' >
      {<ReactLoading className='loader' type={'spin'} color={'black'}height={660} width={330} />}
      </div>
  )
}

export default Loading;