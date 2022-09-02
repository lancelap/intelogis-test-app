import { createSlice } from '@reduxjs/toolkit';

const requestsSlice = createSlice({
    name: 'requests',
    initialState: {
        data: {
            1: {
                start: 'address1',
                end: 'address2',
            },
            2: {
                start: 'address3',
                end: 'address4',
            },
            3: {
                start: 'address5',
                end: 'address6',
            },
            4: {
                start: 'address7',
                end: 'address8',
            },
        },
        selected: null,
    },
    reducers: {
        selectRequest(state, action) {
            state.selected = action.payload;
        },
        changeRequestAddress(state, action) {
            state.data[action.payload.row][action.payload.position] = action.payload.address;
        },
    },
});

export const { changeRequestAddress, selectRequest } = requestsSlice.actions;
export default requestsSlice.reducer;
