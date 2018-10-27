import React from 'react'
import { Button, StyleSheet, Text, View, ScrollView } from 'react-native'
import ArtistaFavorito from '../components/ArtistaFavorito'
import { find, keys, pickBy } from 'lodash'

import { favoritesCollection } from '../firebase/artists'

import artistas from '../artists'

const getKeysForTrueValues = object => keys(pickBy(object))

class FavoritesScreen extends React.Component {
  state = {
    favoritos: [],
  }

  componentDidMount() {
    this.unsubscribeFavoritesListener = favoritesCollection.onSnapshot(querySnapshot => {
      const favoritos = []
      querySnapshot.forEach(doc => {
        const artistFromSpotify = find(artistas, artista => artista.nombre === doc.id)

        if (!artistFromSpotify) {
          return
        }

        favoritos.push({
          ...artistFromSpotify,
          fans: getKeysForTrueValues(doc.data()),
        })
      })
      this.setState({ favoritos })
    })
  }

  componentWillUnmount() {
    this.unsubscribeFavoritesListener()
  }

  render() {
    const { favoritos } = this.state

    return (
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollView}
          contentContainerStyle={styles.scrollViewContent}
        >
          {favoritos &&
            favoritos.map(artist => <ArtistaFavorito artista={artist} key={artist.nombre} fans={artist.fans} />)}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonsContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    minHeight: 45,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#000000C0',
  },

  scrollView: {
    flex: 1,
    width: '100%',
  },

  scrollViewContent: {
    alignItems: 'center',
    paddingTop: 20,
  },
})

export default FavoritesScreen
