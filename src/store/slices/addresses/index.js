import { createSlice } from '@reduxjs/toolkit';

const addresses = createSlice({
    name: 'addresses',
    initialState: {},
    reducers: {
        getAddressesSuccess: (state, action) => {
            return action.payload;
        },
    },
});

export const { getAddressesSuccess } = addresses.actions;
export default addresses.reducer;
