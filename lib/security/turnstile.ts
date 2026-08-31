type TurnstileVerificationResponse = {
  success: boolean;
  "error-codes"?: string[];
};

export async function verifyTurnstileToken(token: string, remoteIp?: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!secret) {
    return { success: true, skipped: true as const };
  }

  const body = new URLSearchParams({ secret, response: token });
  if (remoteIp && remoteIp !== "unknown") {
    body.set("remoteip", remoteIp.split(",")[0]?.trim() || remoteIp);
  }

  try {
    const response = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
        cache: "no-store",
      },
    );

    if (!response.ok) {
      return {
        success: false,
        errorCodes: ["verification-service-unavailable"],
      };
    }

    const result = (await response.json()) as TurnstileVerificationResponse;
    return { success: result.success, errorCodes: result["error-codes"] || [] };
  } catch {
    return { success: false, errorCodes: ["verification-request-failed"] };
  }
}
