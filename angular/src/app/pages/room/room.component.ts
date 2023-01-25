import {Component, OnInit} from '@angular/core';
import { WebSocketService} from "../../web-socket.service";
import { PeerService} from "../../peer.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  roomName: string | null;
  currentStream: any;
  listUser: Array<any> = [];

  constructor(private route: ActivatedRoute, private webSocketService: WebSocketService,
              private peerService: PeerService) {
    this.roomName = route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.checkMediaDevices();
    this.initPeer();
    this.initSocket();
  }

  initPeer = () => {
    const {peer} = this.peerService;

    peer.on('open', (id: any) => {
      const body = {
        idPeer: id,
        roomName: this.roomName
      };
      console.log(body)

      // @ts-ignore
      this.webSocketService.joinRoom(body);
    });


    peer.on('call', (callEnter: { answer: (arg0: any) => void; on: (arg0: string, arg1: (streamRemote: any) => void) => void; }) => {
      callEnter.answer(this.currentStream);

      callEnter.on('stream', (streamRemote) => {
        this.addVideoUser(streamRemote);
      });

    }, (err: any) => {
      console.log('*** ERROR *** Peer call ', err);
    });
  }

  initSocket = () => {
    this.webSocketService.cbEvent.subscribe(res => {
      if (res.name === 'new-user') {
        const {idPeer} = res.data;
        this.sendCall(idPeer, this.currentStream);
      }
    })
  }

  checkMediaDevices = () => {
    if (navigator && navigator.mediaDevices) {
      navigator.mediaDevices.getUserMedia({
        audio: false,
        video: true
      }).then(stream => {
        this.currentStream = stream;
        this.addVideoUser(stream);

      }).catch(() => {
        console.log('*** ERROR *** Not permissions');
      });
    } else {
      console.log('*** ERROR *** Not media devices');
    }
  }

  addVideoUser = (stream: any) => {
    this.listUser.push(stream);
    const unique = new Set(this.listUser);
    this.listUser = [...unique];
  }

  // @ts-ignore
  sendCall = (idPeer, stream) => {
    const newUserCall = this.peerService.peer.call(idPeer, stream);
    if (!!newUserCall) {
      // @ts-ignore
      newUserCall.on('stream', (userStream) => {
        this.addVideoUser(userStream);
      })
    }
  }

  pauseCurrentStream(): void {
    this.currentStream?.getTracks().forEach((track: { enabled: boolean; }) =>{
      track.enabled = false;
    })
  }

  startCurrentStream(): void {
    this.currentStream?.getTracks().forEach((track: { enabled: boolean; }) =>{
      track.enabled = true;
    })
  }
}
