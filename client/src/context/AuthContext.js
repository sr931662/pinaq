// context/AuthContext.jsx
import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Store token in local storage and state
    const storeToken = (serverToken) => {
        setToken(serverToken);
        localStorage.setItem("token", serverToken);
    };

    // Check if user is logged in
    const isLoggedIn = !!token;

    // Logout function
    const logoutUser = () => {
        setToken("");
        setUser(null);
        localStorage.removeItem("token");
        localStorage.removeItem("userData");
    };

    // Fetch user data
    const userAuthentication = async () => {
        try {
            const response = await fetch("http://localhost:3005/api/auth/user", {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (response.ok) {
                const data = await response.json();
                setUser(data.user);
                localStorage.setItem("userData", JSON.stringify(data.user));
            } else {
                console.error("Error fetching user data");
                logoutUser();
            }
        } catch (error) {
            console.error("Authentication error:", error);
            logoutUser();
        } finally {
            setLoading(false);
        }
    };

    // Check for existing token on mount
    useEffect(() => {
        if (token) {
            userAuthentication();
        } else {
            setLoading(false);
        }
    }, [token]);

    // Context value
    const contextValue = {
        isLoggedIn,
        token,
        user,
        loading,
        storeToken,
        logoutUser
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};