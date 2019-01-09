import React, { Component } from 'react';
import { database } from './firebase';
import _ from 'lodash';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: '',
      notes: {}
    };

    this.onHandleChange = this.onHandleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  onHandleChange(e) {
    this.setState({[e.target.name]: e.target.value })
  }
  
  onSubmit(e){
    e.preventDefault();
    const note = {
      title: this.state.title,
      body: this.state.body
    };
    database.push(note);
    
    this.setState({
      title: '',
      body: '',
     
    })
  }
  
  componentDidMount() {
    database.on('value', (snapshot) => {
      this.setState({notes: snapshot.val()})
    })
  }

  renderNotes = () => {
    return (_.map(this.state.notes, (note, key) =>  (
        <div key={key}>
          <h3>{note.title}</h3>
          <h4>{note.body}</h4>
        </div>
      )
    ))
  }

  render() {
    return (
      <div className='container-fluid' >
        <div className='row'>
          <div className='col-sm-6 col-sm-offset-3'>
            <form onSubmit={this.onSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  name='title'
                  className='form-control no-border'
                  placeholder='Title....'
                  required 
                  onChange={this.onHandleChange}
                  value={this.state.title}
                />
              </div>
              <div className='form-group'>
                <textarea
                  type='text'
                  name='body'
                  className='form-control no-border'
                  placeholder='Body....'
                  required 
                  onChange={this.onHandleChange}
                  value={this.state.body}
                />
              </div>
              <div className='form-group'>
                <button className='btn btn-primary col-sm-12' >Save</button>
              </div>
              {this.renderNotes()}
            </form>
           
          </div>
        </div>  
      </div>

    );
  }
}

export default App;
