import Header from "./Header";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import NoteListArchive from "./NoteListArchive";
import EmptyState from "./EmptyState";
import { getInitialData } from "../utils";
import React from "react";

class MyNotesApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      MyList: [],
      noteTitle: '',
      noteContent: '',
      counter: 50,
      remaining: 50,
      archivedCount:0,
      unarchivedCount:0
    };

    this.handleNoteTitleChange = this.handleNoteTitleChange.bind(this);
    this.handleNoteContentChange = this.handleNoteContentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const data = getInitialData();
    this.setState({ MyList: data });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.MyList !== this.state.MyList) {
      const archivedCount = this.state.MyList.filter(note => note.archived).length;
      const unarchivedCount = this.state.MyList.filter(note => !note.archived).length;
      this.setState(prevState => ({
        ...prevState,
        archivedCount: archivedCount, 
        unarchivedCount: unarchivedCount 
      }));
    }

  }

  addNote = (newNote) => {
    this.setState(prevState => ({
      MyList: [...prevState.MyList, newNote]
    }));
  };


  handleNoteTitleChange(event) {
    const remaining = this.state.counter - event.target.value.length;
    if (remaining < 0) {
      alert('Judul terlalu panjang');
      return;
    }

    this.setState({ noteTitle: event.target.value, remaining: remaining });
  }

  handleNoteContentChange(event) {
    this.setState({ noteContent: event.target.value });
  }

  handleDeleteNote = (id) => {
    const newNotes = this.state.MyList.filter((note) => note.id !== id);
    this.setState({ MyList: newNotes });
  };

  handleArchiveNote = (id) => {
    const newNotes = this.state.MyList.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          archived: true
        };
      }
      return note;
    })
    this.setState({ MyList: newNotes });
  }

  handleUnarchiveNote = (id) => {
    const newNotes = this.state.MyList.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          archived: false
        };
      }
      return note;
    })
    this.setState({ MyList: newNotes });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.state.noteTitle === '') {
      alert('Judul tidak boleh kosong');
      return;
    }

    if (this.state.noteTitle.length > 50) {
      alert('Judul terlalu panjang');
      return;
    }

    if (this.state.noteContent === '') {
      alert('Isi Note tidak boleh kosong');
      return;
    }

    this.addNote({
      id: +new Date(),
      title: this.state.noteTitle,
      body: this.state.noteContent,
      createdAt: new Date().toISOString(),
      archived: false
    });

    this.setState({
      noteTitle: '',
      noteContent: ''
    });
  }



  render() {
    return (
      <div className="my-notes-app">
        <Header />
        <NoteForm
          noteTitle={this.state.noteTitle}
          noteContent={this.state.noteContent}
          remaining={this.state.remaining}
          counter={this.state.counter}
          handleSubmit={this.handleSubmit}
          handleNoteTitleChange={this.handleNoteTitleChange}
          handleNoteContentChange={this.handleNoteContentChange}
        />
        {
          this.state.unarchivedCount === 0 && (
            <EmptyState />
          )
        }
        {
          this.state.unarchivedCount > 0 && (
            <NoteList 
              mylist={this.state.MyList}
              handleDeleteNote={this.handleDeleteNote}
              handleArchiveNote={this.handleArchiveNote}
              handleUnarchiveNote={this.handleUnarchiveNote}
            />
          )
        }
       <div className="container">
          <h1 className='note-group'>Note List Archive</h1>
          {
            this.state.archivedCount === 0 && (
              <EmptyState />
            )
          }
        {
          this.state.archivedCount > 0 && (
            <NoteListArchive
              mylist={this.state.MyList}
              handleDeleteNote={this.handleDeleteNote}
              handleArchiveNote={this.handleArchiveNote}
              handleUnarchiveNote={this.handleUnarchiveNote}
            />
          )
        }
       </div>
        
      </div>
    );
  }
}

export default MyNotesApp;
