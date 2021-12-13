import React, { Component, useState } from 'react'
import { people } from '../data/people';

const Foods = (props) => {
    const styleName = {
        fontSize: '18px',
        color: 'grey',
        minWidth: '150px',
        textAlign: 'left'
    };

    const edit = {
        id: null,
        name: 'name',
        surname: 'surname',
        age: 0,
        status: 'status',
    };

    const [people, setPeople] = useState(people);
    const [searchParametr, setSearchParametr] = useState('name');
    const [styleName, setStyleName] = useState(styleName);
    const [edit, setEdit] = useState(edit)


    let clicked = (id) => {
        setPeople(people.filter(value => value.id !== id));
    }

    let onSearch = (e) => {
        let text = e.target.value;
        let newData;
        text === '' ? newData = people : isNaN(text) ? newData = people.filter(value => value[searchParametr].toUpperCase().includes(text.toUpperCase())) : newData = people.filter(value => String(value[searchParametr]).includes(String(text)))
        setPeople(newData)
    }

    let selected = (value) => {
        setSearchParametr(value);
    }

    let edit = (id) => {
        people.forEach(value => {
            if (value.id === id) {
                setEdit(value);
            }
        })
    }

    let update = () => {
        let newDate = people;
        newDate.forEach(value => {
            if (value.id === edit.id) {
                value = edit;
            }
        });
        setPeople(newDate);
    }

    let editState = (e) => {
        let newEdit = edit;
        for (let key in newEdit) {
            if (key === e.target.name) {
                if (e.target.value) newEdit[key] = e.target.value;
            }
        }


        return (
            <div>
                <input type="text" onChange={onSearch} placeholder={"search " + searchParametr} />
                <select onChange={({ target }) => selected(target.value)}>
                    <option value="name">name</option>
                    <option value="surname">surname</option>
                    <option value="status">status</option>
                    <option value="age">age</option>
                </select>
                <br />
                <input name={'name'} placeholder={edit.name} onChange={editState} type="text" />
                <input name={'surname'} placeholder={edit.surname} onChange={editState} type="text" />
                <input name={'status'} placeholder={edit.status} onChange={editState} type="text" />
                <button onClick={update}>update</button>
                {this.state.people.map(({ id, name, surname, age, status }) => {
                    return (
                        <div key={id} style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 100px'
                        }}>
                            <h1 style={styleName} className="name">{name}</h1>
                            <h1 style={styleName} className="name">{surname}</h1>
                            <h1 style={styleName} className="name">{age}</h1>
                            <h1 style={styleName} className="name">{status}</h1>
                            <button onClick={() => clicked(id)}>delete</button>
                            <button onClick={() => edit(id)}>edit</button>
                        </div>
                    );
                })};
            </div>
        );
    };
};

export default Foods;