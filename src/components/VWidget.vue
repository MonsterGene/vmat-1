<template>
  <div id="v-widget">
    <v-card :dark="$vuetify.dark" :color="contentBg">
      <v-toolbar :color="contentBg" flat dense card v-if="enableHeader">
        <v-toolbar-title><h4>{{title}}</h4></v-toolbar-title>
        <v-spacer></v-spacer>
        <slot name="widget-header-action"></slot>
      </v-toolbar>
      <v-divider v-if="enableHeader"></v-divider>
      <v-card-text>
        <slot name="widget-content"></slot>       
      </v-card-text>       
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'v-widget',
  props: {
    title: {
      type: String,
    },
    enableHeader: {
      type: Boolean,
      default: true
    },
    contentBg: {
      type: String,
      default: 'white'
    }
  },

  data () {
    return {

    };
  },
  computed: {

  },  
};
</script>
