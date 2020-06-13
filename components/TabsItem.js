{ /*import React from "react";
import { View, Text, StyleSheet, TextPropTypes } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const TabItem = ({ icon, isSelected, children, props }) => (
  <View style={{ flex: 1}} {...props} style={{dispay: isSelected ? "flex" : "none"}}>
    {isSelected ? ( children ) : ( false )}
  </View>
);
export default TabItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
}); */}

import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { TabContext } from './TabContext';
const propTypes = {
  tabId: PropTypes.any,
};
export default function TabsItem(props) {
  const {
    tabId,
    ...attributes
  } = props;
  return (
    <TabContext.Consumer>
      {({ activeTabId }) => (
        <View style={{ display: activeTabId == tabId ? 'flex' : 'none', flexGrow:1 }}>
          {props.children}
        </View>
    )}

    </TabContext.Consumer>
  );
}
TabsItem.propTypes = propTypes;
