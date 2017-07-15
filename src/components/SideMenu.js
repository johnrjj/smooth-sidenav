import React, { Component } from 'react';
import styled from 'styled-components';

const SideMenuContainer = styled.aside`
  color: #fff;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 150;
  pointer-events: ${props => props.visible ? 'auto' : 'none'};
  :after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    opacity: ${props => props.visible ? 1 : 0};
    will-change: opacity;
    pointer-events: ${props => props.visible ? 'auto' : 'none'};
    transition: opacity 0.3s cubic-bezier(0,0,0.3,1);  
  };
`;

const SlideableMenu = styled.div`
  background: linear-gradient(#ED6153, #ED6153 50%, #F9B16D);
  line-height: 3;
  position: relative;
  max-width: 300px;
  width: 90%;
  height: 100%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
  display: flex;
  contain: strict;
  flex-direction: column;
  will-change: transform;
  z-index: 160;
  pointer-events: auto;
  transition: ${props => props.visible ? 'all 230ms ease-in' : 'all 330ms ease-out'};
  transform: ${props => props.visible ? 'none' : 'translateX(-103%)'};
`;

const SideMenu = ({ visible, children, ...rest }) => (
  <SideMenuContainer visible={visible}>
    <SlideableMenu visible={visible}>
      { children }
    </SlideableMenu>
  </SideMenuContainer>
);

export { SideMenu };