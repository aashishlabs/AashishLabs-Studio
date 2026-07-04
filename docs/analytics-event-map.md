# Analytics Event Map

V1 event taxonomy follows the BRD/PRD/FSD.

| Event | Trigger | PII Rule |
| --- | --- | --- |
| page_view | GA4 automatic route/page load | No PII |
| cta_click | Primary/secondary CTA click | No PII |
| whatsapp_click | WhatsApp CTA click | No PII |
| phone_click | Call CTA click | No PII |
| email_click | Email CTA click | No PII |
| form_start | First form focus | No PII |
| form_error | Validation/server error | Error type only |
| generate_lead | Stored lead success | Service/budget/campaign only |
| case_study_view | Case study route viewed | Slug/category only |
| service_view | Service route viewed | Slug only |
| scroll_depth | 25/50/75/90 thresholds | Page path only |

GA4 uses `NEXT_PUBLIC_GA_MEASUREMENT_ID`. Microsoft Clarity uses `NEXT_PUBLIC_CLARITY_ID`.
