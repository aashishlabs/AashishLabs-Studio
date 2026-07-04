export function normalizePhone(phone: string) {
  return phone.replace(/[^\d+]/g, "");
}

export function extractUtm(searchParams: URLSearchParams) {
  return {
    source: searchParams.get("utm_source") || undefined,
    medium: searchParams.get("utm_medium") || undefined,
    campaign: searchParams.get("utm_campaign") || undefined,
    term: searchParams.get("utm_term") || undefined,
    content: searchParams.get("utm_content") || undefined
  };
}
