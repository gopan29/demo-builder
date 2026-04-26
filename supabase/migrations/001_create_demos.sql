-- デモ案件テーブル
create table demos (
  id uuid primary key default gen_random_uuid(),
  slug varchar(100) not null unique,
  client_name varchar(100) not null,
  industry_template varchar(50) not null default 'dog_salon',
  theme_color varchar(7) not null default '#3B82F6',
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- updated_at 自動更新
create or replace function update_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger demos_updated_at
  before update on demos
  for each row execute function update_updated_at();
