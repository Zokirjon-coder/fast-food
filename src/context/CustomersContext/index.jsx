import React, { createContext, useState } from 'react';
import { dataCustomers } from '../../utils/dataCustomers';

export const CustomersApi = createContext(); 

const CustomersContext = ({children}) => {
    const [castomer, setCastomer] = useState(dataCustomers);

    return (
        <CustomersApi.Provider value = {[castomer, setCastomer]}>
            {children}
        </CustomersApi.Provider>
    )
}

export default CustomersContext;
