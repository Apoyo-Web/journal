import React from 'react'
import { NoteScreen } from '../notes/NoteScreen'
// import { NothingSlected } from './NothingSlected'
import { Sidebar } from './Sidebar'

export const JournalScreen = () => {
    return (
        <div className="journal__main-content">
            <Sidebar />

            <main>
                {/* <NothingSlected /> */}
                <NoteScreen />
            </main>
        </div>
    )
}
