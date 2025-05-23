import { beforeEach, describe, expect, it, spyOn } from 'bun:test';
import { ErrorCode, McpError } from '@modelcontextprotocol/sdk/types.js';
import * as storybookApi from '../storybook-api.js'
import type { Component } from '../storybook-api.js';
import { getComponentDetails } from './get-component-details.js';

describe('get-component-details', () => {
  const mockConfig = { storybookStaticDir: './test-storybook-static' };
  const mockComponents: Component[] = [
    {
      id: 'button',
      name: 'Button',
      props: [{ name: 'color', type: 'string', defaultValue: null }, { name: 'size', type: 'string', defaultValue: null }],
      variants: {
        'default': {
          name: 'Default',
          title: 'Button',

          parameters: {
            __id: 'button-default',
            docsOnly: false,
            fileName: 'button.stories.js',
            jsx: '<Button>Click me</Button>'
          }
        }
      }
    },
    {
      id: 'card',
      name: 'Card',
      props: [{ name: 'title', type: 'string', defaultValue: null }],
      variants: { }
    }
  ];

  beforeEach(() => {
    // Mock getComponents to return our test components
    spyOn(storybookApi, 'getComponents').mockResolvedValue(mockComponents);
  });

  it('should return the component details when the component is found', async () => {
    const result = await getComponentDetails({ name: 'Button', storybookStaticDir: mockConfig.storybookStaticDir });

    expect(storybookApi.getComponents).toHaveBeenCalledWith(mockConfig.storybookStaticDir);

    expect(result).toEqual({
      content: [
        {
          type: 'text',
          text: JSON.stringify(mockComponents[0], null, 2),
        },
      ],
    });
  });

  it('should throw McpError when the component is not found', async () => {
    spyOn(console, 'error').mockImplementation(() => {});
    await expect(getComponentDetails({ name: 'NonExistent', storybookStaticDir: mockConfig.storybookStaticDir }))
      .rejects
      .toThrow(new McpError(ErrorCode.MethodNotFound, 'Component "NonExistent" not found'));
  });

  it('should throw McpError when getComponents fails', async () => {
    // Mock getComponents to throw an error
    const testError = new Error('Test error');
    spyOn(storybookApi, 'getComponents').mockRejectedValue(testError);

    // Expect function to throw McpError
    await expect(getComponentDetails({ name: 'Button', storybookStaticDir: mockConfig.storybookStaticDir })).rejects.toThrow(McpError);

    // Verify console error was called
    expect(console.error).toHaveBeenCalledWith('Error getting component details:', testError);
  });
});
