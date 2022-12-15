// Controller -> responsável por definir as rotas da aplicação
import { Body, Controller, Get, Post } from '@nestjs/common';   // https://docs.nestjs.com/controllers#controllers
import { PrismaService } from './prisma.service';
import { randomUUID } from 'node:crypto';
import { CreateNotificationBody } from './create-notification-body';

@Controller('notifications')  // localhost:3000/notifications  ->  retorna todas as notificações
export class AppController {
  // https://campuscode.com.br/conteudos/s-o-l-i-d-principio-de-inversao-de-dependencia
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.notification.findMany();
  }

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body;

    await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        content,
        category,
        recipientId,
      },
    });
  }
}
