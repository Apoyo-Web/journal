import { collection,getDocs,query } from "@firebase/firestore"
import { db } from "../firebase/firebaseConfig"



export const loadNotes = async(uid) => {

    const notesSanp = await getDocs(query(collection(db, `${uid}/journal/notes`)));
    const notes=[]

    notesSanp.forEach(snapHijo => {
        notes.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
        
    });
    console.log(notes)
    return notes;
    
}