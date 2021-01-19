import React, { useState } from 'react'

const EditForm = ({ addNote, noteToEdit }) => {
  const [note, setNote] = useState(noteToEdit)

  const handleChange = (e) => {
    const { name, value } = e.target
    setNote({ ...note, id: new Date().getTime(), [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addNote(note)
    setNote({ id: 0, title: '', body: '', date: new Date() })
  }
  return (
    <div>
      <form>
        <input
          placeholder="Edit Title"
          value={note.title}
          name="title"
          onChange={handleChange}
        />
        <textarea
          rows="3"
          placeholder="Edit text...."
          value={note.body}
          name="body"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Edit</button>
      </form>
    </div>
  )
}

export default EditForm
