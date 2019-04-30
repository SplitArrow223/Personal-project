import styled from 'styled-components'

 export const Button = styled.button`
  background: none;
  border-radius: 0px;
  text-align: center;
  font-size: 25px;
  font-weight: 900;
  border-color: #008cba;
  font-family: 'Montserrat';
  background-image: linear-gradient(to right, rgb(28, 110, 164) 0%, rgb(35, 136, 203) 50%, rgb(20, 78, 117) 100%); 
  box-shadow: rgb(0, 0, 0) 5px 5px 15px 3px;
  border: 8px outset rgb(28, 110, 164); 
  display: inline-block;
  &:hover {
    color: whitesmoke;
    background-color: #163a6399;
  };
`;
export const A = styled.a`
  position: relative;
  background: blue;
  transform: translate(-50%,-50%);
  width: 150px;
  height: 50px;
  text-align: center;
  line-height:60px;
  text-decoration: none;
  color: red;
  font-size: 25px;
  display: block;
  align-items: center;
  justify-content: center;
  top: 30px;
  font-family: 'Montserrat';
  mix-blend-mode: screen;
  
  &:before,
  &:after,
  & span:before,
  & span:after
  {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    background: black;
    transition: .5s;
    z-index: -1;
  }
  
  &:before 
  {
    top: -2px;
    left: -2px;
  }
  
  &:after 
  {
    top: -2px;
    right: -2px;
  }
  & span:before 
  {
    bottom: -2px;
    left: -2px;
  }
  & span:after 
  {
    bottom: -2px;
    right: -2px;
  }
  &:hover:before,
  &:hover:after,
  &:hover span:before,
  &:hover span:after
  {
    width: calc(150px / 2);
    height: calc(50px / 2);
  }
`;