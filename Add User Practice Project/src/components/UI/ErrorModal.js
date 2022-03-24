import React from "react";
import { Card } from "../UI/Card.styled";
import styled from "styled-components";
import { Button } from "../UI/Button.styled";

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;

export const Modal = styled(Card)`
  position: fixed;
  top: 30vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  overflow: hidden;

  & header {
    background: #4f005f;
    padding: 1rem;
  }

  & h2 {
    margin: 0;
    color: white;
  }

  div {
    padding: 1rem;
  }

  footer {
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
  }

  @media (min-width: 768px) {
    left: calc(50% - 20rem);
    width: 40rem;
  }
`;

const ErrorModal = (props) => {
  return (
    <div>
      <BackDrop onClick={props.onOkay} />
      <Modal>
        <header>
          <h2>{props.title}</h2>
        </header>
        <div>
          <p>{props.message}</p>
        </div>
        <footer>
          <Button onClick={props.onOkay}>Okay</Button>
        </footer>
      </Modal>
    </div>
  );
};

export default ErrorModal;
