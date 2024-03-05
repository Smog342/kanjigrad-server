import {
  Body,
  Controller,
  Get,
  HttpCode,
  NotFoundException,
  Post,
  Query,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/CreateUser.dto';
import { GetUserDto } from 'src/users/dto/GetUser.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get('/finduser')
  async findUser(@Query('login') login: string) {
    const foundUser = await this.userService.findUser(login);

    if (foundUser === null) {
      throw new NotFoundException({
        message: 'Не найден пользователь с таким именем',
        status: 404,
      });
    }

    return 'Пользователь с таким именем найден';
  }

  @Post('/checkuser')
  @HttpCode(200)
  async checkUser(@Body() userCredentials: GetUserDto) {
    const foundUser = await this.userService.checkUser(userCredentials);

    if (foundUser === null) {
      throw new NotFoundException({
        message: 'Неверные логин или пароль',
        status: 404,
      });
    }

    return { message: 'Успешная регистрация' };
  }

  @Post('/createuser')
  createUser(@Body() userCredentials: CreateUserDto) {
    this.userService.createUser(userCredentials);
  }
}
