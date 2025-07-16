import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TinkoffApiController } from './tinkoff-api/tinkoff-api.controller';
import { TinkoffApiService } from './tinkoff-api/tinkoff-api.service';
import {GraphQLModule} from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { InstrumentResolver } from './tinkoff-api/instrument.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/schema.gql',
      playground: true,
    }),
  ],
  controllers: [AppController, TinkoffApiController],
  providers: [AppService, TinkoffApiService, InstrumentResolver],
})
export class AppModule {}
