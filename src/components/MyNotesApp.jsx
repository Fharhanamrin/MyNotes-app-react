import Header from './Header';
import NoteForm from './NoteForm';
import NoteList from './NoteList';
import EmptyState from './EmptyState';


function MyNotesApp() {
    return (
        <div className="my-notes-app">
            <Header />
            <NoteForm/>
            <NoteList/>
            <EmptyState />

        </div>
    )
}
export default MyNotesApp;