import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';


export const login = createSlice({
  name: 'login',
  initialState: {
    status: false,
    error: null,
    message: null,
    loading: false,
    errMsg: null,
    data: null,
    auth:false,
    userData:null
  },
  reducers: {
    errroHandler: (state, action) => {
      state.error=action.payload.msg,
      state.errMsg = action.payload.flag;
    },
    authToken:(state,action)=>{
      state.auth=action.payload.flag,
      state.userData=action.payload.data
    }
  },
});
export const {errroHandler,authToken} = login.actions;
export default login.reducer;