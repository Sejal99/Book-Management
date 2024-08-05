import React from 'react'

const Pagination = ({data,itemsPerPage,currentPage,setCurrentPage}) => {
   


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