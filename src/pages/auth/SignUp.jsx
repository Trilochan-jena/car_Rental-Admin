import React, { useState} from 'react';
import "../../styles/signup.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { NavLink, useNavigate } from 'react-router-dom';
import Admin from "../../assets/images/Admin.jpg";
import storage from '../../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useDispatch } from 'react-redux';
import { userSignUp } from '../../action/authaction/authaction';

const SignUp = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false);
    const [data, setData] = useState({
        name: "",
        image: "",
        email: "",
        password: ""
    });
    const [tableimg, setTableImg] = useState();
    const [fileimg, setFileImg] = useState();

    const handlePasswordToggle = () => {
        setShowPassword(!showPassword);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSaveAdminData = async (event) => {
        event.preventDefault();

        try {
            const storageRef = ref(storage, `carRentt/${fileimg.name}`);
            const snapshot = await uploadBytes(storageRef, fileimg);
            const downloadURL = await getDownloadURL(snapshot.ref);

            console.log("Image uploaded successfully. Download URL:", downloadURL);
            dispatch(userSignUp({...data, image: downloadURL, navigate}))
              
            setData({
                name: "",
                image: "",
                email: "",
                password: ""
            });
        } catch (error) {
            console.error("Error uploading image:", error);
        }
    };

    const MAX_FILE_SIZE_KB = 300;

    
    const handleImageChange = (event) => {
        const file = event.target.files[0];

        if (!file) {
            alert("No file selected");
            return;
        }

        const fileSizeKB = file.size / 1024;
        if (fileSizeKB > MAX_FILE_SIZE_KB) {
            alert(`File size exceeds maximum limit of ${MAX_FILE_SIZE_KB} KB`);
            return;
        }

        const reader = new FileReader();
        reader.onload = () => {
            const imageData = reader.result;
            setTableImg(imageData);
            setFileImg(file);
            event.target.value = null;
        };

        reader.onerror = (error) => {
            console.error("File reading failed:", error);
        };

        reader.readAsDataURL(file);
    };

    return (
        <div className='wrapper'>
            <div className="signup">
                <h2>Sign Up</h2>
            </div>
            <form className='container' onSubmit={handleSaveAdminData}>
                <label>
                    {tableimg ? <img src={tableimg} alt="Profile" /> : <img src={data.image || Admin} alt="Profile" />}
                    <input
                        type="file"
                        id="firm-image"
                        name="firm-image"
                        className='input_image'
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                </label>
                <label htmlFor='name' className="label">Name</label>
                <input
                    type="text"
                    id='name'
                    placeholder="Name"
                    className="input"
                    name='name'
                    value={data.name}
                    onChange={handleChange}
                />
                <label htmlFor='email' className="label">Email</label>
                <input
                    type="email"
                    id='email'
                    placeholder="Email"
                    className="input"
                    name='email'
                    value={data.email}
                    onChange={handleChange}
                />
                <label htmlFor='password' className='label'>Password</label>
                <div className='password_container'>
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        id='password'
                        name='password'
                        value={data.password}
                        onChange={handleChange}
                        className='input'
                    />
                    <span onClick={handlePasswordToggle} className='password_toggle'>
                        {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </span>
                </div>
                <button className='btn' type="submit">Sign Up</button>
                <div>
                    <h5>Already have an account ? <NavLink to={"/login"} style={{ color: "red" }} >Login</NavLink></h5>
                </div>
            </form>
        </div>
    );
};

export default SignUp;
