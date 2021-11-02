export default interface IFindUsersByType {
  type: 'client' | 'establishment';
  except_user_id?: string;
}
