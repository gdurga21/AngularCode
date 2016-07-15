import React from 'react';
import ReactDom from 'react-dom';
class App extends React.Component{
	render(){
		let txt = this.props.txt;
		return <h1>{txt}</h1> 
			
	}
}

App.propTypes = {
	txt: React.propTypes.string,
	cat: React.propTypes.number.isRequired
}

App.defaultProps = {
	txt: 'this is default txt'
}

ReactDom.render(
	<App cat={5}/>,
	document.getElementById('app')
);

