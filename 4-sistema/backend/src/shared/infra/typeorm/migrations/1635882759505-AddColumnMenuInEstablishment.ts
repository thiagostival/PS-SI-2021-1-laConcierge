import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from 'typeorm';

export default class AddColumnMenuInEstablishment1635882759505
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'establishment',
      new TableColumn({
        name: 'menu_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'establishment',
      new TableForeignKey({
        name: 'EstablishmentMenu',
        referencedTableName: 'menu',
        referencedColumnNames: ['id'],
        columnNames: ['menu_id'],
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('establishment', 'EstablishmentMenu');

    await queryRunner.dropColumn('establishment', 'menu_id');
  }
}
