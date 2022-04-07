# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_04_07_015545) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "action_text_rich_texts", force: :cascade do |t|
    t.string "name", null: false
    t.text "body"
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["record_type", "record_id", "name"], name: "index_action_text_rich_texts_uniqueness", unique: true
  end

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.string "service_name", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "active_storage_variant_records", force: :cascade do |t|
    t.bigint "blob_id", null: false
    t.string "variation_digest", null: false
    t.index ["blob_id", "variation_digest"], name: "index_active_storage_variant_records_uniqueness", unique: true
  end

  create_table "assets", force: :cascade do |t|
    t.string "name"
    t.decimal "count"
    t.decimal "amount"
    t.string "location_url"
    t.string "credentials"
    t.text "notes"
    t.boolean "current"
    t.bigint "financial_type_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["financial_type_id"], name: "index_assets_on_financial_type_id"
  end

  create_table "blogs", force: :cascade do |t|
    t.string "title"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "short_body"
  end

  create_table "educations", force: :cascade do |t|
    t.string "school"
    t.string "degree"
    t.date "date_ended"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "expenses", force: :cascade do |t|
    t.string "name"
    t.decimal "monthly_payment"
    t.boolean "current"
    t.text "notes"
    t.decimal "year_amount"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "financial_type_id", null: false
    t.index ["financial_type_id"], name: "index_expenses_on_financial_type_id"
  end

  create_table "experiences", force: :cascade do |t|
    t.string "title"
    t.string "organization"
    t.date "date_started"
    t.string "date_ended"
    t.string "location"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "sort"
  end

  create_table "financial_types", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "incomes", force: :cascade do |t|
    t.string "source_name"
    t.decimal "monthly_income"
    t.decimal "year_income"
    t.text "notes"
    t.boolean "current"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "financial_type_id", null: false
    t.index ["financial_type_id"], name: "index_incomes_on_financial_type_id"
  end

  create_table "loans", force: :cascade do |t|
    t.string "org_name"
    t.integer "months"
    t.decimal "apr"
    t.decimal "amount"
    t.date "maturity_date"
    t.decimal "maturity_amount"
    t.decimal "monthly_payment"
    t.boolean "current"
    t.text "notes"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "financial_type_id", null: false
    t.index ["financial_type_id"], name: "index_loans_on_financial_type_id"
  end

  create_table "main_skills", force: :cascade do |t|
    t.string "name"
    t.integer "percent"
    t.boolean "hard", default: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "manager_jobs", force: :cascade do |t|
    t.string "organization"
    t.string "title"
    t.string "url"
    t.boolean "interview"
    t.boolean "replied"
    t.text "notes"
    t.string "address"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "photo_sections", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "photo_id", null: false
    t.index ["photo_id"], name: "index_photo_sections_on_photo_id"
  end

  create_table "photos", force: :cascade do |t|
    t.string "name"
    t.integer "width"
    t.integer "height"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "projects", force: :cascade do |t|
    t.string "title"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "skills", force: :cascade do |t|
    t.string "title"
    t.text "body"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "stocks", force: :cascade do |t|
    t.string "name"
    t.decimal "price"
    t.boolean "current"
    t.text "notes"
    t.datetime "sold_date"
    t.decimal "sold_price"
    t.decimal "gain_loss"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "financial_type_id", null: false
    t.datetime "purchase_date"
    t.index ["financial_type_id"], name: "index_stocks_on_financial_type_id"
  end

  create_table "tags", force: :cascade do |t|
    t.string "description"
    t.bigint "blog_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["blog_id"], name: "index_tags_on_blog_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "first_name"
    t.string "last_name"
    t.string "title"
    t.text "about"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  create_table "widget_images", force: :cascade do |t|
    t.string "wid_name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "x_companies", force: :cascade do |t|
    t.bigint "x_stocks_id"
    t.string "name"
    t.string "exchange"
    t.string "industry"
    t.string "website"
    t.text "description"
    t.string "ceo"
    t.string "security_name"
    t.string "issueType"
    t.string "sector"
    t.integer "primary_sic_code"
    t.integer "employees"
    t.string "tags", default: [], array: true
    t.string "address"
    t.string "address2"
    t.string "state"
    t.string "city"
    t.string "zip"
    t.string "country"
    t.string "phone"
    t.boolean "current"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["x_stocks_id"], name: "index_x_companies_on_x_stocks_id"
  end

  create_table "x_crypto_projects", force: :cascade do |t|
    t.bigint "x_cryptos_id"
    t.string "crypto_id"
    t.string "name"
    t.string "type"
    t.string "parent"
    t.integer "rank"
    t.text "description"
    t.boolean "open_source"
    t.string "tags", default: [], array: true
    t.string "hash_algorithm"
    t.boolean "current"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["x_cryptos_id"], name: "index_x_crypto_projects_on_x_cryptos_id"
  end

  create_table "x_cryptos", force: :cascade do |t|
    t.string "symbol", null: false
    t.decimal "current_price", precision: 10, scale: 2
    t.decimal "volume", precision: 10, scale: 2
    t.integer "rank"
    t.integer "total_supply"
    t.integer "circulating_supply"
    t.integer "max_supply"
    t.decimal "market_cap", precision: 10, scale: 2
    t.decimal "price_1h_percentage_change", precision: 10, scale: 2
    t.decimal "price_24h_percentage_change", precision: 10, scale: 2
    t.decimal "price_7d_percentage_change", precision: 10, scale: 2
    t.decimal "price_30d_percentage_change", precision: 10, scale: 2
    t.decimal "price_3m_percentage_change", precision: 10, scale: 2
    t.decimal "price_1y_percentage_change", precision: 10, scale: 2
    t.decimal "price_5y_percentage_change", precision: 10, scale: 2
    t.decimal "all_time_high_price", precision: 10, scale: 2
    t.decimal "all_time_high_percentage_drop", precision: 10, scale: 2
    t.decimal "all_time_high_date", precision: 10, scale: 2
    t.decimal "untrusted_volume", precision: 10, scale: 2
    t.boolean "current"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "x_dividends", force: :cascade do |t|
    t.bigint "x_stocks_id"
    t.decimal "amount", precision: 10, scale: 2
    t.string "currency"
    t.date "declared_date"
    t.text "description"
    t.date "ex_date"
    t.string "flag"
    t.string "frequency"
    t.date "payment_date"
    t.date "record_date"
    t.integer "refid"
    t.string "divid"
    t.string "divkey"
    t.string "subkey"
    t.integer "market_date"
    t.integer "marker_updated"
    t.boolean "current"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["x_stocks_id"], name: "index_x_dividends_on_x_stocks_id"
  end

  create_table "x_positions", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "x_stocks_id"
    t.bigint "x_cryptos_id"
    t.decimal "shares", precision: 12, scale: 4
    t.decimal "average_price", precision: 10, scale: 2
    t.decimal "total_cost", precision: 10, scale: 2
    t.decimal "market_price", precision: 10, scale: 2
    t.decimal "market_value", precision: 10, scale: 2
    t.decimal "gain_loss", precision: 10, scale: 2
    t.decimal "gain_loss_pct", precision: 10, scale: 2
    t.decimal "est_annual_dividend", precision: 12, scale: 4
    t.decimal "est_annual_income", precision: 12, scale: 4
    t.string "note"
    t.boolean "current"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_x_positions_on_user_id"
    t.index ["x_cryptos_id"], name: "index_x_positions_on_x_cryptos_id"
    t.index ["x_stocks_id"], name: "index_x_positions_on_x_stocks_id"
  end

  create_table "x_stocks", force: :cascade do |t|
    t.string "symbol", null: false
    t.decimal "volume", precision: 16
    t.decimal "current_price", precision: 10, scale: 2
    t.decimal "prev_close_price", precision: 10, scale: 2
    t.decimal "open_price", precision: 10, scale: 2
    t.decimal "day_low_price", precision: 10, scale: 2
    t.decimal "day_high_price", precision: 10, scale: 2
    t.decimal "price_change", precision: 10, scale: 2
    t.decimal "price_change_pct", precision: 10, scale: 2
    t.decimal "week_52_high", precision: 10, scale: 2
    t.date "week_52_high_date"
    t.decimal "week_52_low", precision: 10, scale: 2
    t.date "week_52_low_date"
    t.string "logo_url"
    t.boolean "current"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "active_storage_variant_records", "active_storage_blobs", column: "blob_id"
  add_foreign_key "expenses", "financial_types"
  add_foreign_key "incomes", "financial_types"
  add_foreign_key "loans", "financial_types"
  add_foreign_key "photo_sections", "photos"
  add_foreign_key "stocks", "financial_types"
  add_foreign_key "tags", "blogs"
  add_foreign_key "x_companies", "x_stocks", column: "x_stocks_id"
  add_foreign_key "x_crypto_projects", "x_cryptos", column: "x_cryptos_id"
  add_foreign_key "x_dividends", "x_stocks", column: "x_stocks_id"
  add_foreign_key "x_positions", "users"
  add_foreign_key "x_positions", "x_cryptos", column: "x_cryptos_id"
  add_foreign_key "x_positions", "x_stocks", column: "x_stocks_id"
end
