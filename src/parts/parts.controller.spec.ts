import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { DeleteResult, UpdateResult } from 'typeorm';
import { CreatePartDto } from './dto/create-part.dto';
import { UpdatePartDto } from './dto/update-part.dto';
import { Part } from './entities/part.entity';
import { PartsController } from './parts.controller';
import { PartsService } from './parts.service';

describe('PartsController', () => {
  let controller: PartsController;
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
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PartsController],
      providers: [PartsService],
    })
      .overrideProvider(PartsService)
      .useValue(mockPartsService)
      .compile();

    controller = module.get<PartsController>(PartsController);
  });

  it('Should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('Sould create part', async () => {
    const dto = new CreatePartDto();
    const newPart = await controller.create(dto);

    expect(newPart).toBeInstanceOf(Part);
    expect(mockPartsService.create).toHaveBeenCalled();
  });

  it('Should return a list of parts', async () => {
    const parts = await controller.findAll();

    expect(parts).toBeInstanceOf(Array<Part>);
    expect(mockPartsService.findAll).toHaveBeenCalled();
  });

  it('Should return one specific part', async () => {
    const part = await controller.findOne('0');

    expect(part).toBeInstanceOf(Part);
    expect(mockPartsService.findOne).toHaveBeenCalled();
  });

  it('Should return update result of part', async () => {
    const partialPart = new UpdatePartDto();
    const partUpdated = await controller.update('0', partialPart);

    expect(partUpdated).toBeInstanceOf(UpdateResult);
    expect(mockPartsService.update).toHaveBeenCalled();
  });

  it('Should return delete result', async () => {
    const deleteResult = await controller.remove('0');

    expect(deleteResult).toBeInstanceOf(DeleteResult);
    expect(mockPartsService.remove).toHaveBeenCalled();
  });
});
