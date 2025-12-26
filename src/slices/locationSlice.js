import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lat: null,
  lng: null,
  address: "",
  label: "",
  isConfirmed: false,
};

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocation(state, action) {
      const { lat, lng, address, label } = action.payload;
      state.lat = lat;
      state.lng = lng;
      state.address = address;
      state.label = label;
      state.isConfirmed = false;
    },
    confirmLocation(state) {
      state.isConfirmed = true;
    },
    clearLocation() {
      return initialState;
    },
  },
});

export default locationSlice.reducer;
export const { setLocation, confirmLocation, clearLocation } =
  locationSlice.actions;
