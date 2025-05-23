import { getComponents } from '../storybook-api.js';
import {
  ErrorCode,
  McpError,
} from '@modelcontextprotocol/sdk/types.js';

export const listComponents = async (storybookStaticDir: string) => {
  try {
    const components = await getComponents(storybookStaticDir);
    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(components, null, 2),
        },
      ],
    };
  } catch (error) {
    console.error('Error listing components:', error);
    throw new McpError(ErrorCode.InternalError, 'Failed to list components');
  }
};
