import styled from "styled-components";

export const Container = styled.div`
  .main {
    display: flex;
    align-items: center;
    position: relative;
    padding: 8px 6px;

    :after {
      content: "";
      width: 85%;
      display: block;
      position: absolute;
      bottom: -5px;
      left: 60px;
      background-color: #323739;
      height: 2px;
    }

    .left {
      width: 60px;
      display: flex;
      align-items: center;

      .image-area {
        margin-left: 8px;

        img {
          border-radius: 50%;
        }
      }
    }

    .middle {
      flex: 1;


      .context-area {
        width: 100%;
        color: rgb(198, 198, 198);
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        font-size: 15px;

        h3 {
          font-size: 20px;
          margin-bottom: 5px;
        }

        * {
          font-weight: 300;
        }
      }
    }

    .right {
      display: flex;
      flex-direction: column;
      color: rgb(198, 198, 198);
      font-size: 15px;
      margin-right: 5px;
      overflow-x: hidden;

      .muted-case {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        align-self: flex-end;
        margin-top: 5px;
        cursor: pointer;
        width: 60px;
        transition: all .2s linear;
        color: rgb(67, 69, 73);

        .down-icon {
          opacity: 0;
          visibility: hidden;
          transform: translateX(15px);
          transition: all .2s linear;
        }

        :hover {
          .down-icon {
            opacity: 1;
            visibility: visible;
            transform: translateX(-10px);
          }

          .mute-show {
            transform: translateX(-13px);
          }
        }

        .mute-show {
          font-size: 18px;
          transition: all .2s linear;
        }

        .unmute-hide {
          display: none;
        }
      }
    }


  }
`
