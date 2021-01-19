import React from 'react'
//importing mui components
import { Grid } from '@material-ui/core'
//importing components
import Note from './Note'
import EditForm from './EditForm'

const NoteList = ({
  notes,
  deleteNote,
  updateNote,
  edit,
  noteToEdit,
  addNote,
}) => {
  return (
    <Grid container alignItems="center">
      {notes.map((note, index) => {
        return (
          <Grid key={index} item md={3}>
            {edit ? (
              <EditForm noteToEdit={noteToEdit} addNote={addNote} />
            ) : (
              <Note
                title={note.title}
                body={note.body}
                id={note.id}
                date={note.date}
                deleteNote={deleteNote}
                updateNote={updateNote}
              />
            )}
          </Grid>
        )
      })}
    </Grid>
  )
}

export default NoteList
