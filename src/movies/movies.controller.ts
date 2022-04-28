import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('movies') // control the entry point
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }

  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `We are searching for a movie a title: ${searchingYear}`;
  }

  @Get(':id')
  getOne(@Param('id') movieId: string) {
    return `this will return one movie with the id: ${movieId}`;
  }

  @Post()
  create(@Body() movieData: string) {
    return movieData;
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `this will delete a movie: ${movieId}`;
  }

  //update some parts of resource, even we don't call parm, it doesn't answer
  @Patch('/:id')
  patch(@Param('id') movieId: string, @Body() updatedData) {
    return {
      movieId: movieId,
      ...updatedData,
    };
  }
}
