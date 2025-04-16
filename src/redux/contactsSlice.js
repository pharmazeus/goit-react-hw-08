import { createSelector, createSlice } from "@reduxjs/toolkit";
import {
  fetchContacts,
  addContacts,
  deleteContacts,
} from "../redux/contactsOps";
import { selectFilterName } from "./filtersSlice";

const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(addContacts.pending, (state) => {
        state.loading = true;
      })
      .addCase(addContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addContacts.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(deleteContacts.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload.id
        );
      })
      .addCase(deleteContacts.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const selectContactCount = (state) => {
  const contacts = selectContacts(state);

  return contacts.reduce((acc) => acc + 1, 0);
};

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
//memoized complex selector
export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilterName],
  (contacts, filters) => {
    const normalizedFilter = filters.toLowerCase();
    return contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(normalizedFilter);
    });
  }
);
//non-memoized complex selector
// export const selectFilteredContacts = (state) => {
//   const contacts = selectContacts(state);
//   const filter = selectFilter(state);
//   const normalizedFilter = filter.toLowerCase();

//   return contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(normalizedFilter)
//   );
// };

export default slice.reducer;
export const { addContact, deleteContact } = slice.actions;
