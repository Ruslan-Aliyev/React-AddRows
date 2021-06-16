import React, { useState } from "react";
import CustomRowInputs from "./CustomRowInputs";

const AddOneComplexAndKeepData = () => {
  const [state, setState] = useState({
    rows: []
  });

  const save = () => {
    var rows = state.rows;

    console.dir(rows);
  };

  const addRow = () => {
    var rows = state.rows;
    rows.push({
      'f1' : '',
      'f2' : '',
      'f3' : '',
    });
    setState({rows: rows});
  };

  const removeRow = (index) => {
    var rows = state.rows;
    rows.splice(index, 1);
    setState({rows: rows});
  };

  const update = (i, f, v) => {
    var rows = state.rows;
    rows[i][f] = v;
    setState({rows: rows});
  };

  return (
    <div>
        <table>
            {state.rows.map((r, i) => (
              <CustomRowInputs data={r} index={i} remove={removeRow} update={update} />
            ))}
        </table>
        <button id="addBtn" onClick={addRow}>ADD</button>
        <button id="addBtn" onClick={save}>SAVE</button>
    </div>
  );
}

export default AddOneComplexAndKeepData;
