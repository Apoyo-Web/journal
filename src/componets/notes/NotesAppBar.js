import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { startSaveNote, startUpLoading } from '../../actions/notes'
import moment from 'moment'
import 'moment/locale/es'

export const NotesAppBar = () => {
    
    const dispatch = useDispatch()
    const { active: note } = useSelector(state => state.notes)
    const noteDate = moment(note.date).locale('es')
    const fileSelector = useRef(null)

    const handleSave = () => {
        dispatch(startSaveNote(note))
    }

    const handlePictureClick = () => {
       fileSelector.current.click()
    }
    const handleFileChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            dispatch(startUpLoading(file))
        }
    }
    return (
        <div className="notes__appbar">
            <span>{noteDate.format('dddd D MMMM')}</span>
            <input type="file" style={{display: "none"}} onChange={handleFileChange} ref={fileSelector} />
            <div>
                <button className="btn" onClick={handlePictureClick}>
                    Picture
                </button>
                <button className="btn" onClick={handleSave}>
                    Save
                </button>
            </div>
            
        </div>
    )
}
