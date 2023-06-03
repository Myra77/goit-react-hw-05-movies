import styled from '@emotion/styled';

export const List = styled.ul`
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
`;

export const ListItem = styled.li`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 330px;
    transition: border-color 0.3s, box-shadow 0.3s;

`;

export const Image = styled.img`
    display: block;
    width: 100%;
    height: 300px;
    object-fit: cover;
`;