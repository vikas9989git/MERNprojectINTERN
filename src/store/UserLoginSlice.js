import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';

export const UserLoginLifeCycle=createAsyncThunk("Login",async(userCredObj,{rejectWithValue})=>{
    
    let res=await axios.post("http://localhost:5000/user/login",userCredObj)
    
    console.log("res is",res)
    if(res.data.message==="success"){
        // save the token in local storage i browser
        localStorage.setItem("token",res.data.token)
        return res.data;
    }
    else{
       return rejectWithValue(res.data.message)
    }
});
export const UserLoginSlice=createSlice({
    name:"login",
    initialState:{userObj:{},isPending:false,isError:false,isSuccess:false,errMsg:""},
    reducers:{
        clearState:(state,action)=>{
            state.userObj={};
            state.isPending=false;
            state.isSuccess=false;
            state.isError=false;
            state.errMsg="";
        }
    },
    extraReducers:{
        [UserLoginLifeCycle.pending]:(state,action)=>{
            state.isPending=true;
        },
        [UserLoginLifeCycle.fulfilled]:(state,action)=>{
            state.userObj=action.payload.user;
            state.isSuccess=true;
            state.isPending=false;
            state.isError=false;
        },
        [UserLoginLifeCycle.rejected]:(state,action)=>{
            state.userObj={};
            state.isPending=false;
            state.isSuccess=false;
            state.isError=true;
            state.errMsg=action.payload;
        }
    }
})


export const {clearState}=UserLoginSlice.actions;
export default UserLoginSlice.reducer;