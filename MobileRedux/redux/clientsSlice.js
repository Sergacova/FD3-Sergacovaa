import { createSlice } from '@reduxjs/toolkit';

const initialState={
  clients: [ 
    {id:101, fam:"Иванов", im:"Иван", otch:"Иванович", balance:200}, 
    {id:105, fam:"Сидоров", im:"Сидор", otch:"Сидорович", balance:250}, 
    {id:110, fam:"Петров", im:"Пётр", otch:"Петрович", balance:180},
    {id:120, fam:"Григорьев", im:"Григорий", otch:"Григорьевич", balance:-220},
  ],
}

export const clientsSlice = createSlice({
  name: 'clients',
  initialState,
  reducers: {

    clientsUpdate: (state,action) => {
      state.surname = action.payload.surname;
      state.firstname = action.payload.firstname;
    },

  },
});

export const { clientsUpdate } = clientsSlice.actions;

export default clientsSlice.reducer;