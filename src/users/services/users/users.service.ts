import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { userCredentials } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  findUser(login: string) {
    return this.userRepository.findOne({ where: { login: login } });
  }

  checkUser(userCredentials: userCredentials) {
    return this.userRepository.findOne({
      where: {
        login: userCredentials.login,
        password: userCredentials.password,
      },
    });
  }

  createUser(userCredentials: userCredentials) {
    const newUser = this.userRepository.create({ ...userCredentials });

    return this.userRepository.save(newUser);
  }
}
