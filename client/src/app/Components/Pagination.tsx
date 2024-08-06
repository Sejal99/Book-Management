import React from 'react'
//@ts-ignore
const Pagination = ({data,itemsPerPage,currentPage,setCurrentPage}) => {
   
const handlePrev=()=>{
  if(currentPage>1){
    setCurrentPage(currentPage-1);
  }

}

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