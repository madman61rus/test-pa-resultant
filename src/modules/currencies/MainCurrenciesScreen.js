import React, {Component} from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux';
import {fetchCurrancies} from './actions';
import Icon from 'react-native-vector-icons/FontAwesome';

class MainCurrenciesScreen extends Component {

  componentDidMount(){
    this.props.fetchCurrancies();
    setInterval(() => this.props.fetchCurrancies(), 15000);
  }


  render(){
    const {stock, isFetching, success, errors} = this.props.currencies;
    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
          <View style={{flex: 1, paddingLeft: 10}}>
            <TouchableOpacity onPress={() => this.goBack() }>
              <Icon name="chevron-left" size={15} color="#2f3542" />
            </TouchableOpacity>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={{color: '#2f3542', fontSize: 17, fontWeight: 'bold'}}>Currencies</Text>
          </View>
          <View style={{flex: 1, alignItems: 'flex-end', paddingRight: 10}}>
            <TouchableOpacity onPress={() => this.props.fetchCurrancies()}>
              <Text style={{color: '#2f3542'}}>Обновить</Text>
            </TouchableOpacity>
          </View>
        </View>

        { isFetching && stock.length === 0 &&
          <View style={styles.indicatorContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
          </View>
        }

        { !isFetching && success && stock.length > 0 &&
          <View>

          </View>


        }
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dfe4ea'
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
  }
});
const mapStateToProps = (state) => {
    return {
        currencies: state.currenciesReducer
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
