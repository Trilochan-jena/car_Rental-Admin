import Api from "../../utilit/Api"

export const carAdd = (data) => {
    return async (dispatch) => {
        try {

            const response = await Api.post('createAddCars', data);
            const carData = response?.data

            if (carData.status === 201) {
                dispatch({
                    type: 'ADD_API_ALERT',
                    payload: {
                        severity: "success",
                        message: carData.message
                    }
                })

            } else {
                dispatch({
                    type: 'ADD_API_ALERT',
                    payload: {
                        severity: "error",
                        message: carData.message
                    }
                })
            }

        }

        catch {
            dispatch({
                type: "ADD_API_ALERT",
                payload: {
                    severity: "error",
                    message: "server error"
                }
            })
        }
    }
}


export const getCarAdd = () => {
    return async (dispatch) => {
        try {
            const response = await Api.get('getAddCars');
            const dataCars = response?.data;
            // console.log(response, '<<<response');

            if (response.status === 200) {
                dispatch({
                    type: 'ADD_API_ALERT',
                    payload: {
                        severity: "success",
                        message: dataCars.message
                    }
                });
                dispatch({
                    type: 'ADD_CAR_DATA',
                    payload: dataCars.data
                });
            } else {
                dispatch({
                    type: 'ADD_API_ALERT',
                    payload: {
                        severity: "error",
                        message: dataCars.message
                    }
                });
            }
        } catch (error) {
            console.error('Error fetching car data:', error);
            dispatch({
                type: 'ADD_API_ALERT',
                payload: {
                    severity: "error",
                    message: "Server error"
                }
            });
        }
    };
};

export const deleteCar = (obj) => {
    return async (dispatch) => {
        try {
            const response = await Api.delete('delectCars',obj);
            const dataCars = response?.data;
            console.log(response, '<<<response');

            if (response.status === 200) {
                dispatch({
                    type: 'ADD_API_ALERT',
                    payload: {
                        severity: "success",
                        message: dataCars.message
                    }
                });
            } else {
                dispatch({
                    type: 'ADD_API_ALERT',
                    payload: {
                        severity: "error",
                        message: dataCars.message
                    }
                });
            }
        } catch (error) {
            console.error('Error fetching car data:', error);
            dispatch({
                type: 'ADD_API_ALERT',
                payload: {
                    severity: "error",
                    message: "Server error"
                }
            });
        }
    };
};
