import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { ArtistService } from './artist.service';
import { Artist } from './artist.schema';

@Controller('artist')
export class ArtistController {
  constructor(private readonly artistService: ArtistService) { }

  @Post()
  async create(@Body() createArtistDto: Artist): Promise<Artist> {
    return this.artistService.create(createArtistDto);
  }

  @Get()
  async findAll(): Promise<Artist[]> {
    return this.artistService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.artistService.findOne(id);
  }
}

