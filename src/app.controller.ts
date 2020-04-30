import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';
import { Mutation } from './classes/mutation';
import { MutationService } from './services/mutation/mutation.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly mutationService: MutationService
  ) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('mutation')
  async mutation(@Body() { dna }, @Res() res: Response) {
    if (!dna) {
      return res.status(400).send();
    }
    if (typeof dna === 'string') {
      dna = JSON.parse(dna);
    }
    const mutation = new Mutation();
    const hasMutation = mutation.hasMutation(dna);
    try {
      await this.mutationService.save(hasMutation);
    } catch (error) {
      return res.status(500).send();
    }
    console.log(hasMutation);
    if (hasMutation) {
      return res.status(200).send();
    }
    else {
      return res.status(403).send();
    }
  }

  @Get('stats')
  async stats() {
    const mutations = await this.mutationService.findAll();
    let count_mutations = 0;
    let count_no_mutation = 0;
    mutations.forEach(
      ({ mutation }) => {
        if (mutation) {
          count_mutations++;
        } else {
          count_no_mutation++;
        }
      }
    );
    const ratio = count_mutations / count_no_mutation;
    // {“count_mutations”:40, “count_no_mutation”:100: “ratio”:0.4}
    return { count_mutations, count_no_mutation, ratio };
  }
}
