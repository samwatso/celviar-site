/**
 * Shopify Configuration
 * MVP: Link-out to Shopify product page
 * Future: Storefront API for live price/availability
 */

// Environment variables (use VITE_ prefix for client-side access)
export const shopifyConfig = {
  // Store domain (e.g., 'celviar.myshopify.com')
  storeDomain: import.meta.env.VITE_SHOPIFY_STORE_DOMAIN || '[SHOPIFY_STORE_DOMAIN]',
  
  // Public Storefront API token (safe for client-side)
  storefrontToken: import.meta.env.VITE_SHOPIFY_STOREFRONT_TOKEN || '[SHOPIFY_STOREFRONT_TOKEN]',
  
  // API version
  apiVersion: import.meta.env.VITE_SHOPIFY_API_VERSION || '2025-01',
  
  // Product handles
  handles: {
    richSalve: 'rich-salve',
    drop001Collection: 'drop-001',
  },
  
  // Direct product URLs (MVP checkout approach)
  productUrls: {
    richSalve: import.meta.env.VITE_SHOPIFY_PRODUCT_URL_RICH_SALVE || '[SHOPIFY_PRODUCT_URL_RICH_SALVE]',
  },
  
  // Optional: Direct checkout URLs
  checkoutUrls: {
    richSalve: import.meta.env.VITE_SHOPIFY_CHECKOUT_URL_RICH_SALVE || '[SHOPIFY_CHECKOUT_URL_RICH_SALVE]',
  },
} as const;

// Helper to get the purchase URL (prefers product page for MVP)
export function getProductPurchaseUrl(productKey: keyof typeof shopifyConfig.productUrls): string {
  return shopifyConfig.productUrls[productKey];
}

// Fallback price display when Shopify API is not available
export const fallbackPrices = {
  richSalve: {
    amount: '[PRICE_GBP]',
    currencyCode: 'GBP',
    displayPrice: '£[PRICE]',
  },
} as const;
