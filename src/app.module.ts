import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';

@Module({
  imports: [],
  controllers: [MoviesController], //take URL, Excute the functions
  providers: [], //
})
export class AppModule {}
