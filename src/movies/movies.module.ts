import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

@Module({
  controllers: [MoviesController], //breakthem apart
  providers: [MoviesService],
})
export class MoviesModule {}
