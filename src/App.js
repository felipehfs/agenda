import React, { Component } from 'react';
import { Grid, Button, InputBase } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import GenericTable from './components/GenericTable'
import ContactDialog from './components/modals/ContactDialog'
import withNull from './components/withNull'

import './App.css';

const styles = {
  root: {
    padding: '2px 4px',
    alignItems: 'center',
    display: 'flex'
  },
  input: {
    flex: 1,
    marginLeft: 18
  }
}

const contacts = [{
  id: Date.now(),
  name: "Felipe",
  email: "felipehfsz@gmail.com"
}, {
  id: Date.now() + 1,
  name: "Marcos",
  email: "marcosrosa@gmail.com"
}]

const GenericTableWithNull = withNull(GenericTable, props => props.rows.length == 0)

class App extends Component {

  state = {
    contacts: [],
    open: false,
    search: '',
    email: '',
    name: '',
    id: null
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };


  handleSave = () => {
    const { email, name, contacts, id } = this.state
    if (!name || !email) return
    const newContact = { open: false, email, name, id: Date.now() }
    if (!id) {
      this.setState({ ...this.state, open: false, email: '', name: '', id: null, contacts: [...contacts, newContact] });
    } else {
      const updatedList = contacts.map(row => row.id === id ? newContact : row)
      this.setState({ ...this.state, open: false, email: '', name: '', id: null, contacts: updatedList });
    }
  };

  handleClose = () => {
    this.setState({
      open: false, email: '',
      name: '',
      id: null
    });

  }
  handleOnChange = e => {
    const { name, value } = e.target
    this.setState({ ...this.state, [name]: value })
  }
  handleUpdate = row => {
    this.setState({
      open: true,
      email: row.email,
      id: row.id,
      name: row.name
    })
  }
  onRemove = id => {
    const { contacts } = this.state
    const index = contacts.findIndex(el => el.id === id)
    contacts.splice(index, 1)
    this.setState({ ...this.state, contacts })
  }

  getFilteredTable = () => {
    const { search } = this.state
    return this.state.contacts.filter(row => new RegExp(search, 'i').test(row.name))
  }
  render() {
    const { classes } = this.props
    return (
      <div className="App">
        <Grid container>
          <Grid item xs={12}>
            <InputBase placeholder="Digite o nome para busca" name="search" onChange={this.handleOnChange} value={this.state.search} />
          </Grid>
          <Grid item xs={12}>
            <ContactDialog
              handleSave={this.handleSave}
              handleClickOpen={this.handleClickOpen}
              handleOnChange={this.handleOnChange}
              handleClose={this.handleClose}
              open={this.state.open}
              email={this.state.email}
              id={this.state.id}
              name={this.state.name} />
          </Grid>
          <Grid item xs={12}>
            <GenericTableWithNull rows={this.getFilteredTable()}
              onUpdate={this.handleUpdate}
              onRemove={this.onRemove} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(App);
