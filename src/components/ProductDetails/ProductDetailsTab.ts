// This should be a typescript file only but for the sake of the starting template I didn't fill it with the code
// and also I made it jsx so that it doesn't throw errors in the directory

import styled from "styled-components";
export const Tabs = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #fff;
  font-family: Open Sans;
  height: 3em;
  z-index: 1;
`;

export const Tab = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  position: relative;
  width: 100%;
  margin-right: 0.1em;
  font-size: 1em;
  border: ${(props:any) => (props.active ? "1px solid #ccc" : "")};
  border-bottom: ${(props:any) => (props.active ? "none" : "")};
  background-color: ${(props:any) => (props.active ? "white" : "lightgray")};
  height: ${(props:any) => (props.active ? "3em" : "2.6em; top:.4em")};
  transition: background-color 0.5s ease-in-out;
  :hover {
    background-color: white;
  }
`;
export const Content = styled.div`
  ${(props:any) => (props.active ? "" : "display:none")}
`;
