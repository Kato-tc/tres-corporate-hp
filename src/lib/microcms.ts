import { createClient } from 'microcms-js-sdk';

// .env から読み込んだ設定を使って、microCMSと通信するクライアントを作成します
export const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});