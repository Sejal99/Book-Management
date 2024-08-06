import React from 'react'

const Pagination = ({data,itemsPerPage,currentPage,setCurrentPage}) => {
   


    const handleNext=()=>{
     setCurrentPage( currentPage+1);
    }
  return (

        <div className='flex justify-center gap-2'>
            <button onClick={handlePrev}>Prev</button>
            <button onClick={handleNext}>Next</button>
        </div>

  )
}

export default Pagination