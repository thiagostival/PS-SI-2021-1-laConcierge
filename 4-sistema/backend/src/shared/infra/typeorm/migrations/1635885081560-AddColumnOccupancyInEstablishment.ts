import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export default class AddColumnOccupancyInEstablishment1635885081560
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'establishment',
      new TableColumn({
        name: 'occupancy_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'establishment',
      new TableForeignKey({
        name: 'EstablishmentOccupancy',
        referencedTableName: 'occupancy',
        referencedColumnNames: ['id'],
        columnNames: ['occupancy_id'],
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('establishment', 'EstablishmentOccupancy');

    await queryRunner.dropColumn('establishment', 'occupancy_id');
  }
}
