import React from "react";
import ReactDOM from "react-dom";
import ComponentByReactComponent from "./components/ComponentByReactComponent";
import HelloElement from "./components/ComponentByReactElement";
import HelloMessage from "./components/ComponentByFunction";
import ComponentByReactPureComponent from "./components/ComponentByReactPureComponent";

let modals = (
	<div>
		<ComponentByReactComponent />
		<HelloElement />
		<HelloMessage name="Function" />
		<ComponentByReactPureComponent />
	</div>
);

ReactDOM.render(
	modals,
	document.body
);