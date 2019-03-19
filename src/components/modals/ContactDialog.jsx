import React, { Component} from 'react'
import { Button, Dialog, DialogActions, DialogContent, IconButton, TextField, DialogTitle } from '@material-ui/core'
import AddBox from '@material-ui/icons/AddBox'

class ContactDialog extends Component {
      render() {
        const { name, email, id } = this.props
        return (
          <div>
            <IconButton color="primary" onClick={this.props.handleClickOpen}>
              <AddBox fontSize="large" />
            </IconButton>
            <Dialog
              fullWidth
              maxWidth="sm"
              open={this.props.open}
              onClose={this.props.handleClose}
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle id="form-dialog-title">{id ? "Editar contato":"Novo contato"}</DialogTitle>
              <DialogContent>
              <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  value={this.props.name}
                  label="Nome"
                  onChange={this.props.handleOnChange}
                  name="name"
                  type="text"
                  fullWidth
                />
               
                <TextField
                  margin="dense"
                  id="email"
                  name="email"
                  onChange={this.props.handleOnChange}
                  value={this.props.email}
                  label="Email Address"
                  type="email"
                  fullWidth
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={this.props.handleClose} color="primary">
                  Cancel
                </Button>
                <Button onClick={this.props.handleSave} color="primary">
                  Save
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        );
      }
}

export default ContactDialog