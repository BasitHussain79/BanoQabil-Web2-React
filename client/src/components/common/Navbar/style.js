import styled from 'styled-components';

// export const Nav = styled.div`
//   background-color: #333;
//   color: #efefef;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;

//   & ul: {
//     list-style: none;
//     display: flex;
//   }
// `;

export const Nav = styled.div`
  background-color: #333;
  color: #efefef;

  & .container {
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & ul {
      list-style: none;
      display: flex;

      & li {
        padding: 8px 12px;

        & a {
          color: #efefef;
          text-decoration: none;
        }
      }
    }
  }
`;
