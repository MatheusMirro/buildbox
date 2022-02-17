import { iPost } from "../../Interface";
import {
  Container,
  SubContainer,
  ImgContainer,
  UserContainer,
  FeedContainer,
  SendContainer,
  FeedMessageContainer,
  UserSendContainer,
  UserImg,
  DeleteTask,
} from "./styles";

interface TaskProps {
  task: iPost;
  deletePost(DeleteTaskById: number): void;
  preview(preview: string): string;
}

function Feed({ task, deletePost }: TaskProps) {
  return (
    <Container>
      <SubContainer>
        <ImgContainer>
          <UserImg src={task.previewImg} alt="logo" />
        </ImgContainer>
        <FeedContainer>
          <ImgContainer>
            <DeleteTask onClick={() => deletePost(task.id)}>X</DeleteTask>
          </ImgContainer>
          <FeedMessageContainer>{task.namePost}</FeedMessageContainer>
          <UserContainer>
            <SendContainer>Enviado por</SendContainer>
            <UserSendContainer>{task.nameUser}</UserSendContainer>
          </UserContainer>
        </FeedContainer>
      </SubContainer>
    </Container>
  );
}

export default Feed;
