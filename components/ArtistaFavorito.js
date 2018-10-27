import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

export default class ArtistaFavorito extends React.Component {
  numeroDeFansHumanizado = () => {
    const { fans } = this.props
    const quantity = fans.length

    if (quantity < 1) {
      return 'ya no tiene fans'
    }

    return quantity === 1 ? 'tiene sólo un fan' : `tiene ${quantity} fans`
  }

  render() {
    const {
      artista: { nombre, imagen },
      esFavorito,
      onFavoriteButtonPress,
      fans,
    } = this.props

    return (
      <View style={[styles.container, styles.conSombra]}>
        <Image source={{ uri: imagen }} style={styles.imagen} />
        <View style={styles.dataContainer}>
          <Text style={styles.nombre}>{nombre}</Text>
          <Text style={styles.numeroDeFans}>{this.numeroDeFansHumanizado()}</Text>
        </View>
      </View>
    )
  }
}

ArtistaFavorito.propTypes = {
  artista: PropTypes.shape({
    nombre: PropTypes.string,
    imagen: PropTypes.string,
  }),
}

ArtistaFavorito.defaultProps = {
  artista: {},
  fans: [],
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: 350,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    marginVertical: 7,
    flexDirection: 'row',
  },

  nombre: {
    marginVertical: 5,
    marginHorizontal: 10,
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },

  numeroDeFans: {
    marginVertical: 5,
    marginHorizontal: 10,
    textAlign: 'center',
    fontSize: 20,
  },

  fan: {
    marginVertical: 5,
    marginHorizontal: 10,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },

  starButton: {
    textAlign: 'center',
    fontSize: 25,
    opacity: 0.7,
  },

  favorito: {
    fontSize: 35,
  },

  imagen: {
    height: 140,
    width: 140,
    borderRadius: 70,
    marginLeft: 10,
  },

  conSombra: {
    shadowColor: 'black',
    shadowOffset: {
      height: 2,
      width: 1,
    },
    shadowRadius: 1.5,
    shadowOpacity: 0.4,
    elevation: 2,
  },

  dataContainer: {
    flex: 1,
  },
})
