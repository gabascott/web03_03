import React from 'react';
import { ReactDOM } from 'react';
import Konyv from './Konyv';

const konyvek = [
    {
        cim: "A Gyűrűk Ura: A gyűrű szövetsége",
        szerzo: "Aragorn"
    },
    {
        cim: "A Gyűrűk Ura: A két torony",
        szerzo: "Legolas"
    },
    {
        cim: "A Gyűrűk Ura: A király visszatér",
        szerzo: "Gimli"
    }
]


class Konyvek extends React.Component{
  render(){
    return (
        <React.Fragment>
            {
                konyvek.map((elem, index) => {
                    return <Konyv key={index} cim={elem.cim} szerzo={elem.szerzo}/>;
                })
            }
        </React.Fragment>
    );
  }
}

export default Konyvek;