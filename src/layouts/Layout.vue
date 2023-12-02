<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <!-- <q-btn 
          flat 
          dense 
          round 
          icon="menu" aria-label="Menu" 
          @click="leftDrawerOpen = !leftDrawerOpen"
          /> -->
        <q-toolbar-title class="absolute-center">
          Awessome Todo
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-footer>
      <q-tabs>
        <q-route-tab
        v-for="nav in navs"
        :key="nav.label"
        :to="nav.to"
        :icon="nav.icon" 
        :label="nav.label" />
      </q-tabs>
    </q-footer>

    <q-drawer class="bg-primary"
      v-model="leftDrawerOpen" 
      :breakpoint="767"
      :width="250"
      bordered 
      
      >
      <q-list>
        <q-item-label header class="text-grey-2">Navigation</q-item-label>

        <q-item 
          v-for="nav in navs"
          :key="nav.label"
          :to="nav.to" 
          class="text-grey-2"
          exact
          clickable
          >
          <q-item-section avatar>
            <q-icon :name="nav.icon" name="list" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ nav.label }}</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MainLayout',
  data() {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      navs: [
        {
          label: 'Todo',
          icon: 'list',
          to: '/'
        },
        {
          label: 'Settings',
          icon: 'settings',
          to: '/settings'
        }
      ]
    }
  },
  methods: {
    openURL
  }
}
</script>

<style lang="scss">
  @media screen and (min-width: 768px) {
    .q-footer {
      display: none;
    }
  }

  .q-drawer {
    .q-router-link--active {
      color: white !important;
    }
  }
    
</style>