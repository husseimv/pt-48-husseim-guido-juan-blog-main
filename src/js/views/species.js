import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";


export const Species = () => {

    const { store, actions } = useContext(Context);

    return (<>

        <div className="row">

            {store.species.map((value, index) => {

                return (

                    <div className="card people" key={index} style={{ "width": "300px" }}>
                        <img src={`https://starwars-visualguide.com/assets/img/species/${value.uid}.jpg`} className="card-image" alt="..." />
                        <div className="card-body">
                            <h4 className="card-title">{value.name}</h4>
                        </div>
                    </div>)

            })}
        </div>
    </>);

};
