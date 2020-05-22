# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_04_09_070807) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "adventures", force: :cascade do |t|
    t.integer "adventure_number"
    t.text "story"
    t.string "questions_1"
    t.string "questions_2"
    t.string "questions_3"
    t.string "questions_4"
    t.string "questions_5"
    t.string "answer_1"
    t.string "answer_2"
    t.string "answer_3"
    t.string "answer_4"
    t.string "answer_5"
    t.string "background_image_questions_1_to_4"
    t.string "background_music_1_4"
    t.string "background_image_question_5"
    t.string "background_music_5"
    t.string "background_image_won"
    t.string "background_music_won"
    t.string "background_image_loss"
    t.string "background_music_loss"
    t.string "background_image_incorrect"
    t.string "background_music_incorrect"
    t.string "phrase_incorrect"
    t.string "background_image_correct"
    t.string "background_music_correct"
    t.string "phrase_correct"
    t.string "q1_c1"
    t.string "q1_c2"
    t.string "q1_c3"
    t.string "q2_c1"
    t.string "q2_c2"
    t.string "q2_c3"
    t.string "q3_c1"
    t.string "q3_c2"
    t.string "q3_c3"
    t.string "q4_c1"
    t.string "q4_c2"
    t.string "q4_c3"
    t.string "q5_c1"
    t.string "q5_c2"
    t.string "q5_c3"
    t.bigint "hero_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["hero_id"], name: "index_adventures_on_hero_id"
  end

  create_table "heros", force: :cascade do |t|
    t.string "name"
    t.string "character_class"
    t.integer "age"
    t.integer "health"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "name"
    t.boolean "won_adventure_1", default: false
    t.boolean "won_adventure_2", default: false
    t.boolean "won_adventure_3", default: false
    t.boolean "won_adventure_4", default: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "adventures", "heros"
end
