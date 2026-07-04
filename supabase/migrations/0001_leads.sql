create extension if not exists "pgcrypto";

create table if not exists public.lead (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  full_name text not null,
  business_name text,
  email text not null,
  phone text not null,
  service_interest text[] not null,
  budget_range text,
  timeline text,
  message text not null,
  consent_at timestamptz not null,
  landing_page text,
  referrer text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_term text,
  utm_content text,
  user_agent_hash text,
  ip_hash text,
  status text not null default 'new',
  notification_status text not null default 'pending'
);

alter table public.lead enable row level security;

create index if not exists lead_created_at_idx on public.lead (created_at desc);
create index if not exists lead_email_idx on public.lead (email);
create index if not exists lead_status_idx on public.lead (status);
create index if not exists lead_utm_campaign_idx on public.lead (utm_campaign);
create index if not exists lead_service_interest_idx on public.lead using gin (service_interest);

create policy "No public lead access"
  on public.lead
  for all
  using (false)
  with check (false);
