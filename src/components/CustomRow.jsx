import React, { useState } from "react";

const CustomRow = (props) => {
	if (props.data) 
	{
		return (
			<tr>
				<td>{props.data.f1}</td>
				<td>{props.data.f2}</td>
				<td>{props.data.f3}</td>
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

export default CustomRow;
