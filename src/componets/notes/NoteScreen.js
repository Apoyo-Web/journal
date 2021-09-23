import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="note__main-content">

            <NotesAppBar />

            <div className="note__content">
                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="note_title-input"
                    autoComplete= "off"

                />

                <textarea

                    placeholder="What happened today"
                    className="notes__textarea"
                
                >

                </textarea>

                <div className="note__image">
                    <img src="https://okdiario.com/img/2020/02/03/-que-hora-es-en-el-espacio-esta-es-la-respuesta.jpg" alt="Espacio" />
                </div>
            </div>
            
        </div>
    )
}
