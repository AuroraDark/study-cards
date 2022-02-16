import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import * as styles from './CategoriasList.styles';
//import { CategoriasListWrapper } from './CategoriasList.styles';

class CategoriasList extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('CategoriasList will mount');
  }

  componentDidMount = () => {
    console.log('CategoriasList mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('CategoriasList will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('CategoriasList will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('CategoriasList did update');
  }

  componentWillUnmount = () => {
    console.log('CategoriasList will unmount');
  }

  render () {
    if (this.state.hasError) {
      return (
        <View style={styles.CategoriasListWrapper}>
          <Text>Something went wrong.</Text>
        </View>
      );
    }
    return (
      <View style={styles.CategoriasListWrapper}>
        <Text>Test content</Text>
      </View>
    );
  }
}

CategoriasList.propTypes = {
  // bla: PropTypes.string,
};

CategoriasList.defaultProps = {
  // bla: 'test',
};

export default CategoriasList;
