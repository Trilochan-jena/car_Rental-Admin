import React, { useEffect, useState } from "react";
import "../styles/sell-car.css";
import AddData from "../components/reuseable/AddData";
import { getCarAdd } from "../action/carAction/addCar";
import { useDispatch, useSelector } from "react-redux";
import Delete from "../components/reuseable/Delete";
const SellCar = () => {
  const sellsData = useSelector((state) => state.cars.addCarData);
  const dispatch = useDispatch();
  const [data, setData] = useState(false);
  const [delete, setDeletee] = useState(false);
  const [deleteDataa, setDeleteDataa] = useState("");



  const deleteData = (car) => {
    setDeleteDataa(car)
    setDelete(!delete)
  }
  const closeDelect = () => {
    setDelete(false)
  }


  const dataAdd = () => {
    setData(!data);
  };

  const CloseModal = () => {
    setData(false);
  };

  useEffect(() => {
    dispatch(getCarAdd());
  }, [dispatch]);



  return (
    <div className="sell_carr">
      <div className="car-wrappper">
        <button className="cartitle" onClick={dataAdd}>Add Cars</button>
        {data && <AddData closeModal={CloseModal} />}
      </div>

      <div className="Top_cards">
        {sellsData.map((car, index) => (
          <div className="cards" key={index}>
            <div className="cars_card">
              <div className="class_name">{car.carName}</div>
              <div className="class_category">{car.category}</div>
              <div className="type">{car.type}</div>
            </div>

            <div className="car_img">
              <img src={car.imgUrl} alt={car.carName} />
            </div>
            <div className="rent">
              <div className="group_size">{car.groupSize} seat</div>
              <div className="rent">{car.rentPrice} rs/day</div>
            </div>
            <div>
              <button className="delete" onClick={() => deleteData(car)}>Delect</button>
              {delete && <Delete closeModal={closeDelect} deleteData={ deleteDataa} />}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default SellCar;
