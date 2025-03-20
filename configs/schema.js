import { json } from "drizzle-orm/gel-core";
import { boolean, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const USER_TABLE = pgTable("users", {
  id: serial().primaryKey(),
  name: varchar().notNull(),
   
  email: varchar().notNull(),
  isMember: boolean().default(false)

});
export const STUDY_MATERIAL_TABLE=pgTable('studyMaterial',{
  id:serial().primaryKey(),
  coureseId: varchar().notNull(),
  courseType: varchar().notNull(),
  topic:varchar().notNull(),
  difficultyLevel: varchar().default('EASY'),
  courseLayout:json(),
  createdBy: varchar().notNull()
   

})