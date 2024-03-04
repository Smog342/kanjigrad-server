import { Module } from '@nestjs/common';
import { KanjiSetController } from './controllers/kanji-set-controller/kanji-set.controller';
import { KanjiSetService } from './services/kanji-set-service/kanji-set.service';

@Module({
  controllers: [KanjiSetController],
  providers: [KanjiSetService],
})
export class KanjiModule {}
