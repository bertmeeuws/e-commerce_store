import { AppService } from './app.service';
import { AppController } from './app.controller';
import { PokemonModule } from './pokemon/pokemon.module';

import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      cors: {
        credentials: true,
        origin: true,
      },
      //Make sure req gets passed properly after Auth
      context: ({ req, res }: any) => {
        // Sets the "request" object for each GQL request to read headers for auth, etc
        return { request: req };
      },
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: 'root',
      database: 'postgres',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),

    //Here come modules

    PokemonModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
