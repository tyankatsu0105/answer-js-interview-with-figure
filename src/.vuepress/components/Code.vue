<template>
  <div>
    <iframe
      :src="src"
      style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
      title="code-preview"
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      src: `https://codesandbox.io/embed/${this.name}?expanddevtools=1&fontsize=14&moduleview=1&hidenavigation=1&module=%2Fsrc%2Findex.js&theme=dark`,
    };
  },
};
</script>
