import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  findOne(findUniqueUserArgs: Prisma.UserWhereUniqueInput) {
    return this.prisma.user.findUnique({
      where: findUniqueUserArgs,
    });
  }
}
