import React from 'react'
import { HeadingsKategory, Flex } from '../style/styled'

const HeadingKategoria = () => {
    return (
        <HeadingsKategory>
            <Flex>
                <div className="kategoryuz">kategoria (uz)</div>
                <div className="kategoryru">Kategoria (ru)</div>
                <div className="kategorymain">Bosh kategoria</div>
                <div className="action">action</div>
            </Flex>
        </HeadingsKategory>
    )
}

export default HeadingKategoria;