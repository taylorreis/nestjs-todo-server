// Import our types from the generated prisma client
import { Prisma } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class TodosService {
  // inject the PrismaService into TodosService
  constructor(private readonly prisma: PrismaService) {}

  create(todo: Prisma.TodoCreateInput) {
    return this.prisma.todo.create({
      data: todo,
    });
  }

  findAll() {
    return this.prisma.todo.findMany();
  }

  findOne(id: number) {
    return this.prisma.todo.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, todo: Prisma.TodoUpdateInput) {
    return this.prisma.todo.update({
      where: {
        id,
      },
      data: todo,
    });
  }

  remove(id: number) {
    return this.prisma.todo.delete({
      where: {
        id,
      },
    });
  }
}
