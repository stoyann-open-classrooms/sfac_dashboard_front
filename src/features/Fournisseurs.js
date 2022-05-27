import { createSlice } from "@reduxjs/toolkit";

export const fournisseurSlice = createSlice({
  name: "fournisseurs",
  initialState: { value: [] },
  reducers: {
    getFournisseur: (state, { payload }) => {
      state.initialState.value = payload;
    },
    addFournisseur: (state, action) => {
      // to ecrire le code pour ajouter un fournisseur a la base de données
    },
    updateFournisseur: (state, action) => {
      // to ecrire le code pour modifier un fournisseur a la base de données
    },
    deleteFournisseur: (state, action) => {
      // to ecrire le code pour supprimer un fournisseur a la base de données
    },
  },
});

export default fournisseurSlice.reducer;
