export const imports = {
  'docs/summary.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "docs-summary" */ 'docs/summary.mdx'
    ),
}
