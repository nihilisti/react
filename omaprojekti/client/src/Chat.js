import React, { Component } from 'react'
import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'
import './App.css';

const URL = 'ws://localhost:3030'

class Chat extends Component {
    state = {
        name: 'Bob',
        messages: [],
    }

    ws = new WebSocket(URL)

    componentDidMount() {
        this.ws.onopen = () => {
            // on connecting, do nothing but log it to the console
            console.log('connected')
        }

        this.ws.onmessage = evt => {
            // on receiving a message, add it to the list of messages
            const message = JSON.parse(evt.data)
            this.addMessage(message)
        }

        this.ws.onclose = () => {
            console.log('disconnected')
            // automatically try to reconnect on connection loss
            this.setState({
                ws: new WebSocket(URL),
            })
        }
    }

    addMessage = message =>
        this.setState(state => ({ messages: [...state.messages, message] }))

    submitMessage = messageString => {
        // on submitting the ChatInput form, send the message, add it to the list and reset the input
        const message = { name: this.state.name, message: messageString }
        this.ws.send(JSON.stringify(message))
        this.addMessage(message)
    }

    render() {
        return (
            <div className="main">
                <div className="chat">
                    <div className="header">
                        <div className="title">
                            <h1>IdealChat</h1>
                        </div>
                    </div>
                    <div className="conversation">
                        <i className="italic">Welcome to IdealChat!</i>
                        {this.state.messages.map((message, index) =>
                            <ChatMessage
                                key={index}
                                message={message.message}
                                name= {message.name}
                            />,
                        )}
                    </div>
                    <div className="footer">
                        <label htmlFor="name" className="msgItem">
                            Name:&nbsp;
          <input
                                type="text"
                                id={'name'}
                                placeholder={'Enter your name...'}
                                value={this.state.name}
                                onChange={e => this.setState({ name: e.target.value })}
                            />
                        </label>
                        <ChatInput
                            ws={this.ws}
                            onSubmitMessage={messageString => this.submitMessage(messageString)}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Chat