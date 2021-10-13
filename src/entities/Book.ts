import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import {v4 as uuid} from "uuid";

@Entity("books")
class Book {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  author: string;

  @Column()
  category: string;

  @Column()
  amount: number;

  @Column()
  page_number: number;

  @Column()
  date_release: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Book };
