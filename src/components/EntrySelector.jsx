import '../styles/EntrySelector.css';

function EntrySelector({
    entries,
    selectedIndex,
    setSelectedIndex,
    deleteEntry,
    selectLabelText,
    displayField
}) {
    return (
        <>

        {entries.length > 0 && (
            <div className="entry-selector">
                <label>{selectLabelText}: </label>
                <select
                    value={selectedIndex}
                    onChange={(e) => setSelectedIndex(Number(e.target.value))}
                >
                    {entries.map((entry, index) => (
                        <option key={entry.id} value={index}>
                            {entry[displayField] || `Entry ${index + 1}`}
                        </option>
                    ))}
                </select>
                <button
                    onClick={() => deleteEntry(selectedIndex)}
                    className="delete-button"
                    disabled={entries.length <= 1}
                >
                    Delete
                </button>
            </div>
        )}
        </>
    );
}

export default EntrySelector;
