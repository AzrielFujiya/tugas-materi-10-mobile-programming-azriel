import React, { useState } from 'react';
import { StyleSheet, View, Modal } from 'react-native';
import DaftarTeman from './components/DaftarTeman';
import DetailTeman from './components/DetailTeman';

export default function App() {
  const [temanTerpilih, setTemanTerpilih] = useState(null);
  const [modalTerlihat, setModalTerlihat] = useState(false);

  const teman = [
    { name: 'Akbar', description: 'Teman Kelas.', image: require('./assets/pp.jpg') },
    { name: 'Ijul', description: 'Teman Kelas.', image: require('./assets/pp2.png') },
    { name: 'Faris', description: 'Teman Kelas.', image: require('./assets/pp.jpg') },
    { name: 'Salman', description: 'Teman Kelas.', image: require('./assets/pp2.png') },
    { name: 'Gilang', description: 'Teman Kelas.', image: require('./assets/pp.jpg') },
  ];

  return (
    <View style={styles.container}>
      <DaftarTeman
        teman={teman}
        onPilihTeman={(teman) => {
          setTemanTerpilih(teman);
          setModalTerlihat(true);
        }}
      />
      {temanTerpilih && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalTerlihat}
          onRequestClose={() => setModalTerlihat(false)}
        >
          <DetailTeman
            teman={temanTerpilih}
            onTutup={() => setModalTerlihat(false)}
          />
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
