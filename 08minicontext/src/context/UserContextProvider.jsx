import React, { useState } from "react";
import UserContext from "./UserContext";

// UserContextProvider is a React component that provides user state to its children
const UserContextProvider = ({ children }) => { // children: React nodes/components passed between the opening and closing tags of this provider
	const [user, setUser] = useState(null); // useState: React hook for state management, initializes 'user' as null
	return (
		<UserContext.Provider value={{ user, setUser }}> {/* UserContext.Provider: Makes 'user' and 'setUser' available to all child components */}
			{children} {/* Renders any nested components inside the provider */}
		</UserContext.Provider>
	)
}

export default UserContextProvider;