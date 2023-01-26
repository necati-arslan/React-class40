import React from "react";
import { createContext, useState, useContext } from "react";

export const FavoriteContext = createContext();

export const FavoritProvider = (props) => {
  const [favorite, setFavorite] = useState([1, 2]);

  function isFavorite(id) {
    return favorite.includes(id);
  }

  function addFavorite(id) {
    setFavorite([...favorite, id]);
  }

  function removeFavorite(id) {
    setFavorite(favorite.filter((fId) => fId !== id));
  }

  return (
    <FavoriteContext.Provider
      value={{ favorite, isFavorite, addFavorite, removeFavorite }}
    >
      {props.children}
    </FavoriteContext.Provider>
  );
};

export const useFavorite = () => {
  return useContext(FavoriteContext);
};

export const useIsFavorite = () => {
  const { isFavorite } = useContext(FavoriteContext);
  return isFavorite;
};

export const useAddFavorite = () => {
  const { addFavorite } = useContext(FavoriteContext);
  return addFavorite;
};

export const useRemoveFavorite = () => {
  const { removeFavorite } = useContext(FavoriteContext);
  return removeFavorite;
};
