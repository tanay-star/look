import React from 'react'
//importing mui components
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  makeStyles,
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'

const useStyles = makeStyles({
  root: {
    minWidth: 175,
    cursor: 'pointer',
    margin: 50,
    borderRadius: 7,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 14,
  },
})

const Note = ({ title, body, id, date, deleteNote, updateNote }) => {
  const classes = useStyles()

  const handleClick = () => {
    deleteNote(id)
  }
  const handleEdit = () => {
    updateNote(id)
  }
  return (
    <Card className={classes.root} raised={true}>
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          {title}
        </Typography>
        <Typography className={classes.body} gutterBottom>
          {body}
        </Typography>
        <Typography gutterBottom>{date.toDateString()}</Typography>
      </CardContent>

      <CardActions>
        <DeleteIcon onClick={handleClick} color="secondary" />
        <EditIcon color="secondary" onClick={handleEdit} />
      </CardActions>
    </Card>
  )
}

export default Note
