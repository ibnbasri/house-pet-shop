import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { TabContext } from './TabContext';

const propTypes = {
  activeTab: PropTypes.any,
};


class Tabbar extends Component {

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.activeTab !== nextProps.activeTab) {
      return {
        activeTab: nextProps.activeTab
      };
    }
    return null;
  }

  constructor(props) {
    super(props);
    this.state = {
      activeTab: this.props.activeTab
    };
  }

  render() {
    return (
      <TabContext.Provider value={{activeTabId: this.state.activeTab}}>
        {this.props.children}
      </TabContext.Provider>
    );
  }
}

export default Tabbar;
Tabbar.propTypes = propTypes;
