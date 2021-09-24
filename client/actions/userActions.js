import { addUser, getUser, updateUserDetails } from '../apis/userAPI'

// ---- CASES ----
export const RECEIVE_USER = 'RECEIVED_USER_DETAILS'
export const RECEIVE_NEW_USER = 'RECEIVED_NEW_USER'

// ---- ACTIONS ----
export const receiveUser = user => {
  return {
    type: RECEIVE_USER,
    user // obj with user details
  }
}

export const receiveNewUser = newUser => {
  return {
    type: RECEIVE_NEW_USER,
    newUser
  }
}

// ---- THUNKS ----
export const createUser = newUser => {
  return dispatch => {
    addUser(newUser)
      .then(res => {
        // res is id from DB
        // dispatch(receiveNewUser(newUser with new ID from db))
        console.log(res)
        dispatch(receiveNewUser(res))
      })
  }
}

// export const getUser = () => {{
//   return dispatch => {
//     return request
//       .get() // include :id in API call
//       .then(res =>)
//       .catch(err => {
//         console.log(err)
//         // dispatch(something to show the user an err)
//       })
//   }
// }}

// export const updateUser = () => {
//   return dispatch => {{
//     return request
//       .patch()
//       .send({})
//       .then(res => )
//       .catch(err => {
//         console.log(err)
//         // dispatch(something to show the user an err)
//       })
//   }}
// }
