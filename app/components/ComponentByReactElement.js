import React from "react";

class HelloElement extends React.Component {
	render() {
		return React.createElement("h1", null, "Hello Element");
	}
}

export default HelloElement;