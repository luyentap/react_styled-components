import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

const List = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
`;

const Product = styled.div`
	height: 100px;
	background-color: darkkhaki;
	border: solid 1px green;
`;

//truyen props
const Title = styled.h2`
	color: ${props => props.color};
`;

//extend Product Component, can extend Component isn't styled component
const ProductSpecial = styled(Product)`
	background: black;
`;

class App extends React.Component {
	render = () => {
		return (
			<div className="App">
				<h1>Hello CodeSandbox</h1>
				<h2>Start editing to see some magic happen!</h2>
				<Title color="blue">list product</Title>
				<List>
					{/* use class bootstrap */}
					<Product className="bg-primary">day la product</Product>
					<Product />
					<ProductSpecial />
					<Product />
					<Product />
					<Product />
					<Product />
					<Product />
					<Product />
					<Product />
				</List>
			</div>
		);
	};
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
