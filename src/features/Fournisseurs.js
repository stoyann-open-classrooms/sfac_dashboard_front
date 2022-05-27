import { createSlice } from "@reduxjs/toolkit";

export const fournisseurSlice = createSlice({
  name: "fournisseurs",
  initialState: { value: [] },
  reducers: {
    getFournisseur: (state, action) => {
      // to ecrire le code pour recuperer la liste des fournisseurs a la base de données
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
