import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  padding: 0 5rem;
  background-color: var(--primary-color);
  color: var(--secondary-color);
`

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 25%;
  @media(max-width: 600px) {
    display: none;
  }
`

// export const ToggleBugger = styled.div`
//   width: 50px;
//   height: 50px;
// `

export const NavItem = styled.li`
  a {
    text-decoration: none;
    color: inherit;
  }
  list-style-type: none;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    transform: translateY(10px);
    background-color: var(--secondary-color);
    height: 3px;
    width: 0%;
    transition: width 0.5s;
  }

  &:hover {
    &::before {
      width: 100%;
    }
  }
`
