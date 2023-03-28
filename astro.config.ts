import { defineConfig } from 'astro/config';
import compress from 'astro-compress';
import critters from 'astro-critters';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
    integrations: [
        mdx(),
        critters(),
        compress({
            svg: {
                plugins: [
                    {
                        name: 'preset-default',
                        params: {
                            overrides: {
                                cleanupIds: false,
                            },
                        },
                    },
                ],
            },
        }),
    ],
    site: 'https://joinkitsune.org',
});
