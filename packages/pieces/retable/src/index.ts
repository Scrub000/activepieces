import { createPiece, PieceAuth } from '@activepieces/pieces-framework';
import { retableCreateRecordAction } from './lib/actions/insert-record';
const markdown = `
To obtain your API key, follow these steps:

1. Go to Account Overview by clicking your profile-pic (top-right).
2. Go to API section and enable API key.
3. Copy API key.`;

export const retableAuth = PieceAuth.SecretText({
  displayName: 'API Key',
  required: true,
  description: markdown,
  validate: async ({ auth }) => {
    if (auth.startsWith('RTBLv1-')) {
      return {
        valid: true,
      };
    }
    return {
      valid: false,
      error: 'Invalid API Key',
    };
  },
});
export const retable = createPiece({
  displayName: 'Retable',
  auth: retableAuth,
  minimumSupportedRelease: '0.9.0',
  logoUrl: 'https://cdn.activepieces.com/pieces/retable.png',
  authors: ['kishanprmr'],
  actions: [retableCreateRecordAction],
  triggers: [],
});
