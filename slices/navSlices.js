import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    origin: null,
    destination: null,
    travelTimeInfo: null
};

export const navSlices = createSlice({
    name: 'nav',
    initialState,
    reducer: {
            setOrigin: (state, action) => {
                state.origin = action.payload;
            },

            setDestination: (state, action) => {
                state.destination = action.payload;
            },

            setTravelTimeInfo: (state, action) => {
                state.travelTimeInfo = action.payload;
            },



    },
}); 

// Destructure the actions and export it.
// To set push origin, destination and travelinfo to data layer
export const {setOrigin, setDestination, setTravelTimeInfo} = navSlices.actions;

// Selectors
// Used to pull latest data value of the desired variable.
// Create selectors for each variable in the slice

export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTImeInfo = (state) => state.nav.travelTimeInfo;

// Export the reducer that we pulled in store.js
export default navSlices.reducer;