import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import * as styles from './Secao.styles';
//import { SecaoWrapper } from './Secao.styles';

const Secao = (props) => (
  <View style={styles.SecaoWrapper}>
    <Text>Test content</Text>
  </View>
);

Secao.propTypes = {
  // bla: PropTypes.string,
};

Secao.defaultProps = {
  // bla: 'test',
};

export default Secao;
