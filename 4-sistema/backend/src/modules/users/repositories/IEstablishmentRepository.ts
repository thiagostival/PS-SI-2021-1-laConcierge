import Establishment from '../infra/typeorm/entities/Establishment';
import ICreateEstablishment from '../model/ICreateEstablishment';
import IFindAllEstablishment from '../model/IFindAllEstablishment';

export default interface IEstablishmentRepository {
  findAllEstablishment(id: IFindAllEstablishment): Promise<Establishment[] | undefined>;
  findById(id: string): Promise<Establishment | undefined>;
  create(data: ICreateEstablishment): Promise<Establishment>;
  save(establishment: ICreateEstablishment): Promise<Establishment>;
}
