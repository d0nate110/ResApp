import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Card } from 'react-native-paper';
import styled from 'styled-components/native';
import { sizes } from '../../../infrastructure/theme/sizes';
import { space } from '../../../infrastructure/theme/spacing';
import { Spacer } from '../../../components/spacer/spacer.component';

import {
    Info,
    TitleAndOpen,
    Title,
    Rating,
    RatingView,
    WorkHours,
    WorkHoursView,
    Address,
    IsOpenNow,
    OpenColor,
    CloseColor
} from './restaurant-info.styles';



export const RestaurantInfo = ({ restaurant={}}) => {

    const {
        name = "Bombay Street",
        icon,
        photos = [
            'https://fthmb.tqn.com/3jtg5LpmyiNAIKcd5fZEr7SwKKY=/960x0/filters:no_upscale()/croquettes-146666788-582a0bf55f9b58d5b1963511.jpg'],
        adress = "Beverly Hills 23",
        workHours = "Work Hours: 10:00 - 22:00",
        openNow = true,
        rating = 4.2,
        isCLosed } = restaurant;

    return (
        <Card>
            <Card.Cover key={name} source={{ uri: photos[0] }} />
            <Info>
                <TitleAndOpen>
                    <Title>{name}</Title>
                    {/* <IsOpenNow>
                        {openNow ? <OpenColor>Open Now</OpenColor> : <CloseColor>Closed Now</CloseColor>}
                    </IsOpenNow> */}
                </TitleAndOpen>
                <Address>{adress}</Address>
                <WorkHoursView>
                    <WorkHours> { workHours }</WorkHours>
                </WorkHoursView>
                <RatingView>
                    <Rating> Rating: {rating}/5</Rating>
                </RatingView>
            </Info>    
        </Card>
    );
}



