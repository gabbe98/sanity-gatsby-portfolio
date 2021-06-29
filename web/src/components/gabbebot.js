import React from "react";
import { ThemeProvider } from "styled-components";
import ChatBot from "react-simple-chatbot";

const config ={
    floating: true,
    opened: false,
    headerTitle: "Gabbe Bot",
    hideUserAvatar: true,
    inputStyle: {
        display: "none"
    },
    customStyle: {
        background: "#222222",
        color: "#fff",
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
    userBubbleColor: "#222222",
    userFontColor: "#fff",
  };

const GabbeBot = () => {
    return(
        <ThemeProvider theme={theme}>
            <ChatBot
                steps={[
                {
                    id: "0",
                    message: "Hello my name is Gabbe Bot! I'm the 24/7 version of Gabriel. 🤖",
                    trigger: "1",
                    hideInput: true
                },
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
                        { value: 2, label: "Your email address. 📧", trigger: "6" },
                        { value: 3, label: "I'd like to hire you! 💼", trigger: "9" },
                        { value: 4, label: "What's your favorite video game? 🎮", trigger: "12" },
                    ],
                    hideInput: true
                },
                {
                    id: "3",
                    message: "A small town called Falköping in Sweden. 😃",
                    trigger: "4",
                    hideInput: true
                },
                {
                    id: "4",
                    message: "Is there anything else you'd like to know?",
                    trigger: "5",
                    hideInput: true
                },
                {
                    id: "5",
                    options: [
                        { value: 1, label: "Your email address. 📧", trigger: "6" },
                        { value: 2, label: "I'd like to hire you! 💼", trigger: "9" },
                        { value: 3, label: "What's your favorite video game? 🎮", trigger: "12" },
                    ],
                    hideInput: true
                },
                    {
                    id: '6',
                    message: 'My mail is "gabriel.dahlberg1998@gmail.com"',
                    trigger: "7",
                    hideInput: true
                },
                {
                    id: "7",
                    message: "Is there anything else you'd like to know?",
                    trigger: "8",
                    hideInput: true
                },
                {
                    id: "8",
                    options: [
                        { value: 1, label: "Where you're from. 🏠", trigger: "3" },
                        { value: 2, label: "I'd like to hire you! 💼", trigger: "9" },
                        { value: 3, label: "What's your favorite video game? 🎮", trigger: "12" },
                    ],
                    hideInput: true
                },
                {
                    id: "9",
                    message: "Yippie, great! The easiest way to reach me would be via my Linkedin or Email. 👨‍💼",
                    trigger: "hiremessage",
                    hideInput: true
                },
                {
                    id: "hiremessage",
                    message: "You can find more info and links on the about page.",
                    trigger: "10",
                    hideInput: true
                },
                {
                    id: "10",
                    message: "Is there anything else you'd like to know?",
                    trigger: "11",
                    hideInput: true
                },
                {
                    id: "11",
                    options: [
                        { value: 1, label: "Where you're from. 🏠", trigger: "3" },
                        { value: 2, label: "Your email address. 📧", trigger: "6" },
                        { value: 3, label: "What's your favorite video game? 🎮", trigger: "12" },
                    ],
                    hideInput: true
                },
                {
                    id: "12",
                    message: "Hard question but probably have to say League of Legends or Rainbow six siege. 😃",
                    trigger: "13",
                    hideInput: true
                },
                {
                    id: "13",
                    message: "Is there anything else you'd like to know?",
                    trigger: "14",
                    hideInput: true
                },
                {
                    id: "14",
                    options: [
                        { value: 1, label: "Where you're from. 🏠", trigger: "3" },
                        { value: 2, label: "Your email address. 📧", trigger: "6" },
                        { value: 3, label: "I'd like to hire you! 💼", trigger: "9" },
                    ],
                    hideInput: true
                },
                ]}
                {...config}
            />
        </ThemeProvider>
    )
};

export default GabbeBot