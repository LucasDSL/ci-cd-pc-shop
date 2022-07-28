import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { DeleteResult, UpdateResult } from 'typeorm';
import { CreatePartDto } from '../dto/create-part.dto';
import { UpdatePartDto } from '../dto/update-part.dto';
import { Part } from '../entities/part.entity';
import { PartsService } from '../parts.service';
import mockPartRepository from './mocks/parts.repository.mock';

describe('PartsService', () => {
  let service: PartsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PartsService,
        {
          provide: getRepositoryToken(Part),
          useValue: mockPartRepository,
        },
      ],
    }).compile();

    service = module.get<PartsService>(PartsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return the created part', async () => {
    const dto = new CreatePartDto();
    const newPart = await service.create(dto);

    expect(newPart).toBeInstanceOf(Part);
    expect(mockPartRepository.save).toHaveBeenCalled();
    expect(mockPartRepository.create).toHaveBeenCalled();
  });

  it('should return a list of parts', async () => {
    const parts = await service.findAll();

    expect(parts).toBeInstanceOf(Array<Part>);
    expect(mockPartRepository.find).toHaveBeenCalled();
  });

  it('should return one Part', async () => {
    const specificPart = await service.findOne('0');

    expect(specificPart).toBeInstanceOf(Part);
    expect(mockPartRepository.findOne).toHaveBeenCalled();
  });

  it('should return the update result of part', async () => {
    const updateResult = await service.update('1', new UpdatePartDto());

    expect(updateResult).toBeInstanceOf(UpdateResult);
    expect(mockPartRepository.update).toHaveBeenCalled();
  });

  it('should return the delete result of Part', async () => {
    const deleteResult = await service.remove('0');

    expect(deleteResult).toBeInstanceOf(DeleteResult);
    expect(mockPartRepository.delete).toHaveBeenCalled();
  });
});
