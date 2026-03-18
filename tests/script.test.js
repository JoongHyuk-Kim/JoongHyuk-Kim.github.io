import { describe, it, expect, vi } from 'vitest';

describe('script.js', () => {
  it('logs portfolio loaded message', async () => {
    const spy = vi.spyOn(console, 'log').mockImplementation(() => {});

    await import('../assets/js/script.js');

    expect(spy).toHaveBeenCalledWith('Portfolio loaded');

    spy.mockRestore();
  });
});
