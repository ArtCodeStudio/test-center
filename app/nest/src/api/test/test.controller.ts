import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { TestService } from './test.service';
import {
  Test as TestModel,
} from '@test-center/prisma';

@Controller()
export class TestController {
  constructor(
    private readonly test: TestService,
  ) {
    /**/
  }

  @Get('test/:id')
  async getTestById(@Param('id') id: string): Promise<TestModel> {
    return this.test.get({ id: Number(id) });
  }

  @Get('test')
  async getPublishedTests(): Promise<TestModel[]> {
    return this.test.list({
      where: { published: true },
    });
  }

  @Get('test/search/:searchString')
  async getFilteredTests(
    @Param('searchString') searchString: string,
  ): Promise<TestModel[]> {
    return this.test.list({
      where: {
        OR: [
          {
            title: { contains: searchString },
          },
          {
            content: { contains: searchString },
          },
        ],
      },
    });
  }

  @Post('test')
  async createTest(
    @Body() testData: { title: string; content?: string; authorEmail: string },
  ): Promise<TestModel> {
    const { title, content, authorEmail } = testData;
    return this.test.create({
      title,
      content,
      partient: {
        connect: { email: authorEmail },
      },
    });
  }

  @Delete('test/:id')
  async deleteTest(@Param('id') id: string): Promise<TestModel> {
    return this.test.delete({ id: Number(id) });
  }

  @Put('test/:id')
  async updateTest(@Param('id') id: string): Promise<TestModel> {
    return this.test.update({
      where: { id: Number(id) },
      data: { published: true },
    });
  }
}
