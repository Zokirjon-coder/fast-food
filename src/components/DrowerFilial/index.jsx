import React, { useContext, useRef } from 'react';
import { DROWER } from './style';
import { dataFilial } from '../../utils/dataFilial';
import { FilialsApi } from '../../context/FilialarContext';
import { YMaps, Map, Placemark, ZoomControl } from 'react-yandex-maps'

export default function Drower(props) {
    let [showAddFilial, setShowAddFilial] = props.show;
    const [filials, setFilials] = useContext(FilialsApi);
    const location = props.location;


    const filialnameuz = useRef();
    const filialnameru = useRef();
    const worktime_start = useRef();
    const worktime_end = useRef();
    const mark = useRef();

    const AddFood = () => {

        let newFiliall = {
            id: dataFilial.length + 1,
            filialnameuz: filialnameuz.current.value,
            filialnameru: filialnameru.current.value,
            worktime_start: worktime_start.current.value,
            worktime_end: worktime_end.current.value,
            mark: mark.current.value,
            location: [41.316441, 69.294861],
        }

        setFilials([...filials, newFiliall]);
        setShowAddFilial(false);
    }

    const EditFood = (id) => {
        let newFilial = {
            id: id,
            filialnameuz: filialnameuz.current.value,
            filialnameru: filialnameru.current.value,
            worktime_start: worktime_start.current.value,
            worktime_end: worktime_end.current.value,
            mark: mark.current.value,
        }

        let newFilials = [];
        filials.forEach(filial => {
            if (id !== filial.id) {
                newFilials = [...newFilials, filial];
            } else {
                let location = filial.location;
                newFilials = [...newFilials, {...newFilial, location}];
            }

        })

        setFilials(newFilials);
        setShowAddFilial(false);
    }

    return (
        <DROWER show={showAddFilial}>
            <DROWER.CloseBtn show={showAddFilial} onClick={() => setShowAddFilial(false)}></DROWER.CloseBtn>
            <div className="container">
                <h1>{props.input === 'edit' ? 'Filialni tahrirlash' : "Yangi filial qo'shish"}</h1>
                <div className="inp">
                    <p className="titleInp">Filial nomi uz</p>
                    <input required type="text" ref={filialnameuz} name="" id="" placeholder='Filial nomi uz' />
                </div>
                <div className="inp">
                    <p className="titleInp">Filial nomi ru</p>
                    <input required type="text" name="" ref={filialnameru} id="" placeholder='Filial nomi ru' />
                </div>
                <div className="inp time">
                    <p className="titleInp">Ish vaqti</p>
                    <div className="times">
                        <input type="time" name="" ref={worktime_start} id="" />
                        <input type="time" name="" ref={worktime_end} id="" />
                    </div>
                </div>
                <div className="inp">
                    <p className="titleInp">Filial mo'ljal</p>
                    <input type="text" name="" ref={mark} id="" placeholder='Filial mo"ljal' />
                </div>
                <div className="inp" style={{
                    opacity: 1,
                    border: '1px solid var(--grey)',
                    width: '100%',
                    height: '150px'
                }}>

                    <YMaps>
                        <Map
                            defaultState={{
                                center: location,
                                zoom: 5,
                            }}
                            width='100%'
                            height='100%'
                        >
                            <Placemark geometry={location} />
                            <ZoomControl options={{ float: 'right' }} />
                        </Map>
                    </YMaps>

                </div>
                <div className="btn">
                    <button onClick={() => props.input === 'edit' ? EditFood(props.id) : AddFood()}>Saqlash</button>
                </div>
            </div>
        </DROWER>
    )
}
