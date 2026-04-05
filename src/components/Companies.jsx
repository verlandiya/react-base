import MainCard from "./MainCard.jsx"
import "../css/companies.css"
import Button from "./Button.jsx"
import React, { useState } from "react"
import Filials from "./Filials.jsx"
import FormComp from "./FormComp.jsx"

export default function Companies({ companies: initialCompanies }) {
    const [companies, setCompanies] = useState(initialCompanies)
    const [selectedCompany, setSelectedCompany] = useState(null)

    const addCompany = (newCompany) => {
        setCompanies([...companies, newCompany])
    }

    return (<MainCard>
            {!selectedCompany ? (
                <div className="company-bord">

                    <FormComp onAdd={addCompany} />
                    <div className="company-list">
                        {companies.map((comp) => (
                            <div key={comp.id} className="company-item">
                                <div className="company-name">{comp.name}</div>
                                <Button
                                    title='Подробнее'
                                    onClick={() => setSelectedCompany(comp)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <Filials
                    company={selectedCompany}
                    onBack={() => setSelectedCompany(null)}
                    updateCompany={(updatedComp) => {
                        setCompanies(companies.map(c =>
                            c.id === updatedComp.id ? updatedComp : c
                        ))
                        setSelectedCompany(updatedComp)
                    }}
                />
            )}</MainCard>
    )
}

