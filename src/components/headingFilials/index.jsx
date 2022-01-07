import React from 'react'
import {HeadingsFilial, Flex} from '../style/styled'

const HeadingFilials =()=> {
        return (
            <HeadingsFilial>
                <Flex>
                    <div className="fillial">Filial nomi (uz)</div>    
                    <div className="fillial">Filial nomi (ru)</div>    
                    <div className="moljal">mo'ljal</div>    
                    <div className="ishvaqti">ish vaqti</div>    
                    <div className="action">action</div>    
                </Flex> 
            </HeadingsFilial>
        )
}

export default HeadingFilials;