import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MutationSchema } from './schemas/mutation.schema';
import { MutationService } from './services/mutation/mutation.service';

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(`mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`, options),
    MongooseModule.forFeature([{ name: 'Mutation', schema: MutationSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService, MutationService],
})
export class AppModule { }
