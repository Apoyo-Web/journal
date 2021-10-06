import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeNote, startDeletingNote } from '../../actions/notes'
import { useForm } from '../../hooks/useForm'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {

    const { active: note } = useSelector(state => state.notes)
    const [formValues, handleInputChange, reset] = useForm(note)
    const { body, title } = formValues;
    const activeId = useRef(note.id)
    const dispatch = useDispatch()
    
    useEffect(() => {
        if (note.id !== activeId.current) {
            reset(note)
            activeId.current = note.id
        }

        
    }, [note, reset])


    useEffect(() => {

        dispatch(activeNote(formValues.id,{...formValues}))
       
    }, [formValues, dispatch])
    
    const handleDelete = () => {
        dispatch(startDeletingNote(note.id))
    }
    
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
                    name="title"

                />

                <textarea

                    placeholder="What happened today"
                    className="notes__textarea"
                    value={body}
                    onChange={handleInputChange}
                    name="body"
                
                >

                </textarea>
                {
                    (note.url) &&
                    <div className="note__image">
                        <img src={note.url} alt={title} />
                    </div>
                }
            </div>
            
            <button className="btn btn-danger" onClick={handleDelete}> Delete </button>

        </div>
    )
}
