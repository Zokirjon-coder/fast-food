import React, { useContext, useRef } from 'react';
import { DROWER } from './style';
import { KategoriaApi } from '../../context/Bategorialar/KategorialarContex';

export default function DrowerKategory(props) {
    let [showAddKategory, setShowAddKategory] = props.show;
    const [kategoria, setKategoria] = useContext(KategoriaApi);

    const kategoryNameUz = useRef();
    const kategoryNameRu = useRef();
    const mainKategory = useRef();
    const mainKategoryName = useRef();

    const AddKategory = () => {

        let newKategory = {
            id: props.lengthData + 1,
            kategoriaUz: kategoryNameUz.current.value,
            kategoriaRu: kategoryNameRu.current.value,
            boshKategoria: mainKategory.current.checked ? mainKategoryName.current.value : '-',
        }

        setKategoria([...kategoria, newKategory]);
        setShowAddKategory(false);
    }

    const EditKategory = (id) => {
        let newKategory = {
            id: id,
            kategoriaUz: kategoryNameUz.current.value,
            kategoriaRu: kategoryNameRu.current.value,
            boshKategoria: mainKategory.current.checked ? mainKategoryName.current.value : '-',
        }
        let newKategories = [];
        kategoria.forEach(kategory => {
            if (id !== kategory.id) {
                newKategories = [...newKategories, kategory];
            } else {
                newKategories = [...newKategories, newKategory];
            }

        })

        setKategoria(newKategories);
        setShowAddKategory(false);
    }
    

    return (
        <DROWER show={showAddKategory}>
            <DROWER.CloseBtn show={showAddKategory} onClick={() => setShowAddKategory(false)}></DROWER.CloseBtn>
            <div className="container">
                <h1>{props.input === 'edit' ? 'Kategorianini tahrirlash' : "Yangi kategoria qo'shish"}</h1>
                <div className="inp">
                    <p className="titleInp">Kategoria nomi uz</p>
                    <input required type="text" ref={kategoryNameUz} name="" id="" placeholder='Kategoria nomi uz' />
                </div>
                <div className="inp">
                    <p className="titleInp">Kategoria nomi ru</p>
                    <input required type="text" name="" ref={kategoryNameRu} id="" placeholder='Kategoria nomi ru' />
                </div>
                <div className="inp">
                    <p className="titleInp">Kategoriya</p>
                    <div className="select">
                        <input type="checkbox" required ref={mainKategory} />
                        <select required  ref={mainKategoryName}>
                            <option value="burger">Burger</option>
                            <option value="ichimlik">Ichimlik</option>
                            <option value="lavash">Lavash</option>
                            <option value="lavash_mini">Lavash mini</option>
                        </select>
                    </div>
                </div>

                <div className="btn">
                    <button onClick={() => props.input === 'edit' ? EditKategory(props.id) : AddKategory()}>Saqlash</button>
                </div>
            </div>
        </DROWER>
    )
}
