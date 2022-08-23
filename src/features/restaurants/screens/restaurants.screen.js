import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfo } from '../components/restaurant-info.component';


const SearchBarView = styled(View)`
    padding: ${ (props) => props.theme.sizes[1]};
`;
const SafeAreaS = styled(SafeAreaView)`
    flex: 1;
    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`} // if theres a current height for android, then add it to safeAreaView
`;
const CardView = styled(View)`
    flex: 1;
    padding: ${ (props) => props.theme.sizes[1]};
`;

export const RestaurantsScreen = () => (
  
    <SafeAreaS>
      <SearchBarView>
        <Searchbar
          placeholder="Search"
        />
      </SearchBarView>
      <CardView>
        <RestaurantInfo />
      </CardView>
  </SafeAreaS>
)


