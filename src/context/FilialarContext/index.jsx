import React, { createContext, useState } from 'react'
import { dataFilial } from '../../utils/dataFilial'

export const FilialsApi = createContext();

const FilialarContext = ({children}) => {
    const [filials, setFilials] = useState(dataFilial);

    return (
        <FilialsApi.Provider value={[filials, setFilials]}>
            {children}
        </FilialsApi.Provider>
    )
}

export default FilialarContext
