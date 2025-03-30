import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1743370511574 implements MigrationInterface {
    name = 'Migration1743370511574'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."user_role_enum" AS ENUM('admin', 'student')`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(255) NOT NULL, "email" character varying(255) NOT NULL, "password" character varying NOT NULL, "role" "public"."user_role_enum" NOT NULL DEFAULT 'student', CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "topic" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying(255) NOT NULL, "description" text NOT NULL, CONSTRAINT "PK_33aa4ecb4e4f20aa0157ea7ef61" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "lesson" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "content" text NOT NULL, CONSTRAINT "PK_0ef25918f0237e68696dee455bd" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "question" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "question" text NOT NULL, CONSTRAINT "PK_21e5786aa0ea704ae185a79b2d5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."history_action_enum" AS ENUM('learned', 'exam_attempt', 'ai_query')`);
        await queryRunner.query(`CREATE TABLE "history" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "action" "public"."history_action_enum" NOT NULL, CONSTRAINT "PK_9384942edf4804b38ca0ee51416" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "exam" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "score" integer NOT NULL, "total_questions" integer NOT NULL, CONSTRAINT "PK_56071ab3a94aeac01f1b5ab74aa" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "base_entity" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_03e6c58047b7a4b3f6de0bfa8d7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "querry" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "query" text NOT NULL, "response" text NOT NULL, CONSTRAINT "PK_ee62f2a0105123a79a6843ad3a5" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "querry"`);
        await queryRunner.query(`DROP TABLE "base_entity"`);
        await queryRunner.query(`DROP TABLE "exam"`);
        await queryRunner.query(`DROP TABLE "history"`);
        await queryRunner.query(`DROP TYPE "public"."history_action_enum"`);
        await queryRunner.query(`DROP TABLE "question"`);
        await queryRunner.query(`DROP TABLE "lesson"`);
        await queryRunner.query(`DROP TABLE "topic"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TYPE "public"."user_role_enum"`);
    }

}
