import { createSlice } from "@reduxjs/toolkit";

interface Rows {
    rows: any[]
}

const initialState: Rows = {
    rows: []
}

export const selectedRecordSlice = createSlice({
    name: 'selectedRecord',
    initialState,
    reducers: {
        pushRows: (state, action) => {
            state.rows.push(action.payload);
        }
    }
})

export const { pushRows } = selectedRecordSlice.actions;

export const selectedRecordLength = (state: any ) => state.selectedRecord.rows.length;

export default selectedRecordSlice.reducer;