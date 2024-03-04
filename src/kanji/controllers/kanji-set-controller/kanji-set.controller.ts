import { Controller, Get } from '@nestjs/common';
import { KanjiSetService } from 'src/kanji/services/kanji-set-service/kanji-set.service';

@Controller('kanjiset')
export class KanjiSetController {
  constructor(private kanjiSetService: KanjiSetService) {}

  @Get()
  getKanjiSet() {
    return this.kanjiSetService.getKanjiSet();
  }
}
