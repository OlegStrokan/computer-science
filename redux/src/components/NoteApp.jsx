import {NoteList} from "./NoteList";
import {NoteEditor} from "./NoteEditor";

const React = require("react");

export const NoteApp = ({ isLoading, notes, openNoteId, onAddNote, onChangeNote, onOpenNote, onCloseNote }) => (
    <div>
        {
            openNoteId ?
                <NoteEditor
                    note={notes[openNoteId]}
                    onChangeNote={onChangeNote}
                    onCloseNote={onCloseNote}
                /> :
                <div>
                    <NoteList
                        notes={notes}
                        onOpenNote={onOpenNote}
                    />
                    <button
                        className="editor-button"
                        onClick={onAddNote}
                    >
                        {isLoading ? 'Loading...' : 'New Note'}
                    </button>
                </div>
        }
    </div>
);
