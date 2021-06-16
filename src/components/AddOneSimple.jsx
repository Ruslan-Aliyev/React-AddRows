import React, { useState } from "react";

const AddOneSimple = () => {
  const [state, setState] = useState({
    rows: ['row 1', 'row 2', 'row 3']
  });

  const addRow = () => {
    var rows = state.rows;
    rows.push('new row');
    setState({rows: rows});
  };

  return (
    <div>
        <table>
            {state.rows.map((r) => (
              <tr>
                  <td>{r}</td>
              </tr>
            ))}
        </table>
        <button id="addBtn" onClick={addRow}>ADD</button>
    </div>
  );
}

export default AddOneSimple;

// https://stackoverflow.com/questions/36757889/add-row-on-button-press-react
// https://stackoverflow.com/questions/46278485/how-to-add-row-to-a-table-using-reactjs-on-button-click/46278894
