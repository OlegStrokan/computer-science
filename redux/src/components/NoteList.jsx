import {NoteLink} from "./NoteLink";

const React = require("react");

export const NoteList = ({notes, onOpenNote}) => (
    <ul className="note-list">
        {
            Object.keys(notes).map(id =>
                <NoteLink
                    key={id}
                    note={notes[id]}
                    onOpenNote={onOpenNote}
                />
            )
        }
    </ul>
);
