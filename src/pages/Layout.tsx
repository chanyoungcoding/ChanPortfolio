import { Outlet, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Example } from '../components/NavbarToggle/Example'

const Layout = () => {

  const navigate = useNavigate();

  const onClickChan = () => {
    navigate('/');
  }

  return (
    <>
      <Example/>
      <Navbar>
        <Title onClick={onClickChan}>Chan</Title>
        <p>010-8510-6425</p>
        <p>white1614@naver.com</p>
      </Navbar>
      <Outlet/>
    </>
  )
}

const Navbar = styled.div`
  position: fixed;
  z-index: 99;
  margin: 30px 50px;
  display: flex;
  align-items: center;
  p {
    color: gray;
    margin-right: 100px;
  }
`

const Title = styled.h1`
  margin-right: 100px;
  font-size: 2rem;
  color: #5046e6;
  cursor: pointer;
`

export default Layout