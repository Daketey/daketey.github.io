import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';



function Contact() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    /* Uncomment below if you want to enable the emailJS */

    if (name !== '' && email !== '' && message !== '') {
      var templateParams = {
        name: name,
        email: email,
        message: message
      };

      console.log(templateParams);
      emailjs.send('service_8jqrz0r', 'template_e613t72', templateParams, 'bNgog2RkdZmGJE2Q1').then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
      setName('');
      setEmail('');
      setMessage('');
    }
  };
  return (
    <div id="contact">
        <div className="items-container">
          <div className="terminal-contact">
            <div className="contact-wrapper">
            <div className="contact-header">
              <div className="header-left">
                <span className="header-icon">✉</span>
                <span className="header-title">mail -s "contact" portfolio@daketey.dev</span>
              </div>
              <div className="header-right glitch" data-text="[MESSAGE COMPOSER]">[MESSAGE COMPOSER]</div>
            </div>
            
            <div className="contact-body">
              <div className="contact-prompt">
                <span className="prompt-text">user@local:~$</span>
                <span className="prompt-command">mail -compose</span>
              </div>
              
              <p className="contact-description">
                <span className="comment-prefix">//</span> Got a project waiting to be realized? Let's collaborate and make it happen!
              </p>
              <Box
                ref={form}
                component="form"
                noValidate
                autoComplete="off"
                className='contact-form'
              >
                <div className='form-flex'>
                  <div className="form-field">
                    <div className="field-label">
                      <span className="field-prefix">FROM:</span>
                    </div>
                    <TextField
                      required
                      InputLabelProps={{
                        style: { color: '#00fff7' },
                      }}
                      sx={{ input: { color: '#fff', fontFamily: 'Courier Prime, monospace' } }}
                      id="outlined-required"
                      placeholder="your_name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      error={nameError}
                      helperText={nameError ? ">> ERROR: Name field required" : ""}
                    />
                  </div>
                  <div className="form-field">
                    <div className="field-label">
                      <span className="field-prefix">REPLY-TO:</span>
                    </div>
                    <TextField
                      required
                      InputLabelProps={{
                        style: { color: '#00fff7' },
                      }}
                      sx={{ input: { color: '#fff', fontFamily: 'Courier Prime, monospace' } }}
                      id="outlined-required"
                      placeholder="your.email@domain.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      error={emailError}
                      helperText={emailError ? ">> ERROR: Email field required" : ""}
                    />
                  </div>
                </div>
                <div className="form-field message-field">
                  <div className="field-label">
                    <span className="field-prefix">MESSAGE:</span>
                  </div>
                  <TextField
                    required
                    InputLabelProps={{
                      style: { color: '#00fff7' },
                    }}
                    sx={{ 
                      '& .MuiInputBase-input': { 
                        color: '#fff', 
                        fontFamily: 'Courier Prime, monospace',
                        lineHeight: '1.8'
                      } 
                    }}
                    id="outlined-multiline-static"
                    placeholder="Type your message here..."
                    multiline
                    rows={10}
                    className="body-form"
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    error={messageError}
                    helperText={messageError ? ">> ERROR: Message field required" : ""}
                  />
                </div>
                <div className="send-wrapper">
                  <Button 
                    variant="contained" 
                    endIcon={<SendIcon />} 
                    onClick={sendEmail}
                    className="send-button"
                  >
                    TRANSMIT
                  </Button>
                </div>
              </Box>
            </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Contact;