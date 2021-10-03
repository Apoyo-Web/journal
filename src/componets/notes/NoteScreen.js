import React from 'react'
import { useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {

    const { active: note } = useSelector(state => state.notes)
    const [formValues, handleInputChange] = useForm(note)
    const { body, title } = formValues;
    
    return (
        <div className="note__main-content">

            <NotesAppBar />

            <div className="note__content">
                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="note_title-input"
                    autoComplete="off"
                    value={title}
                    onChange={handleInputChange}

                />

                <textarea

                    placeholder="What happened today"
                    className="notes__textarea"
                    value={body}
                    onChange={handleInputChange}
                
                >

                </textarea>
                {
                    (note.url) &&
                    <div className="note__image">
                        <img src="https://okdiario.com/img/2020/02/03/-que-hora-es-en-el-espacio-esta-es-la-respuesta.jpg" alt="Espacio" />
                    </div>
                }
            </div>
            
        </div>
    )
}
