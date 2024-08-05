import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets'
// import { from, map, Observable } from 'rxjs'
import { Server, Socket } from 'socket.io'

@WebSocketGateway({
  namespace: '/ws',
  cors: {
    origin: '*',
  },
})
export class EventsGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: Server

  afterInit() {
    console.log('WebSocket Gateway initialized')
  }

  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`)
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`)
  }

  @SubscribeMessage('generate-document')
  generate(@MessageBody() data: any): void {
    const { repoName } = data

    const documentation = {
      title: 'hi',
      content: 'hello',
      repoName: repoName,
    }
  }
}
