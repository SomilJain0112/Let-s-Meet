# Xyte a React Group Video Call Application

Welcome to the Xyte a React group video call application! This project utilizes Socket.io and Simple-Peer npm libraries to enable a range of collaborative features for online meetings. Please note that this application is a student course project, so expect some bugs.

## Capabilities

- **1-Many Video Chat:** Supports multiple participants in a video call, though performance may degrade after 4 users in a meeting.
- **Socket.io Rooms:** Allows simultaneous meetings by creating different rooms using Socket.io.

- **Audio and Video Streams Sharing:** Toggle audio and video streams on and off during the meeting.

- **Screen Sharing:** Share your screen with other participants.

- **Text Messages:** Communicate with participants through text messages.

- **File Sharing:** Send files to other participants.

- **Sound Effects:** Play sound effects for other participants.

- **Participant List:** View the list of participants in the meeting.

## How to Run

Follow these steps to run the application on your local machine:

1. **Clone the Repository:**
   Download the repository from GitHub.

2. **Backend Setup:**
   Open a terminal, navigate to the "Backend" directory, and run:
   cd Backend
   npm i

3. **Frontend Setup:**
   Open another terminal, navigate to the "Frontend" directory, and run:
   cd Frontend
   npm i

4. **Start the Server:**

   - In the "Backend" directory, run:
     npm start
     This starts the server at port 3001.

5. **Start the React Development Server:**

   - In the "Frontend" directory, run:
     npm start
     This starts the React development server at port 3000.

6. **Join the Meeting:**

   - Open a web browser and go to http://localhost:3000.
   - Enter the room code and username to join the meeting.
   - Open another tab, go to http://localhost:3000, and enter with a different username but the same room code.
   - Both users will get connected, and you can enjoy the meeting.

7. **Add More Users:**
   - To add more users, open new tabs and enter with different names.

## Disclaimer

- This is a student course project, so expect bugs.
- If the remote user's video does not connect, try leaving and rejoining the meeting.
- The meeting is not encrypted, so do not share any critical information.
