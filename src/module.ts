import {
  defineNuxtModule,
  // createResolver,
  addComponent,
  addImports,
} from "@nuxt/kit";

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "@deegital/nuxt-trustup-io-toasteo",
    configKey: "trustupIoToasteo",
  },
  defaults: {},
  setup(_options, nuxt) {
    // const resolver = createResolver(import.meta.url);

    addComponent({
      name: "TrustupIoToasteo",
      export: "NotificationContainer",
      filePath: "@deegital/vue-trustup-io-toasteo",
    });

    addImports({
      name: "useToasteo",
      from: "@deegital/vue-trustup-io-toasteo",
    });

    nuxt.options.css.unshift("@deegital/vue-trustup-io-toasteo/dist/style.css");
  },
});
