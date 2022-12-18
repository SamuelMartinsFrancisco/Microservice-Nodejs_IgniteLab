// Controller -> responsável por definir as rotas da aplicação
import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';   // https://docs.nestjs.com/controllers#controllers
import { SendNotification } from '@application/use-cases/send-notification';
import { CreateNotificationBody } from '../dtos/create-notification-body';
import { NotificationViewModel } from '../view-models/notification-view-model';
import { CancelNotification } from '@application/use-cases/cancel-notification';
import { ReadNotification } from '@application/use-cases/read-notification';
import { UnreadNotification } from '@application/use-cases/unread-notification';
import { CountRecipientNotifications } from '@application/use-cases/count-recipient-notifications';
import { GetRecipientNotifications } from '@application/use-cases/get-recipient-notifications';

@Controller('notifications')  // localhost:3000/notifications  ->  retorna todas as notificações
export class NotificationsController {
  constructor(
    // https://dev.to/oieduardorabelo/um-guia-sobre-injecao-e-inversao-de-dependencias-em-node-js-e-typescript-1bod
    private sendNotification: SendNotification, 
    private cancelNotification: CancelNotification,
    private readNotification: ReadNotification,
    private unreadNotification: UnreadNotification,
    private countRecipientNotifications: CountRecipientNotifications,
    private getRecipientNotifications: GetRecipientNotifications
  ) {}

  // cancel
  @Patch(':id/cancel')
  async cancel(@Param('id') id: string) {
    await this.cancelNotification.execute({
      notificationId: id
    });
  }

  // countFromRecipient
  @Get('count/from/:recipientId')
  async countFromRecipient(@Param('recipientId') recipientId: string) {
     const { count } = await this.countRecipientNotifications.execute({
      recipientId
     });

     return {
      count
     };
  }

  // getFromRecipient
  @Get('from/:recipientId')
  async getFromRecipient(@Param('recipientId') recipientId: string) {
    const { notifications } = await this.getRecipientNotifications.execute({
      recipientId
    });

    return {
      notifications: notifications.map(NotificationViewModel.toHTTP)
    };
  }

  // read
  @Patch(':id/read')
  async read(@Param('id') id: string) {
    await this.readNotification.execute({
      notificationId: id
    });
  }

  // unread
  @Patch(':id/unread') 
  async unread(@Param('id') id: string) {
    await this.unreadNotification.execute({
      notificationId: id
    });
  }

  // create
  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body;

    const { notification } = await this.sendNotification.execute({
      recipientId,
      content,
      category
    });

    return { 
      notification: NotificationViewModel.toHTTP(notification)
    };
  }
}

// https://campuscode.com.br/conteudos/s-o-l-i-d-principio-de-inversao-de-dependencia
