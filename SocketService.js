import { io } from 'socket.io-client';

const socket = io('http://192.168.1.2:4000');

export default socket;