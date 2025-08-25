import {createSlice} from "@reduxjs/toolkit"
const savedItems=JSON.parse(localStorage.getItem('todos'))||{};
const todoSlice=createSlice({
    name:'todos',
    initialState:{
        list: {...savedItems},

    },
    reducers:{
        addTodo:(state,action)=>{
            const {date,text}=action.payload;
            if(!state.list[date]){
                state.list[date]=[];
            }
            state.list[date].push({id:Date.now(),text})
            localStorage.setItem('todos',JSON.stringify(state.list));
            

        },
        deleteTodo:(state,action)=>{
            const {date,id}=action.payload;
            if(state.list[date]){
                state.list[date]=state.list[date].filter(todi=>todi.id!==id)
            
            if(state.list[date].length===0){
                delete state.list[date];
            }
        }
        localStorage.setItem('todos',JSON.stringify(state.list))
        }
        


    }
})
export const {addTodo,deleteTodo}=todoSlice.actions;
export default todoSlice.reducer;