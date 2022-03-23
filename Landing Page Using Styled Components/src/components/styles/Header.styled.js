import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  padding: 40px 0;

  h1 {
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 2rem;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const Logo = styled.img``;

export const Image = styled.img`
  width: 375px;
  margin-left: 40px;

  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    margin: 40px 0 30px;
  }
`;
