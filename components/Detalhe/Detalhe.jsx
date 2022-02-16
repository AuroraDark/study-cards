import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import * as styles from './Detalhe.styles';
//import { DetalheWrapper } from './Detalhe.styles';

const Detalhe = (props) => (
  <View style={styles.DetalheWrapper}>
    <Text>Test content</Text>
  </View>
);

Detalhe.propTypes = {
  // bla: PropTypes.string,
};

Detalhe.defaultProps = {
  // bla: 'test',
};

export default Detalhe;
