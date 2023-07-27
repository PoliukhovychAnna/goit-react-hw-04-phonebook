import styled from "styled-components";
export const ContactFormContainer = styled.form`
  margin-left: 50px;
  margin-right: 100px;
  border-radius: 6px;
  border: 3px solid hsla(323, 87%, 50%, 0.664);
  width: 400px;
  padding: 20px;
  h4 {
    margin-left: 70px;
  }
  input {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
    display: block;
    width: 250px;
    height: 30px;
    border-radius: 4px;
  }

  button {
    width: 150px;
    height: 40px;
    border-radius: 30px;
    margin-left: 120px;
    font-size: 15px;
    font-weight: 600;
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