export default defineAppConfig({
  ui: {
    colors: {
      primary: "purple",
      gray: "cool",
    },
    container: {
      base: "w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8 !py-5",
    },
    modal: {
      slots: {
        content: "w-[90vw] min-w-5xl",
      },
    },
  },
});
