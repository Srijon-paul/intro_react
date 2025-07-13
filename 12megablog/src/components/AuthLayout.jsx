import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Protection({children, authentication = true}) {
	const navigate = useNavigate();
	const [loader, setLoader] = useState(true);
	const authStatus = useSelector(state => state.auth.status);

	useEffect(() => {
		// it can be made more easier by simply using authStatus and checking based on its boolean value

		if(authentication && authStatus !== authentication){
			navigate("/login")
		} else if(!authentication && authStatus !== authentication){
			navigate("/")
		}
		setLoader(false)
	}, [authStatus, navigate, authentication])

	return loader? <h1>Loading...</h1> : <>{children}</>
}