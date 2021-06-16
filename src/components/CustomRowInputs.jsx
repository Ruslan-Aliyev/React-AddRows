import React, { useState } from "react";

const CustomRowInputs = (props) => {
	if (props.data) 
	{
		return (
			<tr>
				<td>
					<input name="f1" id="f1" defaultValue={props.data.f1} onChange={(e) => {props.update(props.index, e.target.name, e.target.value)}} />
				</td>
				<td>
					<select name="f2" id="f2" defaultValue={props.data.f2 ? props.data.f2 : ""} onChange={(e) => {props.update(props.index, e.target.name, e.target.value)}} >
						<option value="f2a">f2a</option>
						<option value="f2b">f2b</option>
						<option value="f2c">f2c</option>
					</select>
				</td>
				<td>
					<fieldset id="radiogroup" onChange={(e) => {props.update(props.index, e.target.name, e.target.value)}}>
						<input type="radio" id="f3a" name="f3a" value="f3a" defaultChecked={props.data.f3 === "f3a"} name="radiogroup" />
						<input type="radio" id="f3b" name="f3b" value="f3b" defaultChecked={props.data.f3 === "f3b"} name="radiogroup" />
					</fieldset>
				</td>
				<td>
					<button onClick={() => props.remove(props.index)} >Remove</button>
				</td>
			</tr>
		);
	} 
	else 
	{
		return "";
	}
}

export default CustomRowInputs;
