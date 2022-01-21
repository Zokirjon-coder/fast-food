import React, { createContext, useState } from 'react';
import { dataXisobotList } from '../../utils/dataXisobotList';

export const XisobotlarApi = createContext();

const XisobotlarContext = ({children}) => {
    const [xisobot, setXisobot] = useState(dataXisobotList);
    return (
        <XisobotlarApi.Provider value={[xisobot, setXisobot]} >
            {children}
        </XisobotlarApi.Provider>
    )
}

export default XisobotlarContext
