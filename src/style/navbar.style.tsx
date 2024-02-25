import styled from "styled-components";

export const NavbarContainer = styled.div`
  background: linear-gradient(
    274deg,
    rgb(120, 173, 187) 100%,
    rgb(161, 190, 201) 0%
  );
  height: 72px;
  display: grid;
  justify-content: center;
`;
export const NavList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  button {
    border: none;
    outline: none;
    background: var(--text-primary);
    padding: 10px 20px;
    border-radius: 6px;
    font-size: 16px;
    color: var(--text-secondary);
    cursor: pointer;
  }
`;

export const Logo = styled.div`
  img {
    width: 120px;
    cursor: pointer;
  }
`;
export const NavLink = styled.div`
  color: var(--text-primary);
  font-size: 16px;
  cursor: pointer;
`;
export const t = styled.div``;
