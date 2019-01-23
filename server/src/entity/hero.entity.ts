import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Hero extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'text'
  })
  name: string;

}

export default Hero;
