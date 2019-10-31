import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export class AddButton extends Component {
  buttonSize = new Animated.Value(1);
  mode = new Animated.Value(0);

  handlePress = () => {
    Animated.sequence([
      Animated.timing(this.buttonSize, {
        toValue: 0.95,
        duration: 100,
        delay: 0,
      }),
      Animated.timing(this.buttonSize, {
        toValue: 1,
      }),
      Animated.timing(this.mode, {
        toValue: this.mode._value === 0 ? 1 : 0,
        duration: 100,
        delay: 0,
      }),
    ]).start();
  };
  render() {
    const sizeStyle = {
      transform: [{scale: this.buttonSize}],
    };

    const rotation = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '45deg'],
    });

    const addStoryX = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [-24, -100],
    });
    const addStoryY = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [-50, -100],
    });
    const addImageX = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [-24, -24],
    });
    const addImageY = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [-50, -150],
    });
    const addLocationX = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [-24, 50],
    });
    const addLocationY = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [-50, -100],
    });
    return (
      <View style={{position: 'absolute', alignItems: 'center'}}>
        <Animated.View
          style={{position: 'absolute', left: addStoryX, top: addStoryY}}>
          <View style={styles.secondaryButton}>
            <Icon name="address-card" size={19} color="#fff" />
          </View>
        </Animated.View>
        <Animated.View
          style={{position: 'absolute', left: addImageX, top: addImageY}}>
          <View style={styles.secondaryButton}>
            <Icon name="image" size={19} color="#fff" />
          </View>
        </Animated.View>
        <Animated.View
          style={{position: 'absolute', left: addLocationX, top: addLocationY}}>
          <View style={styles.secondaryButton}>
            <Icon name="image" size={19} color="#fff" />
          </View>
        </Animated.View>
        <Animated.View style={[styles.button, sizeStyle]}>
          <TouchableOpacity underlayColor="#7f58ff" onPress={this.handlePress}>
            <Animated.View style={{transform: [{rotate: rotation}]}}>
              <Icon name="plus" size={24} color="#fff" />
            </Animated.View>
          </TouchableOpacity>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3498db',
    alignItems: 'center',
    justifyContent: 'center',
    width: 72,
    height: 72,
    borderRadius: 50,
    position: 'absolute',
    top: -60,
    shadowColor: '#7f58ff',
    shadowOffset: {height: 10},
    shadowOpacity: 0.4,
    elevation: 10,
    borderWidth: 3,
    borderColor: '#fff',
  },
  secondaryButton: {
    backgroundColor: '#3498db',
    alignItems: 'center',
    justifyContent: 'center',
    width: 45,
    height: 45,
    borderRadius: 23,
    borderWidth: 1,
    borderColor: '#fff',
  },
});

export default AddButton;
