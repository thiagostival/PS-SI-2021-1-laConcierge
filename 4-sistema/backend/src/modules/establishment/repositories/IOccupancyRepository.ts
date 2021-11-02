import Occupancy from '../infra/typeorm/entities/Occupancy';
import ICreateOcuppancy from '../model/ICreateOcuppancy';

export default interface IOccupancyRepository {
  findOccupancyById(id: string): Promise<Occupancy | undefined>;
  createOccupancy(data: ICreateOcuppancy): Promise<Occupancy>;
}
