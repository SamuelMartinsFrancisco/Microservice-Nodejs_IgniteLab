// Controller -> responsável por definir as rotas da aplicação
import { Body, Controller, Post } from '@nestjs/common';   // https://docs.nestjs.com/controllers#controllers
import { SendNotification } from 'src/application/use-cases/send-notification';
import { CreateNotificationBody } from '../dtos/create-notification-body';

@Controller('notifications')  // localhost:3000/notifications  ->  retorna todas as notificações
export class NotificationsController {
  constructor(
    private sendNotification: SendNotification
  ) {}

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body;

    const { notification } = await this.sendNotification.execute({
      recipientId,
      content,
      category
    });

    return { notification };
  }
}

// https://campuscode.com.br/conteudos/s-o-l-i-d-principio-de-inversao-de-dependencia
