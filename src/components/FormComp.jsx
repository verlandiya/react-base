import React, { useState } from "react"
import '../css/filials.css'

export default function FormComp({ onAdd }) {
    const [name, setName] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!name) return

        onAdd({
            id: Date.now(),
            name: name,
            rests: []
        })

        setName("")
    }

    return (
        <form onSubmit={handleSubmit} className="form-group">
            <input
                type="text"
                placeholder="Название компании"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-input"
            />
            <button type="submit">Добавить</button>
        </form>
    )
}



