import React, { useContext } from 'react'
import { BorrowersContext } from '../../data-access/BorrowersContext'
import BorrowersShow from './BorrowerShow'

const BorrowersList = () => {
    const {borrowers} = useContext(BorrowersContext)
    const borrower =!!borrowers && borrowers.map((borrower, index) => {
      return <BorrowersShow key={index} borrowerInfo={borrower}/>
  })
  return (
  <div className=''>
  <div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full text-left text-sm font-light text-white">
          <thead
            class="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
            <tr>
              <th scope="col" className="px-6 py-4">#</th>
              <th scope="col" className="px-6 py-4">Name</th>
              <th scope="col" className="px-6 py-4">Amount</th>
              <th scope="col" className="px-6 py-4">Date of borrow</th>
              <th scope="col" className="px-6 py-4">Date of return</th>
            </tr>
          </thead>
          <tbody>
            {borrower}      
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
  </div>
  
  )
}

export default BorrowersList