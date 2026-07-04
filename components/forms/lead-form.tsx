"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { services } from "@/content/site";
import { extractUtm } from "@/lib/lead/normalize";
import { budgetRanges, leadSchema, timelines, type LeadInput } from "@/lib/validation/lead";

type LeadFormProps = {
  formId?: string;
};

export function LeadForm({ formId = "primary-lead-form" }: LeadFormProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [serverError, setServerError] = useState<string | null>(null);
  const [hasStarted, setHasStarted] = useState(false);

  const defaultService = searchParams.get("service");
  const utm = useMemo(() => extractUtm(searchParams), [searchParams]);

  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting }
  } = useForm<LeadInput>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      fullName: "",
      businessName: "",
      email: "",
      phone: "",
      serviceInterest: defaultService ? [defaultService] : [],
      budgetRange: "",
      timeline: "",
      message: "",
      consent: false,
      honeypot: "",
      utm
    }
  });

  useEffect(() => {
    setValue("landingPage", window.location.href);
    setValue("referrer", document.referrer || "");
  }, [setValue]);

  async function onSubmit(values: LeadInput) {
    setServerError(null);
    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values)
    });

    if (!response.ok) {
      const data = (await response.json().catch(() => null)) as { error?: string } | null;
      setServerError(data?.error || "Something went wrong. Please retry or use WhatsApp.");
      return;
    }

    window.dispatchEvent(new CustomEvent("generate_lead", { detail: { formId } }));
    router.push("/thank-you");
  }

  function markStarted() {
    if (!hasStarted) {
      setHasStarted(true);
      window.dispatchEvent(new CustomEvent("form_start", { detail: { formId } }));
    }
  }

  return (
    <form className="grid gap-5" onSubmit={handleSubmit(onSubmit)} onFocus={markStarted} noValidate>
      {serverError ? (
        <div role="alert" className="rounded-md border border-destructive/40 bg-destructive/10 p-3 text-sm text-destructive">
          {serverError}
        </div>
      ) : null}
      <input className="hidden" tabIndex={-1} autoComplete="off" {...register("honeypot")} aria-hidden="true" />
      <div className="grid gap-2">
        <Label htmlFor="fullName">Full name</Label>
        <Input id="fullName" autoComplete="name" {...register("fullName")} aria-invalid={!!errors.fullName} />
        <FieldError message={errors.fullName?.message} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="businessName">Business name</Label>
          <Input id="businessName" autoComplete="organization" {...register("businessName")} />
          <FieldError message={errors.businessName?.message} />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" autoComplete="tel" {...register("phone")} aria-invalid={!!errors.phone} />
          <FieldError message={errors.phone?.message} />
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" autoComplete="email" {...register("email")} aria-invalid={!!errors.email} />
        <FieldError message={errors.email?.message} />
      </div>
      <Controller
        control={control}
        name="serviceInterest"
        render={({ field }) => (
          <div className="grid gap-2">
            <Label>Service interest</Label>
            <div className="grid gap-2 sm:grid-cols-2">
              {services.map((service) => {
                const checked = field.value?.includes(service.slug);
                return (
                  <label key={service.slug} className="flex items-center gap-3 rounded-md border bg-background p-3 text-sm">
                    <Checkbox
                      checked={checked}
                      onCheckedChange={(state) => {
                        const next = state
                          ? [...(field.value || []), service.slug]
                          : (field.value || []).filter((item) => item !== service.slug);
                        field.onChange(next);
                      }}
                    />
                    {service.title}
                  </label>
                );
              })}
            </div>
            <FieldError message={errors.serviceInterest?.message} />
          </div>
        )}
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <Controller
          control={control}
          name="budgetRange"
          render={({ field }) => (
            <div className="grid gap-2">
              <Label>Budget range</Label>
              <Select value={field.value || ""} onValueChange={field.onChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select budget" />
                </SelectTrigger>
                <SelectContent>
                  {budgetRanges.map((item) => (
                    <SelectItem key={item} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
        />
        <Controller
          control={control}
          name="timeline"
          render={({ field }) => (
            <div className="grid gap-2">
              <Label>Timeline</Label>
              <Select value={field.value || ""} onValueChange={field.onChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select timeline" />
                </SelectTrigger>
                <SelectContent>
                  {timelines.map((item) => (
                    <SelectItem key={item} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message">Project message</Label>
        <Textarea id="message" {...register("message")} aria-invalid={!!errors.message} />
        <FieldError message={errors.message?.message} />
      </div>
      <Controller
        control={control}
        name="consent"
        render={({ field }) => (
          <div className="grid gap-2">
            <label className="flex items-start gap-3 text-sm leading-6 text-muted-foreground">
              <Checkbox checked={field.value} onCheckedChange={field.onChange} />
              <span>
                I agree to be contacted about this enquiry and accept the{" "}
                <Link href="/privacy-policy" className="text-primary underline-offset-4 hover:underline">
                  privacy policy
                </Link>
                .
              </span>
            </label>
            <FieldError message={errors.consent?.message} />
          </div>
        )}
      />
      <Button type="submit" size="lg" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Submit enquiry"}
      </Button>
    </form>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="text-sm text-destructive" role="alert">
      {message}
    </p>
  );
}
