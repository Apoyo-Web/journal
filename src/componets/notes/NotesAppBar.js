import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { startSaveNote } from '../../actions/notes'
import moment from 'moment'
import 'moment/locale/es'

export const NotesAppBar = () => {
    
    const dispatch = useDispatch()
    const { active: note } = useSelector(state => state.notes)
    const noteDate = moment(note.date).locale('es')

    const handleSave = () => {
        dispatch(startSaveNote(note))
    }
    return (
        <div className="notes__appbar">
            <span>{ noteDate.format('dddd D MMMM')}</span>
            <div>
                <button className="btn">
                    Picture
                </button>
                <button className="btn" onClick={handleSave}>
                    Save
                </button>
            </div>
            
        </div>
    )
}
