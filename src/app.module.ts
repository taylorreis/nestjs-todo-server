import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [TodosModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
