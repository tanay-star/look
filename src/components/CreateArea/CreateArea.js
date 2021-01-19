import React, { useState } from 'react'
import './CreateArea.css'
//importing mui components
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'

const CreateArea = ({ addNote, handleSort }) => {
  const [note, setNote] = useState({
    id: 0,
    title: '',
    body: '',
    date: new Date(),
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setNote({ ...note, id: new Date().getTime(), [name]: value })
  }

  const convertToDefEventPara = (name, value) => ({
    target: {
      name,
      value,
    },
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    addNote(note)
    setNote({ id: 0, title: '', body: '', date: new Date() })
  }

  return (
    <div>
      <form>
        <input
          name="title"
          value={note.title}
          placeholder="Title"
          onChange={handleChange}
        />
        <textarea
          name="body"
          value={note.body}
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange}
        />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MMM/dd/yyyy"
            name="date"
            value={note.date}
            onChange={(date) =>
              handleChange(convertToDefEventPara('date', date))
            }
          />
        </MuiPickersUtilsProvider>
        <button onClick={handleSubmit}>ADD</button>
      </form>
      <select defaultValue="Sort" onChange={handleSort}>
        <option disabled value="Sort">
          Sort
        </option>
        <option value="Newest">Newest</option>
        <option value="Oldest">Oldest</option>
      </select>
    </div>
  )
}

export default CreateArea
