import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100px;
  width: 100%;
  z-index: 99;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 50px;
  background-color: ${(props) =>
    props.$changeBackground ? 'rgba(0,0,0, 0.8)' : 'transparent'};
  transition: background-color 0.6s ease-in-out;

  img {
    width: 30%;
  }
`

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 50px;
`

export const Li = styled.li`
  font-size: 28px;
  font-weight: 600;
  position: relative;
  cursor: pointer;

  a {
    text-decoration: none;
    color: #fff;
  }

  &::after {
    content: '';
    height: 3px;
    width: ${(props) => (props.$isActive ? '100%' : 0)};
    background-color: #074ba7;
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    transition: width 0.5s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`
