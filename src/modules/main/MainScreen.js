import React, {Component} from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Platform
} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

class MainScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
          <View style={{flex: 1, paddingLeft: 10}}>
            <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
              <Icon name="bars" size={15} color="#2f3542"/>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text style={{color: '#2f3542', fontSize: 17, fontWeight: 'bold'}}>Test App</Text>
          </View>
          <View style={{flex: 1, alignItems: 'flex-end', paddingRight: 10}}>
            <TouchableOpacity onPress={() => this.props.fetchCurrancies()}>
              <Text style={{color: '#2f3542'}}></Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: '#2f3542'}}>Переход на страницу валют в боковом меню :)</Text>
        </View>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dfe4ea',
    marginTop: Platform.OS !== 'ios' ? 15 : 30
  },
  navbar: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#95a5a6'
  }
});


export default connect(null, null)(MainScreen);
