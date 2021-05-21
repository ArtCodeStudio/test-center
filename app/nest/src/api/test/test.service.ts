import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { Test, Prisma } from '@test-center/prisma';

@Injectable()
export class TestService {
  constructor(private prisma: PrismaService) {
    /**/
  }

  async get(
    testWhereUniqueInput: Prisma.TestWhereUniqueInput,
  ): Promise<Test | null> {
    return this.prisma.test.findUnique({
      where: testWhereUniqueInput,
    });
  }

  async list(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.TestWhereUniqueInput;
    where?: Prisma.TestWhereInput;
    orderBy?: Prisma.TestOrderByInput;
  }): Promise<Test[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.test.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async create(data: Prisma.TestCreateInput): Promise<Test> {
    return this.prisma.test.create({
      data,
    });
  }

  async update(params: {
    where: Prisma.TestWhereUniqueInput;
    data: Prisma.TestUpdateInput;
  }): Promise<Test> {
    const { data, where } = params;
    return this.prisma.test.update({
      data,
      where,
    });
  }

  async delete(where: Prisma.TestWhereUniqueInput): Promise<Test> {
    return this.prisma.test.delete({
      where,
    });
  }
}
