import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

const DetailTeman = ({ teman, onTutup }) => (
  <View style={styles.centeredView}>
    <View style={styles.modalView}>
      <Image source={teman.image} style={styles.image} />
      <Text style={styles.modalText}>{teman.description}</Text>
      <Button title="Tutup" onPress={onTutup} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
});

export default DetailTeman;
