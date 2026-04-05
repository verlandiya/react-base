import React, { useState } from "react"
import '../css/form.css'

export default function FormFil({ onAdd }) {
    const [name, setName] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!name) return

        onAdd({
            id: Date.now(),
            name: name
        })

        setName("")
    }

    return (
        <form onSubmit={handleSubmit} className="form-group">
            <input
                type="text"
                placeholder="Название ресторана"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-input"
            />
            <button type="submit">Добавить</button>
        </form>
    )
}
