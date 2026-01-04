/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SHOPIFY_STORE_DOMAIN: string;
  readonly VITE_SHOPIFY_STOREFRONT_TOKEN: string;
  readonly VITE_SHOPIFY_API_VERSION: string;
  readonly VITE_SHOPIFY_PRODUCT_URL_RICH_SALVE: string;
  readonly VITE_SHOPIFY_CHECKOUT_URL_RICH_SALVE: string;
  readonly VITE_WAITLIST_FORM_ACTION: string;
  readonly VITE_CONTACT_FORM_ACTION: string;
  readonly VITE_INSTAGRAM_URL: string;
  readonly VITE_TIKTOK_URL: string;
  readonly VITE_YOUTUBE_URL: string;
  readonly VITE_PINTEREST_URL: string;
  readonly VITE_SUPPORT_EMAIL: string;
  readonly VITE_PRESS_EMAIL: string;
  readonly VITE_WHOLESALE_EMAIL: string;
  readonly VITE_PROCESSING_TIME: string;
  readonly VITE_DELIVERY_WINDOWS: string;
  readonly VITE_RETURN_WINDOW_DAYS: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
