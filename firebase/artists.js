import { db, auth } from './index'

export const favoritesCollection = db.collection('favoritos')

export const setArtistAsFavorite = (artistId, esFavorito) => {
  const userId = auth.currentUser.uid
  favoritesCollection.doc(artistId).set({
    [userId]: esFavorito,
  })
}
