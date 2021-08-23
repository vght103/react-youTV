import React from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./app";
import AuthService from "./service/auth_service";
import ImageUpload from "./service/image_upload";
import ImgFileInput from "./components/img_file_input/img_file_input";
import CardRepository from "./service/card_repository";

const authService = new AuthService();
const imageUpload = new ImageUpload();
const cardRepository = new CardRepository();

const FileInput = (props) => (
  <ImgFileInput {...props} imageUpload={imageUpload} />
);

ReactDOM.render(
  <React.StrictMode>
    <App
      authService={authService}
      FileInput={FileInput}
      cardRepository={cardRepository}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
