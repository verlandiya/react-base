import MainCard from "./MainCard.jsx"
import "../css/filials.css"
import Button from "./Button.jsx"
import React from "react"
import FormFil from "./FormFil.jsx"

export default function Filials({ company, updateCompany }) {

    const addFil = (newFil) => {
        const updated = {
            ...company,
            rests: [...company.rests, newFil]
        }

        updateCompany(updated)
    }

    return (
            <div className="filial-bord">
                <FormFil onAdd={addFil} />

                <div className="filial-list">
                    {(company.rests || []).map((rest) => (
                        <div key={rest.id} className="filial-name">
                            {rest.name}
                        </div>
                    ))}
                </div>
            </div>
    )
}
