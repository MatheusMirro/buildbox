import styled from "styled-components";
import upload from "../../assets/upload-svg.svg";

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  margin: auto;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #313131;
  height: 351px;
  border: 0.5px solid #3d3d3d;
  border-radius: 2.5px;

  padding: 20px;

  #btn-content {
    display: flex;
    justify-content: space-evenly;
    max-width: fit-content;
    margin-right: 0;
    margin-left: auto;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    flex-grow: 1;
    justify-content: space-evenly;
  }
`;

export const Title = styled.h1`
  color: white;
`;

export const Label = styled.label`
  /* background-color: #313131; */

  display: flex;
  align-items: center;
  margin-left: 43%;
  cursor: pointer;
  max-width: 21%;
`;

export const File = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

export const Img = styled.svg`
  background-image: url(${upload});
  background-repeat: no-repeat;
  height: 125px;
`;

export const InputName = styled.input`
  height: 3em;
  color: white;
  border: none;
  border-radius: 8.8px;
  outline: none;
  outline-offset: 0px;
  box-shadow: 0;
  background-color: #494949;

  padding-left: 15px;
`;

export const TextArea = styled.textarea`
  height: 4.5em;
  color: white;
  border: none;
  overflow: hidden;
  resize: none;
  border-radius: 8.8px;
  outline: none;
  outline-offset: 0px;
  box-shadow: 0;
  background-color: #494949;
  text-align: justify;

  padding-bottom: 18px;
  padding-left: 15px;
`;

export const Button = styled.button`
  background-color: #71bb00;
  color: #ffffff;

  width: 7.5em;
  height: 3em;
  border-radius: 8px;
  cursor: pointer;
  border: none;
`;

export const DeleteButton = styled.button`
  background-color: transparent;
  color: #565656;

  border-radius: 8px;
  cursor: pointer;
  border: none;
  text-decoration: underline;
`;

export const ButtonDisable = styled.button`
  background-color: #343434;
  color: #ffffff;

  width: 7.5em;
  height: 3em;
  border-radius: 8px;
  border: none;
`;

export const DeleteDisable = styled.button`
  background-color: transparent;
  color: #565656;

  border-radius: 8px;
  border: none;
  text-decoration: underline;
`;
