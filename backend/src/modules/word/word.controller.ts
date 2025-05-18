@Controller('sets/:setId/words')
export class WordController {
  constructor(private readonly wordService: WordService) {}

  @Get()
  getWords(@Param('setId') setId: string): Promise<Word[]> {
    return this.wordService.findBySet(setId);
  }

  @Post()
  addWord(
    @Param('setId') setId: string,
    @Body() body: { sourceText: string; targetText: string }
  ): Promise<Word> {
    return this.wordService.create(setId, body.sourceText, body.targetText);
  }
}
