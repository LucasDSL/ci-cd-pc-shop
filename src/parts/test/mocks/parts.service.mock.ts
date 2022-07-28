import { CreatePartDto } from 'src/parts/dto/create-part.dto';
import { UpdatePartDto } from 'src/parts/dto/update-part.dto';
import { Part } from '../../entities/part.entity';
import { DeleteResult, UpdateResult } from 'typeorm';

const mockPartsService = {
  create: jest.fn((dto: CreatePartDto) => {
    return new Part();
  }),
  findAll: jest.fn(() => {
    const listParts: Part[] = [].fill(new Part(), 0, 2);
    return listParts;
  }),
  findOne: jest.fn((id: number) => {
    const listParts = [new Part()];
    return listParts[id];
  }),
  update: jest.fn((id: string, dto: UpdatePartDto) => new UpdateResult()),
  remove: jest.fn((id: string) => new DeleteResult()),
};

export default mockPartsService;
