import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';
  
@Entity()
export class usertbl {
  @PrimaryGeneratedColumn()
  User_ID: string;

  @Column({ length: 50 })
  User_FirstName: string;

  @Column({ length: 50 })
  User_LastName: string;

  @Column()
  User_Email: string;

  @Column()
  pass_word: string;
  @Column()
  Mobile_no: string;
  @Column()
  user_role: string;
  @Column({ default: true})
    isAvailable: boolean;

}