export default interface ICreateDTO {
  name: string;
  email: string;
  password: string;
  type: 'client' | 'establishment';
  tel: string;
}
