/**
 * Shopify Storefront API Client
 * 
 * Optional enhancement for fetching live product data.
 * For MVP, the site uses link-out checkout to Shopify.
 */

import { shopifyConfig } from '../../config/shopify';

interface ShopifyPrice {
  amount: string;
  currencyCode: string;
}

interface ShopifyImage {
  url: string;
  altText: string | null;
}

interface ShopifyVariant {
  id: string;
  title: string;
  availableForSale: boolean;
  price: ShopifyPrice;
}

export interface ShopifyProduct {
  title: string;
  handle: string;
  onlineStoreUrl: string | null;
  availableForSale: boolean;
  featuredImage: ShopifyImage | null;
  images: ShopifyImage[];
  priceRange: {
    minVariantPrice: ShopifyPrice;
    maxVariantPrice: ShopifyPrice;
  };
  variants: ShopifyVariant[];
}

const PRODUCT_QUERY = `
  query ProductByHandle($handle: String!) {
    productByHandle(handle: $handle) {
      title
      handle
      onlineStoreUrl
      availableForSale
      featuredImage {
        url
        altText
      }
      images(first: 10) {
        nodes {
          url
          altText
        }
      }
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      variants(first: 20) {
        nodes {
          id
          title
          availableForSale
          price {
            amount
            currencyCode
          }
        }
      }
    }
  }
`;

/**
 * Make a request to the Shopify Storefront API
 */
async function shopifyFetch<T>(query: string, variables: Record<string, unknown> = {}): Promise<T> {
  const { storeDomain, storefrontToken, apiVersion } = shopifyConfig;
  
  // Skip if not configured
  if (storeDomain.startsWith('[') || storefrontToken.startsWith('[')) {
    throw new Error('Shopify not configured');
  }

  const url = `https://${storeDomain}/api/${apiVersion}/graphql.json`;
  
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': storefrontToken,
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!response.ok) {
    throw new Error(`Shopify API error: ${response.status}`);
  }

  const json = await response.json();
  
  if (json.errors) {
    throw new Error(json.errors[0]?.message || 'Shopify GraphQL error');
  }

  return json.data;
}

/**
 * Fetch a product by handle
 */
export async function getProductByHandle(handle: string): Promise<ShopifyProduct | null> {
  try {
    const data = await shopifyFetch<{ productByHandle: ShopifyProduct | null }>(
      PRODUCT_QUERY,
      { handle }
    );
    
    if (!data.productByHandle) {
      return null;
    }

    // Transform the response
    return {
      ...data.productByHandle,
      images: data.productByHandle.images.nodes || [],
      variants: data.productByHandle.variants.nodes || [],
    };
  } catch (error) {
    console.error('Failed to fetch product:', error);
    return null;
  }
}

/**
 * Format a Shopify price for display
 */
export function formatPrice(price: ShopifyPrice): string {
  const amount = parseFloat(price.amount);
  
  const formatter = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: price.currencyCode,
  });
  
  return formatter.format(amount);
}

/**
 * Get product availability status
 */
export function getAvailabilityStatus(product: ShopifyProduct): {
  status: 'available' | 'preorder' | 'sold-out';
  label: string;
} {
  if (!product.availableForSale) {
    return { status: 'sold-out', label: 'Sold Out' };
  }
  
  // Check if any variant is available
  const hasAvailableVariant = product.variants.some(v => v.availableForSale);
  
  if (!hasAvailableVariant) {
    return { status: 'sold-out', label: 'Sold Out' };
  }
  
  // Default to pre-order for Drop 001 (customize as needed)
  return { status: 'preorder', label: 'Pre-order' };
}
