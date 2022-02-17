import React, { useState, useEffect, useRef } from "react";
import Feed from "../Feed/index";
import { iPost } from "../../Interface";

import {
  Container,
  File,
  Label,
  InputName,
  TextArea,
  Button,
  DeleteButton,
  Img,
  ButtonDisable,
  DeleteDisable,
} from "./styles";

function User() {
  const [name, setName] = useState<string>("");
  const [posts, setPosts] = useState<string>("");
  const [image, setImage] = useState<File>();
  const [preview, setPreview] = useState<string>();
  const [content, setContent] = useState<iPost[]>([]);
  const fileInput = useRef<HTMLInputElement>();

  //Adicionando um novo post
  function addPost(): void {
    const randomID = (num: number) => Math.floor(Math.random() * num);

    //Criação do conteudo do proximo post
    const newContent = {
      id: randomID(9999999),
      nameUser: name,
      namePost: posts,
      previewImg: preview,
    };
    setContent([...content, newContent]);

    //Resetando os inputs após enviar o post
    setName("");
    setPosts("");
    setPreview("");
  }

  //Limpando inputs
  const resetInputField = (e: any) => {
    e.preventDefault();
    setName("");
    setPosts("");
    setPreview("");
  };

  //Deletar post
  function deletePost(DeletePostById: number): void {
    setContent(content.filter((postName) => postName.id !== DeletePostById));
  }

  //Criando disparo da funcao imagem
  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);

  return (
    <div className="globalContainer">
      <Container>
        <form>
          <Label>
            {preview ? (
              <img
                src={preview}
                style={{
                  height: "125px",
                  width: "125px",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            ) : (
              <Img
                onClick={(event) => {
                  event.preventDefault();
                  fileInput.current.click();
                }}
              ></Img>
            )}
            <File
              type="file"
              style={{ display: "none" }}
              ref={fileInput}
              accept="image/*"
              onChange={(event) => {
                const file = event.target.files[0];
                if (file) {
                  setImage(file);
                } else {
                  setImage(null);
                }
              }}
            />
          </Label>
          <InputName
            placeholder="Digite seu nome"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
          <TextArea
            placeholder="Mensagem"
            maxLength={290}
            minLength={40}
            value={posts}
            onChange={(event) => setPosts(event.target.value)}
            required
          />
          {!name.length || !posts.length || !preview?.length ? (
            <div id="btn-content">
              <DeleteDisable>Descartar</DeleteDisable>
              <ButtonDisable disabled>Publicar</ButtonDisable>
            </div>
          ) : (
            <div id="btn-content">
              <DeleteButton onClick={resetInputField}>Descartar</DeleteButton>
              <Button type="submit" onClick={addPost}>
                Publicar
              </Button>
            </div>
          )}
        </form>
      </Container>
      {content.map((task, key, preview) => (
        <Feed key={key} task={task} deletePost={deletePost} preview={preview} />
      ))}
    </div>
  );
}
export default User;
