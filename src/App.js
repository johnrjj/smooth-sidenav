import React, { Component } from 'react';
import styled from 'styled-components';
import { SideMenu } from './components/SideMenu';
import closeX from './assets/x.svg';
import menuThreeLines from './assets/menu-button.svg';

// design from https://dribbble.com/shots/2715673-Product-Guidelines
// article on 60fps animations & some css: https://medium.com/outsystems-experts/how-to-achieve-60-fps-animations-with-css3-db7b98610108

const AppContainer = styled.div``;

const NavLinksContainer = styled.div``;

const LogoContainer = styled.div`
  margin-top: 4rem;
  margin-bottom: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavLinksHeader = styled.div`
  font-size: 16px;
  font-weight: 500;
  opacity: 0.5;
  padding-left: calc(2rem + 4px);
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const NavLinkContainer = styled.li`
  background: ${props =>
    props.selected ? 'rgba(255, 255, 255, 0.2)' : 'inherit'};
  border-left: ${props => (props.selected ? '4px solid white' : 'none')};
  padding-left: ${props => (props.selected ? '2rem' : 'calc(2rem + 4px)')};
  list-style-type: none;
  cursor: pointer;
  :hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const NavLink = styled.div`
  opacity: 0.8;
  font-weight: ${props => (props.selected ? '500' : '300')};
`;

const Logo = styled.div`
  border-radius: 50%;
  background-color: #fff;
  width: 50px;
  opacity: 0.5;
  height: 50px;
`;

const SideMenuCloseButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 1rem;
`;

const SideMenuCloseButtonImg = styled.img`
  cursor: pointer;
  height: 16px;
`;

const Header = styled.div`
  display: flex;
  position: relative;
  height: 4rem;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  box-shadow: 0 2px 4px 1px rgba(0, 0, 0, .14);
  height: 3rem;
`;

const HeaderMenuButtonContainer = styled.div`
  cursor: pointer;
  padding: 1rem;
`;

const HeaderMenuButton = styled.img`height: 20px;`;

const Main = styled.main``;

const Headline = styled.h1`font-size: 35px;`;

const ContentTitle = styled.h2`
  font-size: 20px;
  font-weight: 400;
  color: #fc6e57;
  margin-bottom: 1rem;
`;

const PageContainer = styled.div`margin: 3rem 6rem;`;

const HorizontalLine = styled.hr`
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #ccc;
  margin: 1rem 0 2rem 0;
  padding: 0;
`;

const ParagraphContainer = styled.div`width: 50%;`;

const ParagraphText = styled.p`line-height: 1.3;`;

class App extends Component {
  state = {
    menuOpen: false,
  };

  render() {
    return (
      <AppContainer>
        <SideMenu visible={this.state.menuOpen}>
          <SideMenuCloseButtonContainer>
            <SideMenuCloseButtonImg
              style={{ cursor: 'pointer' }}
              onClick={() => this.setState({ menuOpen: !this.state.menuOpen })}
              src={closeX}
            />
          </SideMenuCloseButtonContainer>
          <LogoContainer>
            <Logo />
          </LogoContainer>
          <NavLinksContainer>
            <NavLinksHeader>Favorites</NavLinksHeader>
            <ul>
              <NavLinkContainer selected={false}>
                <NavLink>Ipsum Dorum</NavLink>
              </NavLinkContainer>
              <NavLinkContainer selected={true}>
                <NavLink selected={true}>Some favorite</NavLink>
              </NavLinkContainer>
              <NavLinkContainer selected={false}>
                <NavLink>Another one</NavLink>
              </NavLinkContainer>
            </ul>
          </NavLinksContainer>
        </SideMenu>
        <Main>
          <Header>
            <HeaderMenuButtonContainer
              onClick={() => this.setState({ menuOpen: !this.state.menuOpen })}
            >
              <HeaderMenuButton src={menuThreeLines} alt="Open side menu" />
            </HeaderMenuButtonContainer>
          </Header>
          <PageContainer>
            <Headline>Ipsum Dorum</Headline>
            <HorizontalLine />
            <section>
              <ContentTitle>Content Title</ContentTitle>
              <ParagraphContainer>
                <ParagraphText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum
                </ParagraphText>
              </ParagraphContainer>
            </section>
          </PageContainer>
        </Main>
      </AppContainer>
    );
  }
}

export default App;
