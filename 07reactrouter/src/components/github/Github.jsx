import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

// useLoaderData is a React Router hook that allows you to access data loaded by a route loader.
// In this component, you should call useLoaderData() to get the data fetched by githubInfoLoader.


// const [data, setData] = useState([]);
// useEffect(() => {
	// 	fetch("https://api.github.com/users/hiteshchoudhary")
	// 	.then((response) => response.json())
	// 	.then(data => {
		// 		console.log(data);
		// 		setData(data);
		// 	})
		// }, []);

function Github() {
	// Example:
	const data = useLoaderData();
  return (
	<div className='bg-gray-500 text-white m-4 p-4 text-center text-3xl'>Github followers: {data.followers}</div>
  )
}

export default Github

export const githubInfoLoader = async() => {
	const response = await fetch ("https://api.github.com/users/srijon-paul");
	return response.json();
}