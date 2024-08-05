import React from 'react'

const Pagination = ({data}) => {
    const itemsPerPage=3;
    const totalPages = Math.ceil(data.length / itemsPerPage);
console.log(totalPages);

    const handleNext=()=>{

    }
  return (

        <div className='flex justify-center gap-2'>
            <button>Prev</button>
            <button onClick={handleNext}>Next</button>
        </div>

  )
}

export default Pagination