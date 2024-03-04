import { Module } from '@nestjs/common';
import { KanjiModule } from './kanji/kanji.module';

@Module({
  imports: [KanjiModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
