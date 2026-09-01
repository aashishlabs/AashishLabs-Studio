export function GoogleConsentDefault({ enabled }: { enabled: boolean }) {
  if (!enabled) return null;

  return (
    <script
      id="google-consent-default"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          var analyticsConsent = 'denied';
          try {
            analyticsConsent = localStorage.getItem('aashishlabs_analytics_consent') === 'granted' ? 'granted' : 'denied';
          } catch (error) {}
          gtag('consent', 'default', {
            analytics_storage: analyticsConsent,
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            wait_for_update: 500
          });
        `,
      }}
    />
  );
}
