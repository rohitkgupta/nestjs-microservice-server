import {Controller, Logger} from '@nestjs/common';
import {MathService} from "./math.service";
import {MessagePattern} from "@nestjs/microservices";

@Controller()
export class MathController {
  constructor(private readonly mathService: MathService) {}

  private logger = new Logger('MathController')

  @MessagePattern('add')
  async add(data: number[]) {
    this.logger.log('Adding ' + data.toString());
    return this.mathService.accumulate(data);
  }
}
