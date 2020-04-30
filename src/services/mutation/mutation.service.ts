import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Mutation } from 'src/interfaces/mutation.interface';

@Injectable()
export class MutationService {
    constructor(@InjectModel('Mutation') private readonly mutationModel: Model<Mutation>) {

    }

    save(mutation): Promise<Mutation> {
        return new this.mutationModel({ mutation }).save();
    }

    findAll() {
        return this.mutationModel.find().exec();
    }
}
