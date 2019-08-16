import React, { Component } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity,
  StyleSheet 
} from 'react-native';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static navigationOptions = () => ({
    headerTitle       : "List Contact",
    headerTitleStyle  : {
      color           : 'blue',
      fontWeight      : '500',
    }
  })

  render() {
    return (
      <View style = {{ flex : 1, alignItems : 'center', justifyContent : 'center' }}>
        <Text> Home </Text>
      
        <View style = { styles.containerFAB }>
          <TouchableOpacity 
            onPress = { () => this.props.navigation.navigate('Add') }
            style   = { styles.FAB }>
            <IconMCI
              name    = "plus" 
              size    = { 30 } 
              color   = "white"/>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerFAB : { 
    position  : 'absolute', 
    bottom    : 16, 
    right     : 16 
  },
  FAB : { 
    width           : 50,
    height          : 50, 
    borderRadius    : 25, 
    backgroundColor : 'blue',
    justifyContent  : 'center',
    alignItems      : 'center'
  }
})
