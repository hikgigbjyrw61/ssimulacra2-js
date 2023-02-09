import typescript from "@rollup/plugin-typescript";

export default {
  input: `src/index.ts`,
  output: [
    {
      file: "dist/index.umd.js",

      
      name: "ssimulacra2Js",
      format: "umd",
      sourcemap: true,
    },
    { file: "dist/bundle.esm.js", format: "es", sourcemap: true },
  ],
  // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
  external: [],
  watch: {
    include: "src/**",
  },
  plugins: [typescript()],
};
