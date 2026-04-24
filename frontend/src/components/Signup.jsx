import React, { useState } from 'react'
import { signupStyles } from '../assets/dummyStyles'
import { useNavigate } from 'react-router-dom';

const Signup = ({ API_URL = 'http://localhost:4000', onSignup }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [errors, setErrors] = useState({});
    // errors is a state variable that stores multiple error messages as an object - one for each form field
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    // to fetch profile
    const fetchProfile = async (token) => {
        if (!token) return null;
        const res = await axios.get(`${API_URL}/api/user/me`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return res.data;
    };

    const persistAuth = (profile, token) => {
        const storage = rememberMe ? localStorage : sessionStorage;
        try {
            if (token) storage.setItem("token", token)
            if (profile) storage.setItem("user", JSON.stringify(profile))
        } catch (err) {
            console.error("Storage Error:", err)
        }
    };

    // to validate that all fields are filled by user or not
    const validateForm = () => {
        const newErrors = {};

        if (!name.trim()) {
            newErrors.name = "Name is required";
        }
        if (!email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Email is invalid";
        }
        if (!password) {
            newErrors.password = "Password is required";
        } else if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
        // This checks if there are any errors and returns true or false.
    };

    return (
        <div>
            sign up
        </div>
    )
}

export default Signup
