import React from 'react';
import { AppRegistry, StyleSheet, Text, View, VrButton } from 'react-360';

export default class room_3d_demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
    };
  }

  togglePopup = () => {
    this.setState(prevState => ({
      showPopup: !prevState.showPopup,
    }));
  };

  render() {
    return (
        <View style={styles.mainContainer}>
          <View style={styles.background}>
            {/* Nút ở vị trí cố định */}
            <View style={styles.buttonContainer}>
              <VrButton onClick={this.togglePopup}>
                <Text style={styles.buttonText}>!</Text>
              </VrButton>
            </View>
          </View>

          {/* Popup */}
          {this.state.showPopup && (
              <View style={styles.popup}>
                <Text style={styles.popupText}>BUDDHA</Text>
                <Text style={styles.popupText}>RATNAGIRI(JAJPUR)-CIRCA 9th CENTURY A.D</Text>
                <Text style={styles.popupText}>Gautama Buddha, also known as Siddhārtha Gautama, Shakyamuni, or simply the Buddha, was a sage on whose teachings Buddhism was founded. He is believed to have lived and taught mostly in northeastern India sometime between the sixth and fourth centuries BCE.</Text>
                <VrButton onClick={this.togglePopup}>
                  <Text style={styles.closeButtonText}>Close</Text>
                </VrButton>
              </View>
          )}
        </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'roboto,sans-serif',
  },
  background: {
    width: 800,
    height: 500,
    // backgroundColor: 'rgba(0, 0, 0, 0.4)',
    position: 'relative',
  },
  buttonContainer: {
    position: 'absolute',
    top: 400,
    left: 0,
    borderColor: '#639dda',
    borderWidth: 2,
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 20,
    color: '#639dda'
  },
  popup: {
    position: 'absolute',
    top: '40%',
    left: '30%',
    padding: 20,
    width: 400,
    height: 300,
    backgroundColor: '#ffffff',
    borderColor: '#000000',
    borderWidth: 2,
    borderRadius: 10,
    zIndex: 1,
  },
  popupText: {
    fontSize: 20,
    color: '#000000',
    marginBottom: 10,
  },
  closeButtonText: {
    fontSize: 18,
    color: '#639dda',
  },
});

AppRegistry.registerComponent('room_3d_demo', () => room_3d_demo);
