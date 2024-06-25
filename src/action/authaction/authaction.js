import Api from "../../utilit/Api"

export const userLogin = (data, navigate) => {
    return async (dispatch) => {
        try {

            const response = await Api.post('adminlogin', data);
            const loginData = response?.data
            console.log(response, '<<<response');
            // console.log(response.data,'<<<response.data');
            if (loginData.status === 201) {
                dispatch({
                    type: 'ADD_API_ALERT',
                    payload: {
                        severity: "success",
                        message: loginData.message
                    }
                })

                // dispatch({
                //     type: 'ADD_USER_DATA',
                //     payload: {
                //         token: loginData.token,
                //         data: loginData.adminData
                //     }
                // })

                sessionStorage.setItem("token", loginData.token)
                sessionStorage.setItem("data", JSON.stringify(loginData.adminData))
                navigate('/')
            } else {
                dispatch({
                    type: 'ADD_API_ALERT',
                    payload: {
                        severity: "error",
                        message: loginData.message
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


export const userSignUp = (data, navigate) => {
    return async (dispatch) => {
        try {

            const response = await Api.post('create_admin', data);
            const loginData = response?.data
            console.log(response, '<<<response');
            // console.log(response.data,'<<<response.data');
            if (loginData.status === 201) {
                dispatch({
                    type: 'ADD_API_ALERT',
                    payload: {
                        severity: "success",
                        message: loginData.message
                    }
                })

                // dispatch({
                //     type: 'ADD_USER_DATA',
                //     payload: {
                //         token: loginData.token,
                //         data: loginData.adminData
                //     }
                // })

                sessionStorage.setItem("token", loginData.token)
                sessionStorage.setItem("data", JSON.stringify(loginData.adminData))
                navigate('/login')
            } else {
                dispatch({
                    type: 'ADD_API_ALERT',
                    payload: {
                        severity: "error",
                        message: loginData.message
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
