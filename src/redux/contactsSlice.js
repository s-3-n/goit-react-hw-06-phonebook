const { createSlice, nanoid } = require('@reduxjs/toolkit');

const initialState = {
  contacts:[],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    add: (state, { payload }) => {
      return {
        ...state,
        contacts: [...state.contacts, { ...payload, id: nanoid() }],
      };
     
    },
    remove: (state, { payload }) => {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
    filtered: (state, { payload }) => {
      state.filter =  payload;
    },
  },
});

export const { add, remove, filtered } = contactsSlice.actions;

export default contactsSlice.reducer;
