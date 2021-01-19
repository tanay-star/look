import logo from './logo.svg'
import './App.css'
import { useState } from 'react'
//importing components
import Header from './components/Header'
import CreateArea from './components/CreateArea/CreateArea'
import NoteList from './components/NoteList'

function App() {
  const [notes, setNotes] = useState([])
  const [sort, setSort] = useState('')
  const [noteToEdit, setNoteToEdit] = useState({
    id: 0,
    title: '',
    body: '',
    date: new Date(),
  })
  const [edit, setEdit] = useState(false)

  const addNote = (newNote) => {
    setNotes([...notes, newNote])
  }
  const handleSort = (e) => {
    console.log(e.target.value)
    setSort(e.target.value)
  }
  const sortedNotes = notes.sort((a, b) => {
    if (sort === 'Newest') {
      return b.id - a.id
    } else if (sort === 'Oldest') {
      return a.id - b.id
    } else {
      return notes
    }
  })

  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((note) => {
        return note.id !== id
      })
    })
  }

  const updateNote = (id) => {
    console.log('id:', id)

    let noteToBeEdited = notes.find((note) => {
      return note.id === id
    })

    setNoteToEdit(noteToBeEdited)
    setEdit(true)
  }

  // if (edit) {
  //   return (
  //     <div>
  //       <h1>Edit form</h1>
  //       <CreateArea />
  //     </div>
  //   )
  // }

  return (
    <div className="App">
      <Header />
      <CreateArea addNote={addNote} handleSort={handleSort} />
      <NoteList
        notes={sortedNotes}
        deleteNote={deleteNote}
        updateNote={updateNote}
        edit={edit}
        noteToEdit={noteToEdit}
        addNote={addNote}
      />
    </div>
  )
}

export default App
