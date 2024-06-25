import React, { useState } from 'react';
import "../../styles/AddData.css";
import storage from '../../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { carAdd } from '../../action/carAction/addCar';

const AddData = ({ closeModal }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [tableimg, setTableImg] = useState();
  const [fileimg, setFileImg] = useState();
  const [carData, setCardata] = useState({
    carName: "",
    category: "",
    type: "",
    groupSize: "",
    rentPrice: "",
    imgUrl: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardata((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  const handleSaveCarData = async (event) => {
    event.preventDefault();
    try {
      const storageRef = ref(storage, `carRentt/${fileimg.name}`);
      const snapshot = await uploadBytes(storageRef, fileimg);
      const downloadURL = await getDownloadURL(snapshot.ref);

      console.log("Image uploaded successfully. Download URL:", downloadURL);
      dispatch(carAdd({ ...carData, imgUrl: downloadURL, navigate }));

      setCardata({
        carName: "",
        category: "",
        type: "",
        groupSize: "",
        rentPrice: "",
        imgUrl: ""
      });
      closeModal();
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
    <div className="modal-wrapper">
      <div className="modal-container">
        <form onSubmit={handleSaveCarData}>
          <div className='first_inputs'>
            <label>
              Car Name
              <input
                name="carName"
                type="text"
                value={carData.carName}
                onChange={handleChange}
              />
            </label>

            <label>
              Category
              <input
                name="category"
                type="text"
                value={carData.category}
                onChange={handleChange}
              />
            </label>

            <label>
              Type
              <input
                name="type"
                type="text"
                value={carData.type}
                onChange={handleChange}
              />
            </label>
          </div>

          <div className='second_inputs'>
            <label>
              Group Size
              <input
                name="groupSize"
                type="number"
                value={carData.groupSize}
                onChange={handleChange}
              />
            </label>

            <label>
              Rent Price
              <input
                name="rentPrice"
                type="number"
                value={carData.rentPrice}
                onChange={handleChange}
              />
            </label>

            <label>
              Car Image
              <input
                name="imgUrl"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </label>
          </div>

          <button className="modal-btn" type="submit">Submit</button>
          <button className="modal-btn" type="button" onClick={closeModal}>Close</button>
        </form>
      </div>
    </div>
  );
}

export default AddData;
