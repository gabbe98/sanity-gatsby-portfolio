import React from "react";
import { ThemeProvider } from "styled-components";
import ChatBot from "react-simple-chatbot";

const config ={
    headerTitle: "Gabbe Bot",
    hideUserAvatar: true,
    inputStyle: {
        display: "none"
    }
  }

const theme = {
    background: "#191919",
    fontFamily: "Biotif",
    headerBgColor: "#222222",
    headerFontColor: "#fff",
    headerFontSize: "15px",
    botBubbleColor: "#222222",
    botFontColor: "#fff",
    userBubbleColor: "#ffc4ff",
    userFontColor: "#fff",
  };

const GabbeBot = () => {
    return(
        <ThemeProvider theme={theme}>
            <ChatBot
                steps={[
                {
                    id: "1",
                    message: "What would you like to know?",
                    trigger: "2",
                    hideInput: true
                },
                {
                    id: "2",
                    options: [
                        { value: 1, label: "Where you're from. 🏠", trigger: "3" },
                        { value: 2, label: "Your email address. 📧", trigger: "4" },
                        { value: 3, label: "I would like to hire you! 💼", trigger: "5" },
                        { value: 4, label: "What's your favorite video game? 🎮", trigger: "6" },
                    ],
                    hideInput: true
                },
                {
                    id: "3",
                    message: "A small town called Falköping in Sweden. 😃",
                    trigger: "2",
                    hideInput: true
                },
                {
                    id: "4",
                    message: "My email address is Gabriel.dahlberg1998@ gmail.com 😃",
                    trigger: "2",
                    hideInput: true
                },
                {
                    id: "5",
                    message: "Yippie, great! The easiest way to reach me would be via my Linkedin or Email. 😃",
                    trigger: "2",
                    hideInput: true
                },
                {
                    id: "6",
                    message: "Hard question but probably the game that i love to hate is League of Legends. 😂",
                    trigger: "2",
                    hideInput: true
                },
                ]}
                {...config}
            />
        </ThemeProvider>
    )
};

export default GabbeBot