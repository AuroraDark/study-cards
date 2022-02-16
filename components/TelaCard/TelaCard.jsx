import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as styles from './TelaCard.styles';
//import { TelaCardWrapper } from './TelaCard.styles';

const TelaCard = (props) => (
  <View style={styles.TelaCardWrapper}>
    <Text>Test content</Text>
  </View>
);

TelaCard.propTypes = {
  // bla: PropTypes.string,
};

TelaCard.defaultProps = {
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
)(TelaCard);
