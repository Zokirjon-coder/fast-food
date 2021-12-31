import React, { createContext, useState } from 'react'
import { Books } from '../../utils/dataBooks'

export const BooksApi = createContext();

const BuyurtmalarContext = ({children}) => {
    const [books, setBooks] = useState(Books);

    return (
        <BooksApi.Provider value={[books, setBooks]}>
            {children}
        </BooksApi.Provider>
    )
}

export default BuyurtmalarContext
