import {NoteTitle} from "./NoteTitle";

const React = require("react");

export const NoteLink = ({note, onOpenNote}) => (
    <li className="note-list-item">
        <a href="#" onClick={() => onOpenNote(note.id)}>
            <NoteTitle note={note}/>
        </a>
    </li>
);
