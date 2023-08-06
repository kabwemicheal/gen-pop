import React from 'react'
import BorrowerModal from './BorrowerModal'


const EditBorrower = ({borrowerParams}) => {
  return (
    <>
        <BorrowerModal borrowerParams={borrowerParams} />
    </>
  )
}

export default EditBorrower