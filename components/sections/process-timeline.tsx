import { siteConfig } from "@/content/site";
import { ProcessSteps } from "@/components/sections/process-steps";

export function ProcessTimeline() {
  return <ProcessSteps steps={siteConfig.home.process} />;
}
