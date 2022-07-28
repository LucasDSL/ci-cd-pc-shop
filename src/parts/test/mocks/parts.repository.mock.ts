import { CreatePartDto } from 'src/parts/dto/create-part.dto';
import { Part } from '../../entities/part.entity';
import { DeleteResult, UpdateResult } from 'typeorm';

const mockPartRepository = {
  create: jest.fn((dto: CreatePartDto): Part => new Part()),
  save: jest.fn(async (newPart: Part): Promise<Part> => newPart),
  find: jest.fn(async (): Promise<Part[]> => [new Part()]),
  findOne: jest.fn(async (id: string): Promise<Part> => {
    const listParts = [new Part()];
    return listParts[0];
  }),
  update: jest.fn(async (id: string) => new UpdateResult()),
  delete: jest.fn(async (): Promise<DeleteResult> => new DeleteResult()),
};

export default mockPartRepository;
