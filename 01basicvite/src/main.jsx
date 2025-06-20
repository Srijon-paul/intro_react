import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const reactElement = {
	type: 'a',
	props: {
		href: "https://google.com",
		target: "_blank"
	},
	Children: "Click me to visit Google"
}

const AnotherElement = (
    <a href="https://google.com" target="_blank">click to visit google</a>
)

function myApp(){
    return(
        <div>
            <h1>hey this is me!!</h1>
        </div>
    )
}

// this is how react element is created
const AreactElement = React.createElement(
    'a',
    {href: "https://google.com", target: "_blank"},
    'visit google'
);

createRoot(document.getElementById('root')).render(
    // myApp() // this will call and run the function here but if saved with jsx in app.jsx then we need to call like <App/>

    // reactElement // this will not directly work in react if we declare the object name like that as react doessn't understand our code language so we make a react element and then run.

    // AnotherElement // this will run usual variable as stored html elements inside it.

    // AreactElement // this will run the react element

    <App/>
)
