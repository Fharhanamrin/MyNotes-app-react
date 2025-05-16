import NoteCardItem from './NoteCardItem';
function NoteListArchive() {
    return (
        <div className='container'>
            <h1 className='note-group'>Note List Archive</h1>
            <div style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: '1rem',
                padding: '1rem',
            }}>
               <NoteCardItem title="Meeting Tim Proyek" date="15 Mei 2025" description="Diskusi pembagian tugas dan deadline sprint minggu ini."/>
               <NoteCardItem title="Presentasi Client" date="20 Mei 2025" description="Persiapan materi dan demo aplikasi untuk client meeting."/>
               <NoteCardItem title="Review Code" date="25 Mei 2025" description="Code review sprint terakhir dan diskusi improvement."/>
               <NoteCardItem title="Training React" date="30 Mei 2025" description="Sesi pembelajaran React hooks dan best practices."/>
               <NoteCardItem title="Training React" date="30 Mei 2025" description="Sesi pembelajaran React hooks dan best practices."/>
               <NoteCardItem title="Training React" date="30 Mei 2025" description="Sesi pembelajaran React hooks dan best practices."/>
               
            </div>
        </div>
    );
}

export default NoteListArchive;