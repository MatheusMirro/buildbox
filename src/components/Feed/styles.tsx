import styled from "styled-components";
import game from "../../assets/user.svg";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #313131;
  border: 0.5px solid #3d3d3d;
  border-radius: 2px;

  width: 100%;
  margin-top: 20px;
`;

export const SubContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ImgContainer = styled.span`
  flex-grow: 1;
`;

export const UserImg = styled.img`
  background-repeat: no-repeat;
  background-position: center;
  width: 101px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  padding: 10px;
`;

export const FeedContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 100%;
  text-align: start;
  padding-right: 5%;
  padding-top: 20px;
`;

export const FeedMessageContainer = styled.h1`
  color: #919191;
  font-size: 15px;
  text-align: left;
  padding-left: 2px;
`;

export const UserContainer = styled.div`
  flex-direction: column;
  display: flex;
  width: 100%;
  margin-top: 20px;
`;

export const SendContainer = styled.p`
  color: #4b4b4b;
  font-size: 12px;
`;

export const UserSendContainer = styled.h3`
  color: #717171;
  font-size: 14px;
  margin-top: 0;
`;

export const DeleteTask = styled.span`
  display: flex;
  position: absolute;
  border: solid 1px green;
  font-size: 15px;
  width: 16px;
  height: 16px;
  justify-content: center;
  background-color: transparent;
  border-radius: 7px;
  color: red;
  margin-left: 20em;
  cursor: pointer;
`;
