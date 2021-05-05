import styled from 'styled-components';
import backImage from "../assets/images/back-img.jpg"

// const colors = [""]

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 2px solid #323739;
  height: 100%;

  .header {
    display: flex;
    align-items: center;
    flex: 1;
    color: #B1B3B5;
    background-color: #2A2F32;
    height: 65px;
    padding: 15px 0;

    .img-section {
      margin-left: 5px;

      img {
        border-radius: 50%;
        width: 40px;
        height: 40px;
      }
    }

    .header-description {
      flex: 1;
      margin-left: 8px;

      h3 {
        font-size: 20px;
        margin-bottom: 5px;
      }

      p {
        font-size: 15px;
        width: 100%;
        overflow-x: hidden;
        text-overflow: ellipsis;
      }

    }

    .header-more-section {
      display: flex;
      margin-right: 5px;
      align-items: center;

      * {
        margin-left: 12px;
        cursor: pointer;
      }
    }

  }

  .messages-area {
    background: url(${backImage});
    width: 100%;
    height: 90%;
    overflow-y: auto;

    .message-container {
      width: 100%;
      height: auto;
      padding: 12px;

      .message {
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
    }

  }

  .send-message-area {
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    background-color: #2A2F32;
    color: #B1B3B5;

    * {
      font-size: 16px;
    }

    .emoji-icon {
      width: 60px;
      display: flex;
      justify-content: space-between;

      * {
        font-size: 25px;
        cursor: pointer;
      }

      :first-child {
        margin-left: 10px;
        font-size: 25px;
        cursor: pointer;
      }
    }

    .write-message-section {
      flex: 1;
      display: flex;
      background-color: #323739;
      border-radius: 28px;
      margin-left: 10px;
      margin-right: 10px;

      input {
        width: 100%;
        outline: none;
        border: none;
        padding: 13px;
        background-color: transparent;
        color: #B1B3B5;

      }
    }

    .send-section {
      margin-right: 6px;

      .mic-icon {

        * {
          font-size: 25px;
          cursor: pointer;
        }
      }

      .send-icon {
        display: none;

        * {
          font-size: 25px;
          cursor: pointer;
        }
      }
    }


  }
`
