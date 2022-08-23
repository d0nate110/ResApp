import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import styled from 'styled-components/native';
import { sizes } from '../../../infrastructure/theme/sizes';
import { space } from '../../../infrastructure/theme/spacing';


const RestaurantCard = styled(Card)`
  
`;
const RestaurantCCover = styled(Card.Cover)`
    
`;

const Info = styled.View`
    padding: ${ (props) => props.theme.space[1]};
`;

const Title = styled.Text`
    font-family: ${ (props) => props.theme.fonts.body};
    font-size: ${ (props) => props.theme.fontSizes.title};
    padding: ${ (props) => props.theme.sizes[1]};
    color: ${ (props) => props.theme.colors.ui.primary};
`;

const Rating = styled.Text`
    font-family: ${ (props) => props.theme.fonts.body};
    font-size: ${ (props) => props.theme.fontSizes.title};
    margin-right: ${ (props) => props.theme.space[3]};
    padding-bottom: ${ (props) => props.theme.space[3]};
`;
const RatingView = styled.View`
    flex-direction: row;
    justify-content: flex-end;
`;


const Address = styled.Text`
    padding: ${ (props) => props.theme.space[3]};
    font-family: ${ (props) => props.theme.fonts.heading};
`;

export const RestaurantInfo = ({ restaurant={}}) => {

    const {
        name = "Bombay Street",
        icon,
        photos = [
            'https://fthmb.tqn.com/3jtg5LpmyiNAIKcd5fZEr7SwKKY=/960x0/filters:no_upscale()/croquettes-146666788-582a0bf55f9b58d5b1963511.jpg'],
        adress = "Beverly Hills 23",
        openNow = true,
        rating = 4.2,
        isCLosed } = restaurant;

    return (
        <RestaurantCard>
            <RestaurantCCover key={name} source={{ uri: photos[0] }} />
            <Info>
                <Title>{name}</Title>
                <Address>{adress}</Address>
                <RatingView>
                    <Rating> Rating: { rating }/5</Rating>
                </RatingView>
            </Info>    
        </RestaurantCard>
        
    );

}



