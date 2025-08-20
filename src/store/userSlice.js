import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "Guest",
  email: "",
  phone: "",
  country: "",
  loyaltyLevel: "1",
  currency: "EUR",
  loyaltyPoints: 0,
  mainBalance: 0,
  bonusBalance: 0,
  referralLink: "",
  city: "",
  address: "",
  postalCode: "",
  gender: "",
  firstName: "", 
  lastName: ""   
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      return { ...state, ...action.payload };
    },
    updateUser(state, action) {
      return { ...state, ...action.payload };
    },
    // Добавляем новый action для обновления одного поля
    updateUserField(state, action) {
      const { field, value } = action.payload;
      state[field] = value;
    },
    clearUser() {
      return initialState;
    }
  }
});

export const { setUser, updateUser, updateUserField, clearUser } = userSlice.actions;
export default userSlice.reducer;