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
import {fetchCurrancies} from './actions';
import Icon from 'react-native-vector-icons/FontAwesome';

class MainCurrenciesScreen extends Component {


  componentDidMount(){
    this.props.navigation.addListener('willBlur', () => clearInterval(interval));
    this.props.fetchCurrancies();
    const interval = setInterval(() => this.props.fetchCurrancies(), 15000);
  }


  _keyExtractor = (item, index) => item.symbol + index;

  _renderItem = ({item}) => (
    <View style={styles.row}>
      <View style={styles.leftBlock}><Text>{item.name}</Text></View>
      <View style={styles.centerBlock}><Text>{item.volume}</Text></View>
      <View style={styles.rightBlock}><Text>{item.price.amount.toFixed(2)}</Text></View>
    </View>
  );

  _header = () => <View style={styles.header}>
  <View style={styles.leftBlock}><Text>Name</Text></View>
  <View style={styles.centerBlock}><Text>Amount</Text></View>
  <View style={styles.rightBlock}><Text>Price</Text></View>
  </View>


  render(){
    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
          <View style={{flex: 1, paddingLeft: 10}}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack() }>
              <Icon name="chevron-left" size={15} color="#2f3542" />
            </TouchableOpacity>
          </View>
          <View style={styles.centerBlock}>
          <Text style={styles.title}>Currencies</Text>
          </View>
          <View style={{flex: 1, alignItems: 'flex-end', paddingRight: 10}}>
            <TouchableOpacity onPress={() => this.props.fetchCurrancies()}>
              { this.props.currencies.isFetching ?
                <View style={styles.indicatorContainer}>
                  <ActivityIndicator size="small" color="#0000ff" />
                </View>
                :

                <Text style={{color: '#2f3542'}}>Update</Text>
              }
            </TouchableOpacity>
          </View>
        </View>

        { console.log('render ') || this.props.stock.length > 0 &&
          <View>
            <FlatList
              data={this.props.stock}
              keyExtractor={this._keyExtractor}
              renderItem={this._renderItem}
              initialNumToRender={25}
              maxToRenderPerBatch={25}
              ListHeaderComponent={this._header}
              />
          </View>


        }
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
  indicatorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  navbar: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#95a5a6'
  },
  header: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 2,
    paddingVertical: 2,
    paddingHorizontal: 5
  },
  title: {
    color: '#2f3542',
    fontSize: 17,
    fontWeight: 'bold'
  },
  row: {
    flexDirection: 'row',
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginVertical: 2,
    paddingVertical: 2,
    paddingHorizontal: 5
  },
  leftBlock: {
    flex: 1,
    alignItems: 'flex-start'
  },
  rightBlock: {
    flex: 1,
    alignItems: 'flex-end'
  },
  centerBlock: {
    flex: 1,
    alignItems: 'center'
  }
});
const mapStateToProps = (state) => {
    return {
        currencies: state.currenciesReducer,
        stock: state.currenciesReducer.stock
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchCurrancies: () => {
            dispatch(fetchCurrancies())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainCurrenciesScreen);
