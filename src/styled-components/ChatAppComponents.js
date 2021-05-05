import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  background-color: #090E11;
  padding: 56px 6vw;

  .main {
    display: flex;


    .left-main {
      width: 400px;
      background-color: #131C21;
      height: 700px;

      .profile-description {
        background-color: #2A2F32;
        display: flex;
        align-items: center;
        height: 65px;
        padding: 15px 0;
        justify-content: space-between;

        .pd-left {
          display: flex;
          align-items: center;
          flex: 1;

          .profile-img {
            display: flex;
            align-items: center;
            margin-left: 15px;

            img {
              width: 40px;
              height: 40px;
              border-radius: 50%;
            }
          }
        }

        .pd-right {
          display: flex;
          align-items: center;
          justify-content: space-around;
          width: 50px;

          .add-chat {
            color: #B1B3B5;
            cursor: pointer;
            font-size: 25px;
            margin-right: 12px;
          }

          .more {
            color: #B1B3B5;
            cursor: pointer;
            font-size: 25px;
            position: relative;
            margin-right: 12px;

            .more-dropdown {
              position: absolute;
              right: 0;
              z-index: 2;

             
              .more-dropdown-menu {
                margin: 10px 20px 0 0;
                background-color: rgb(42, 47, 50);
                border-radius: 4px;
                color: #B1B3B5;
                box-shadow: 2px 2px 4px rgba(0,0,0,0.25);
                /*
                padding: 0;
                opacity: 0;
                visibility: hidden;
                transform: translate(100px); */
                width: 0;
                transition: all .3s linear;
                height: 0;
                overflow: hidden;
                li {
                  list-style: none;
                }
                a {
                  color: inherit;
                  text-decoration: none;
                  font-size: 25px;
                  display: block;
                  padding: 10px;
                  font-weight: 400;
                }
              }
            }
            .show {
                .more-dropdown-menu {
                  /* 
                  padding: 8px 20px;
                  opacity: 1;
                  visibility: visible;          */
                  width: 180px;
                  height: auto;
                  /* transform: translate(0); */
                }
              }
              
          }
        }
      }

      .chats-area {
        .search-field {
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid #242d32;
          padding: 5px 10px;

          .search {
            display: grid;
            grid-template-rows: 1fr;
            grid-template-columns: 35px 1fr;
            border: 1px solid #323739;
            background-color: #323739;
            border-radius: 20px;
            width: 100%;


            input {
              grid-column: 2/3;
              grid-row: 1/2;
              border: none;
              background-color: transparent;
              outline: none;
              color: #FFF;
              padding: 8px 12px;
            }

            .icon {
              outline: none;
              border: none;
              background: transparent;
              cursor: pointer;
              grid-column: 1/2;
              grid-row: 1/2;
              width: 35px;
              position: relative;
              color: hsla(0, 0%, 100%, 0.38);
              font-weight: 500;

              div {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
              }

              .search-icon-hide {
                opacity: 0;
                visibility: hidden;
                transform-origin: 0 0;
              }

              .search-icon-show {
                animation: backToSearch 0.3s linear;
                transform-origin: 0 0;
              }

              .back-icon-hide {
                opacity: 0;
                visibility: hidden;
                transform-origin: 0 0;
              }

              .back-icon-show {
                animation: searchToBack .3s linear;
                transform-origin: 0 0;
              }

              @keyframes backToSearch {
                from {
                  transform: rotate(90deg) translate(-50%, -50%);
                  visibility: visible;
                }
                to {
                  transform: rotate(0) translate(-50%, -50%);
                  visibility: hidden;
                }
              }

              @keyframes searchToBack {
                from {
                  transform: rotate(-90deg) translate(-50%, -50%);
                  visibility: visible;
                }
                to {
                  transform: rotate(0) translate(-50%, -50%);
                  visibility: hidden;
                }
              }
            }
          }
        }
      }
      .users-area {
        height: 600px;
        width: 100%;
        overflow-y: auto;
        
        .user {
          width: 100%;
          height: 75px;
        }
      }
    }
    
    .right-main {
      flex: 1;
      height: 700px;
    }
  }
`
