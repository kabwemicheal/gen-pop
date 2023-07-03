import React from 'react'
import BorrowerModal from './BorrowerModal'


const EditBorrower = ({borrowerParams}) => {
  return (
    <div>
        <BorrowerModal borrowerParams={borrowerParams} />
    </div>
  )
}

export default EditBorrower