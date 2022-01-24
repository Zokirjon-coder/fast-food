import React, { useState, useContext } from 'react'
import { KategoryItem, CircleBtn, Flex } from '../style/styled'
import Trash from '../../assets/images/trash.png';
import Edit from '../../assets/images/Path.png';
import Drower from '../DrowerKategory';
import { KategoriaApi } from '../../context/Bategorialar/KategorialarContex';

const KategoryListItem = (props) => {
    const [showEditFood, setShowEditFood] = useState(false);
    const {id, kategoriaUz, kategoriaRu, boshKategoria} = props.info;
    const [kategoria, setKategoria] = useContext(KategoriaApi);

    const onDelete = (id) =>{
        setKategoria(
            kategoria.filter(value => value.id !== id)
        )
    }
    
    return (
        <KategoryItem>
            <Flex>
                <div className="kategoryuz">{kategoriaUz}</div>
                <div className="kategoryru">{kategoriaRu}</div>
                <div className="kategorymain">{boshKategoria ? boshKategoria : '-'}</div>
                <div className="kategoryaction">
                    <CircleBtn onClick={()=>setShowEditFood(true)} param={{ diametr: "35", borderWidth: "4" }}>
                        <Flex className="centered">
                            <img style={{borderRadius: 0}} src={Edit} alt="" />
                        </Flex>
                    </CircleBtn>
                    <CircleBtn onClick={() => { onDelete(id) }} param={{ diametr: "35", borderWidth: "4" }}>
                        <Flex className="centered">
                            <img style={{borderRadius: 0}} src={Trash} alt="" />
                        </Flex>
                    </CircleBtn>
                </div>
            </Flex>
            <Drower input='edit' id={(id)} show={[showEditFood, setShowEditFood]} />
        </KategoryItem>
    )
}

export default KategoryListItem;