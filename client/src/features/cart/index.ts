import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMenuItem } from "../types";

interface state {
   items : IMenuItem[]
}

const initialState : state = {
   items : []
}

const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers : ({
        addItems : (state, action : PayloadAction<IMenuItem>) => {
         const itemIdx = state.items.findIndex((item) => { 
             return  (item._id === action.payload._id)
           });
        
        if(itemIdx >= 0){
                               
         state.items[itemIdx].cartQuantity += 1;
        }else{
            const temp = {...action.payload, cartQuantity : 1};
            state.items.push(temp as IMenuItem);
        }

        },
        removeItems : (state, action :PayloadAction<IMenuItem > ) => {
            const prev = [...state.items];
            state.items = prev.filter( ( item : IMenuItem )  => {
                if(item._id  !== action.payload._id){
                    return item
                }
            })
        },

        decrementItem : (state, action :PayloadAction<IMenuItem>) => {
            const itemIdx = state.items.findIndex((item) => { 
                return  (item._id === action.payload._id)
              });

            if(state.items[itemIdx]?.cartQuantity > 1){ 
               state.items[itemIdx].cartQuantity -= 1;
            } else if(state.items[itemIdx]?.cartQuantity){
                const filteredItems = state.items.filter((item)=>{
                    return item._id !== action.payload._id
                });
                state.items = filteredItems;
            } 
        },

        clearCart : (state) => {
            state.items = []
        }
    })
})


export const {addItems, removeItems, decrementItem} = cartSlice.actions;

export default cartSlice.reducer;
