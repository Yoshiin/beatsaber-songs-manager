import React from "react";
import { Button, TextField } from "@mui/material";
import { app } from 'electron';

export default class Main extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			path: '',
		};
		this.handlePathSelect = this.handlePathSelect.bind(this);
	}

	handlePathSelect(event) {
		console.error(event.target.value);
		console.error(event);
	}

	render() {
		//const store = window.electron.store;
		let test = (
			<>
				<TextField id="outlined-basic" label="Outlined" variant="outlined" disabled value={this.state.path} />
				<Button variant="contained" component="label">
					Upload
					<input hidden directory="" webkitdirectory="" type="file" onChange={this.handlePathSelect} />
				</Button>
			</>
		);
		return (test);
	}
}
