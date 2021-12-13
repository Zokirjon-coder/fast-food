import React from 'react'
import {Headings, Flex} from '../style/styled'

const HeadingFoods =()=> {
        return (
            <Headings>
                <Flex>
                    <div className="maxsulot">Maxsulot</div>    
                    <div className="kategoriya">Kategoriya</div>    
                    <div className="narxi">narxi</div>    
                    <div className="qoshimcha">qo'shimcha</div>    
                    <div className="action">action</div>    
                </Flex> 
            </Headings>
        )
}

export default HeadingFoods;