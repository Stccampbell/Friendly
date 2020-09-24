const express = require('express')
const communicationRouter = express.Router()


//video chat stuff
const { chatToken, videoToken, voiceToken } = require('../services/communication/tokens');
const config = require('../services/communication/config');

const sendTokenResponse = (token, res) => {
    res.set('Content-Type', 'application/json');
    res.send(
      JSON.stringify({
        token: token.toJwt()
      })
    );
  };

communicationRouter.get('/chat/token', (req, res) => {
    const identity = req.query.identity;
    const token = chatToken(identity, config);
    sendTokenResponse(token, res);
  });
  
  communicationRouter.post('/chat/token', (req, res) => {
    const identity = req.body.identity;
    const token = chatToken(identity, config);
    sendTokenResponse(token, res);
  });

  communicationRouter.get('/video/token', (req, res) => {
    const identity = req.query.identity;
    const room = req.query.room;
    const token = videoToken(identity, room, config);
    sendTokenResponse(token, res);
  });

  communicationRouter.post('/video/token', (req, res) => {
    const identity = req.body.identity;
    const room = req.body.room;
    const token = videoToken(identity, room, config);
    sendTokenResponse(token, res);
  });

  communicationRouter.get('/voice/token', (req, res) => {
    const identity = req.body.identity;
    const token = voiceToken(identity, config);
    sendTokenResponse(token, res);
  });

  communicationRouter.post('/voice/token', (req, res) => {
    const identity = req.body.identity;
    const token = voiceToken(identity, config);
    sendTokenResponse(token, res);
  });

  module.exports = communicationRouter