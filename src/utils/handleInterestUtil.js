export const calculateInterest = (tenure, amountBorrowed) =>{
    if(tenure === 1){
       return  0.25 * Number(amountBorrowed)
    } else if (tenure > 1  &&  tenure <= 3){
        return 0.3 * Number(amountBorrowed)
    }else {
        return  0.6 * Number(amountBorrowed)
    }
} 

export const calculateAmountToReturn = (tenure, amountBorrowed) => calculateInterest(tenure, amountBorrowed) + Number(amountBorrowed)