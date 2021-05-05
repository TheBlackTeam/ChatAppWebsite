import styled from "styled-components";

const generateColor = () => {
    const colors = ["red", "blue", "yellow", "green", "red", "blue", "yellow", "green", "red", "blue", "yellow", "green"]
    let index = Math.floor(Math.random() * 10)
    console.log(colors[index])
    return colors[index];
}


export const MessageMeContainer = styled.div`
  width: 100%;
  min-height: 75px;
  background-color: #262D31;
  border-radius: 20px;
  grid-column: 2/3;

  .main {
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 6px;

    .name-section {
      color: ${generateColor()};
      width: 100%;
      font-size: 18px;
      margin: 6px;
    }

    .message-content {
      color: #FFF;
      margin-left: 6px;
      margin-bottom: 15px;
    }

    .message-info {
      color: #FFF;
      font-size: 12px;
      position: absolute;
      right: 9px;
      bottom: 7px;
    }
  }

`
