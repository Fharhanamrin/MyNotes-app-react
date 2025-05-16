import Header from "./Header";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import NoteListArchive from "./NoteListArchive";
import { getInitialData } from "../utils";
import React, { useState, useEffect } from "react";

function MyNotesApp() {
  const [MyList, setMyList] = useState([]);
  useEffect(() => {
    let data = getInitialData();
    setMyList(data);
  },[]);
  return (
    <div className="my-notes-app">
      <Header />
      <NoteForm />
      <NoteList mylist={MyList}/>
      <NoteListArchive />
    </div>
  );
}
export default MyNotesApp;
