import { createSelector } from "@reduxjs/toolkit";

import { selectFilterName } from "../filters/selectors";

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
