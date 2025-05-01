import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMenuItem } from "../types";
import { toast } from 'sonner';

interface state {
  items: IMenuItem[];
}

const initialState: state = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems: (state, action: PayloadAction<IMenuItem>) => {
      const itemIdx = state.items.findIndex((item) => {
        return item._id === action.payload._id;
      });

      if (itemIdx >= 0) {
        state.items[itemIdx].cartQuantity += 1;
        toast.success(`+1 to ${action.payload.name}`, {
          style: {
            background: '#F5F3EF',
            color: '#2E4A2E',
            border: '1px solid #2E4A2E',
          },
        });
      } else {
        const temp = { ...action.payload, cartQuantity: 1 };
        state.items.push(temp as IMenuItem);
        toast.success(`${action.payload.name} added to cart`, {
          style: {
            background: '#F5F3EF',
            color: '#2E4A2E',
            border: '1px solid #2E4A2E',
          },
        });
      }
    },

    removeItems: (state, action: PayloadAction<IMenuItem>) => {
      const prev = [...state.items];
      state.items = prev.filter((item: IMenuItem) => {
        if (item._id !== action.payload._id) {
          return item;
        }
      });
      toast.error(`${action.payload.name} removed from cart`, {
        style: {
          background: '#FEE2E2',
          color: '#DC2626',
          border: '1px solid #DC2626',
        },
      });
    },

    decrementItem: (state, action: PayloadAction<IMenuItem>) => {
      const itemIdx = state.items.findIndex((item) => {
        return item._id === action.payload._id;
      });

      if (state.items[itemIdx]?.cartQuantity > 1) {
        state.items[itemIdx].cartQuantity -= 1;
        toast.success(`-1 from ${action.payload.name}`, {
          style: {
            background: '#F5F3EF',
            color: '#2E4A2E',
            border: '1px solid #2E4A2E',
          },
        });
      } else if (state.items[itemIdx]?.cartQuantity) {
        const filteredItems = state.items.filter((item) => {
          return item._id !== action.payload._id;
        });
        state.items = filteredItems;
        toast.success(`-1 from ${action.payload.name}`, {
          style: {
            background: '#F5F3EF',
            color: '#2E4A2E',
            border: '1px solid #2E4A2E',
          },
        });
      }
    },

    emptyCart: (state) => {
      state.items = [];
      toast.error('Cart cleared', {
        style: {
          background: '#FEE2E2',
          color: '#DC2626',
          border: '1px solid #DC2626',
        },
      });
    },
  },
});

export const { addItems, removeItems, decrementItem, emptyCart } = cartSlice.actions;

export default cartSlice.reducer;