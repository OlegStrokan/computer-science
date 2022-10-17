const React = require("react");

export const NoteEditor = ({note, onChangeNote, onCloseNote}) => (
    <div>
        <div>
      <textarea
          className="editor-content"
          autoFocus
          value={note.content}
          onChange={event =>
              onChangeNote(note.id, event.target.value)
          }
      />
        </div>
        <button className="editor-button" onClick={onCloseNote}>
            Add
        </button>
        <button className="editor-button" onClick={onCloseNote}>
            Close
        </button>
    </div>
);
