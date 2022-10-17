import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  User_ID: string;

  @Column({ length: 40 })
  User_FirstName: string;

  @Column({ length: 40 })
  User_LastName: string;

  @Column()
  User_Email: string;

  @Column()
  pass_word: string;

  @Column()
  Mobile_no: string;

  @Column()
  user_role: string;

}