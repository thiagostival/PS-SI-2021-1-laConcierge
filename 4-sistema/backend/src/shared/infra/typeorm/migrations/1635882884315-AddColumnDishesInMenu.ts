import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from 'typeorm';

export default class AddColumnDishesInMenu1635882884315
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'menu',
      new TableColumn({
        name: 'dishe_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'menu',
      new TableForeignKey({
        name: 'MenuDishe',
        referencedTableName: 'dishes',
        referencedColumnNames: ['id'],
        columnNames: ['dishe_id'],
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('menu', 'MenuDishe');

    await queryRunner.dropColumn('menu', 'dishe_id');
  }
}
