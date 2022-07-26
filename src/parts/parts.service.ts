import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { CreatePartDto } from './dto/create-part.dto';
import { UpdatePartDto } from './dto/update-part.dto';
import { Part } from './entities/part.entity';

@Injectable()
export class PartsService {
  constructor(
    @InjectRepository(Part) private partRepository: Repository<Part>,
  ) {}

  create(createPartDto: CreatePartDto): Promise<Part> {
    const newPart: Part = this.partRepository.create(createPartDto);
    return this.partRepository.save(newPart);
  }

  findAll(): Promise<Part[]> {
    return this.partRepository.find();
  }

  findOne(id: string): Promise<Part> {
    return this.partRepository.findOne({ where: { id } });
  }

  update(id: string, updatePartDto: UpdatePartDto): Promise<UpdateResult> {
    return this.partRepository.update(id, updatePartDto);
  }

  remove(id: string): Promise<DeleteResult> {
    return this.partRepository.delete(id);
  }
}
