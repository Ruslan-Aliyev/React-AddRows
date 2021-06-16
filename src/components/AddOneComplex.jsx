import React, { useState } from "react";
import CustomRow from "./CustomRow";

const AddOneComplex = () => {
  const [state, setState] = useState({
    rows: [
      {
        'f1' : 'aaa',
        'f2' : 'aaa',
        'f3' : 'aaa',
      },
      {
        'f1' : 'bbb',
        'f2' : 'bbb',
        'f3' : 'bbb',
      },
    ]
  });

  const addRow = () => {
    var rows = state.rows;
    rows.push({
      'f1' : 'ccc',
      'f2' : 'ccc',
      'f3' : 'ccc',
    });
    setState({rows: rows});
  };

  const removeRow = (index) => {
    var rows = state.rows;
    rows.splice(index, 1);
    setState({rows: rows});
  };

  return (
    <div>
        <table>
            {state.rows.map((r, i) => (
              <CustomRow data={r} index={i} remove={removeRow} />
            ))}
        </table>
        <button id="addBtn" onClick={addRow}>ADD</button>
    </div>
  );
}

export default AddOneComplex;
