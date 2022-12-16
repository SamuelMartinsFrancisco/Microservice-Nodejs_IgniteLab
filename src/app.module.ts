// Module -> é um acoplador de controllers e services. Um ponto central para importar esses outros arquivos.

import { Module } from '@nestjs/common';
import { DatabaseModule } from './infra/database/database.module';
import { HttpModule } from './infra/http/http.module';

@Module({
  imports: [HttpModule, DatabaseModule]
})
export class AppModule {}
