import styled from 'styled-components'

export const Background = styled.header`
  background-image: url(${(props) => props.$img});
  height: 100vh;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
  }
`

export const Info = styled.div`
  z-index: 2;
  padding: 20px;
  width: 50%;

  h1 {
    font-size: 5em;
    font-weight: 700;
    color: #fff;
  }

  p {
    font-size: 20px;
    font-weight: 500;
    color: #fff;
    margin-top: 30px;
    margin-bottom: 20px;
  }
`
export const Poster = styled.div`
  z-index: 3;

  img {
    width: 400px;
    border-radius: 30px;
  }
`

export const Container = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 1500px;
  height: 100%;
`

export const ContainerButton = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;
`
