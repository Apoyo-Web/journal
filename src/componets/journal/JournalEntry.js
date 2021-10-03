import React from 'react'
import moment from 'moment'
import 'moment/locale/es'
import { useDispatch } from 'react-redux'
import { activeNote } from '../../actions/notes'

export const JournalEntry = ({ id, date, title, body, url }) => {
    const noteDate = moment(date).locale('es')
    const dispatch = useDispatch()
    const handleEntryClick = () => {
        
        dispatch(activeNote(id, {date,title,body,url}))
    }
    
    return (
        <div className="journal__entry pointer" onClick={handleEntryClick}>
            {
                url &&
                <div className="journal__entry-pictures" style={
                    {
                        backgroundSize: 'cover',
                        backgroundImage: `url(${url})`
                    }}>



                </div>
            }
            <div className="journal__entry-body">
                <p className="journal__entry-tittle"> {title }</p>
                <p className="journal__entry-content">{body}</p>
            </div>

            <div className="journal__entry-date-box">
                <span>{noteDate.format('dddd') }</span>
                <h4>{noteDate.format('L') }</h4>
            </div>
            
        </div>
    )
}
