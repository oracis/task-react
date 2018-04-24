import React from "react";

export default class ComponentByReactPureComponent extends React.PureComponent {
	constructor(props){
		super(props);
	}
	
	render(){
		return (<h1>Hello React Pure Component</h1>)
	}
}