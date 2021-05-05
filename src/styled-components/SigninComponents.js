import styled from "styled-components";

export const Container = styled.div`
  background-color: #00BEA4;
  height: 100vh;
  padding-top: 40px;
  font-family: "Poppin", sans-serif;

  .header {
    color: #FFF;
    display: flex;
    align-items: center;
    margin-left: 30%;
    font-size: 1.5rem;

    h2 {
      margin-left: 10px;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-size: .9rem;
      user-select: none;
    }
  }

  .main {
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.3),
      -2px -2px 20px rgba(0, 0, 0, 0.3);
    width: 600px;
    height: 500px;
    margin: 50px auto;
    background-color: #FFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    position: relative;

    h3 {
      position: absolute;
      user-select: none;
      top: 25px;
      text-align: center;
      letter-spacing: 2px;
      font-size: 1.6rem;
      color: #00BEA4;
    }

    .login_google {
      width: 80%;
      margin: 10px;

      button {
        width: 100%;
        padding: 10px 15px;
        cursor: pointer;
        outline: none;
        background: #DB4437;
        border: 2px solid #DB4437;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.1rem;
        color: #FFF;
        user-select: none;

        p {
          margin-left: 6px;
        }
      }
    }

    .login_facebook {
      width: 80%;
      margin: 10px;

      button {
        width: 100%;
        padding: 10px 15px;
        cursor: pointer;
        outline: none;
        background: #4267B2;
        border: 2px solid #4267B2;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.1rem;
        color: #FFF;
        
        p {
          margin-left: 6px;
        }
      }
    }

    .login_apple {
      width: 80%;
      margin: 10px;

      button {
        width: 100%;
        padding: 10px 15px;
        cursor: pointer;
        outline: none;
        background: #000000;
        border: 2px solid #000000;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.1rem;
        color: #FFF;

        p {
          margin-left: 6px;
        }
      }
    }

    .login_linkedin {
      width: 80%;
      margin: 10px;

      button {
        width: 100%;
        padding: 10px 15px;
        cursor: pointer;
        outline: none;
        background: #2867B2;
        border: 2px solid #2867B2;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.1rem;
        color: #FFF;

        p {
          margin-left: 6px;
        }
      }
    }
  }
`
