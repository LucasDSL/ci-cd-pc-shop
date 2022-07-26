import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PartsService } from './parts.service';
import { CreatePartDto } from './dto/create-part.dto';
import { UpdatePartDto } from './dto/update-part.dto';
import { Part } from './entities/part.entity';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('parts')
export class PartsController {
  constructor(private readonly partsService: PartsService) {}

  @Post()
  create(@Body() createPartDto: CreatePartDto): Promise<Part> {
    return this.partsService.create(createPartDto);
  }

  @Get()
  findAll(): Promise<Part[]> {
    return this.partsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Part> {
    return this.partsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePartDto: UpdatePartDto,
  ): Promise<UpdateResult> {
    return this.partsService.update(id, updatePartDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<DeleteResult> {
    return this.partsService.remove(id);
  }
}
