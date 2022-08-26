import React from 'react';
import styled from 'styled-components/native';
import { FlatList, SafeAreaView, StatusBar, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { Spacer } from '../../../components/spacer/spacer.component';
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
      <FlatList
      data={[
        { name: 1 },
        { name: 2 },
        { name: 3 },
        { name: 4 },
        { name: 5 },
        { name: 6 },
        { name: 7 },
        { name: 8 },
        { name: 9 },
        { name: 10 },
        { name: 11 },
        { name: 12 },
        { name: 13 },
        { name: 14 },
      ]}
      renderItem={() =>
      <Spacer>
          <RestaurantInfo />
      </Spacer>  
      }
      keyExtractor={(item) => item.name}
      contentContainerStyle={{ padding: 16}}
      />
    
  </SafeAreaS>
)


