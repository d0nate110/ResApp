import styled from 'styled-components/native';
import { Card } from 'react-native';

export const Info = styled.View`
    padding: ${(props) => props.theme.space[1]};
`;
export const TitleAndOpen = styled.View`
    flex-direction: row;
`;

export const Title = styled.Text`
    font-family: ${ (props) => props.theme.fonts.body};
    font-size: ${ (props) => props.theme.fontSizes.h5};
    padding: ${ (props) => props.theme.sizes[1]};
    color: ${ (props) => props.theme.colors.ui.primary};
`;

export const Rating = styled.Text`
    font-family: ${ (props) => props.theme.fonts.body};
    font-size: ${ (props) => props.theme.fontSizes.title};
    margin-right: ${ (props) => props.theme.space[3]};
    padding-bottom: ${ (props) => props.theme.space[3]};
`;
export const RatingView = styled.View`
    flex-direction: row;
    justify-content: flex-end;
`;

export const WorkHoursView = styled.View`
    padding-left: ${ (props) => props.theme.sizes[0]};
`;

export const WorkHours = styled.Text`
    padding: ${ (props) => props.theme.space[1]}; 
    padding-right: ${ (props) => props.theme.space[2]};
    font-family: ${ (props) => props.theme.fonts.heading}; 
    font-size:  ${ (props) => props.theme.fontSizes.body};
    color: ${ (props) => props.theme.colors.ui.secondary};
`; 

export const Address = styled.Text`
    padding: ${ (props) => props.theme.space[2]};
    margin-left: ${ (props) => props.theme.space[2]};
    font-family: ${ (props) => props.theme.fonts.heading};
    font-size:  ${ (props) => props.theme.fontSizes.body};
    color: ${ (props) => props.theme.colors.ui.secondary};
`;

export const IsOpenNow = styled.View`
    padding: ${ (props) => props.theme.sizes[1]};
    padding-left: ${ (props) => props.theme.space[5]};
    margin-left: ${ (props) => props.theme.space[4]};
   
`;

export const OpenColor = styled.Text`
    color: ${ (props) => props.theme.colors.text.success}
    font-family: ${ (props) => props.theme.fonts.body};
    font-size: ${ (props) => props.theme.fontSizes.title};
`;

export const CloseColor = styled.Text`
    color: ${ (props) => props.theme.colors.text.error}
    font-family: ${ (props) => props.theme.fonts.body};
    font-size: ${ (props) => props.theme.fontSizes.title};
`;