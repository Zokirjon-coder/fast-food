import React, { createContext, useState } from 'react';
import { dataKategoria } from '../../utils/datakategoria';

export const KategoriaApi = createContext();

const KategorialarContex = ({children}) => {
    const [kategoria, setKategoria] = useState(dataKategoria);
    return (
        <KategoriaApi.Provider value={[kategoria, setKategoria]} >
            {children}
        </KategoriaApi.Provider>
    )
}

export default KategorialarContex