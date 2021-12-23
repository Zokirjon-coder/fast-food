import React, { createContext, useState } from 'react';
import { dataFood } from '../../utils/dataFood';

export const MahsulotlarApi = createContext();

const MahsulotlarContext = ({children}) => {
    const [foods, setFoods] = useState(dataFood);
    return (
        <MahsulotlarApi.Provider value={[foods, setFoods]} >
            {children}
        </MahsulotlarApi.Provider>
    )
}

export default MahsulotlarContext
