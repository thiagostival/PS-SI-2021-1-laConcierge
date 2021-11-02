import Establishment from '../infra/typeorm/entities/Establishment';
import ICreateEstablishment from '../model/ICreateEstablishment';

export default interface IEstablishmentRepository {
  findById(id: string): Promise<Establishment | undefined>;
  create(data: ICreateEstablishment): Promise<Establishment>;
}
