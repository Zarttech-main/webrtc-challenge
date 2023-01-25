# Zarttech

**Challenge: Build a real-time communication system using WebRTC technology.**

- The platform should support video and audio calls
- The platform should be able to handle multiple concurrent users and sessions.
- The platform should be able to handle potential network interruptions and reconnections.
- The platform should be built using Angular (with TypeScript), HTML, and Angular Material UI or Pure CSS
- Use backend technology to build your signaling server (preferably node, deno, or any python web framework)

**Evaluation Criteria:**

- Functionality: Can the platform handle video and audio calls with multiple users?
- Scalability: Can the platform handle multiple concurrent users and sessions?
- Resilience: Can the platform handle potential network interruptions and reconnections?
- Code Quality: Is the code readable, maintainable, and well-organized?

Submit a pull request to the following repository using your github account.

[https://github.com/Zarttech-main/webrtc-challenge](https://github.com/Zarttech-main/webrtc-challenge)

Feel Free to restructure the project as you like

Don't bother about responsiveness or nice look !

**NOTE: You are to update the README.md with a proper step by step process on how to run your application.**

Thanks and Good Luck.

## Setup procedure

1. Clone this repository
    `git clone git@github.com:Tetranyble/webrtc-challenge.git`
2. cd into project directory
    `cd webrtc-challenge`
3. install Angular dependencies
  `npm install`
4. next up start angular development server
  `npm start`

## Setup Nodejs Signaling Server
1. next cd into server directory
  `cd server`
2. install node dependencies in the server directory
  `npm install`
3. start node server
  `npm start`
The signal server should now be listening on port 3000

## Setup Peer server
1. install peerjs server
2. `npm install peer -g`
2. start peerjs Server
  `peerjs --port 3001`

** visit `http://localhost:4200` **

you may connect multiple users, however you might experience drag with your device.
Also, for a production base version. The 3 application must be containerize for ease of scaling.
