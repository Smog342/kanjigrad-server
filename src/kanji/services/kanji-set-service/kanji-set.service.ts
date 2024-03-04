import { Injectable } from '@nestjs/common';

@Injectable()
export class KanjiSetService {
  private kanjiSet = [
    '力',
    '諦',
    '強',
    '斬',
    '侍',
    '識',
    '犬',
    '染',
    '息',
    '女',
    '季',
    '響',
    '驚',
    '車',
    '服',
    '璽',
  ];

  getKanjiSet() {
    return this.kanjiSet;
  }
}
