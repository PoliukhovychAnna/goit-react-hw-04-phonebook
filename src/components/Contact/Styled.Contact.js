import styled from "styled-components";
export const StyledContact = styled.li`
  position: relative;
  height: 60px;
  width: 300px;
  padding: 20px;
  border-radius: 6px;
  border: 3px solid hsla(323, 87%, 50%, 0.664);

  span {
    display: block;
    margin-top: 8px;
  }
  button {
    position: absolute;
    top: 33px;
    right: 20px;
    width: 100px;
    height: 37px;
    font-size: 15px;
    font-weight: 500;
    border-radius: 30px;
    transition: all 300ms cubic-bezier(0.39, 0.575, 0.565, 1);
    background-color: hsla(323, 87%, 50%, 0.664);
    border: 1px solid #111;
    cursor: pointer;
    &:hover {
      border: 2px solid #111;
      box-shadow: 0px 0px 26px 8px hsla(323, 87%, 50%, 0.664);
      background-color: #000428;
      color: hsla(323, 87%, 50%, 0.664);
    }
  }
`;