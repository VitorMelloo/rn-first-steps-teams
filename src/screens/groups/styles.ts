import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.GRAY_700};
  padding: 24px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  text-align: center;
  color: ${({theme}) => theme.COLORS.WHITE};
  font-size: ${({theme}) => theme.FONT_SIZE.XL};
`;

