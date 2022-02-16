import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as styles from './Categorias.styles';
//import { CategoriasWrapper } from './Categorias.styles';

class Categorias extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Categorias will mount');
  }

  componentDidMount = () => {
    console.log('Categorias mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Categorias will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Categorias will update', nextProps, nextState);
  }


  componentDidUpdate = () => {
    console.log('Categorias did update');
  }

  componentWillUnmount = () => {
    console.log('Categorias will unmount');
  }

  render () {
    if (this.state.hasError) {
      return (
        <View style={styles.CategoriasWrapper}>
          <Text>Something went wrong.</Text>
        </View>
      );
    }
    return (
      <View style={styles.CategoriasWrapper}>
        <Text>Test content</Text>
      </View>
    );
  }
}

Categorias.propTypes = {
  // bla: PropTypes.string,
};

Categorias.defaultProps = {
  // bla: 'test',
};

const mapStateToProps = state => ({
  // blabla: state.blabla,
});

const mapDispatchToProps = dispatch => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Categorias);
