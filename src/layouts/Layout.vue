<template>
    <q-layout view="hHh lpR fFf">

        <!-- header -->
        <q-header elevated>
            <q-toolbar>
                <q-toolbar-title class="absolute-center"> 
                    Awesome Todo 
                </q-toolbar-title>
            </q-toolbar>
        </q-header>

        <!-- drawer -->
        <q-drawer
            v-model="leftDrawerOpen"
            show-if-above
            bordered
            content-class="bg-primary"
            :width="250"
        >
            <q-list dark>
                <q-item-label header>Navigation</q-item-label>

                <q-item 
                    v-for="nav in navs"
                    exact 
                    clickable
                    class="text-grey-4"
                    :key="nav.label"
                    :to="nav.to" 
                    >
                    <q-item-section avatar>
                        <q-icon :name="nav.icon" />
                    </q-item-section>

                    <q-item-section>
                        <q-item-label>{{ nav.label }}</q-item-label>
                    </q-item-section>
                </q-item>
            </q-list>
        </q-drawer>

        <!-- footer -->
        <q-footer>
            <q-tabs>
                <q-route-tab 
                    v-for="nav in navs"
                    :key="nav.label"
                    :to="nav.to"
                    :icon="nav.icon" 
                    :label="nav.label" 
                />
                
            </q-tabs>
        </q-footer>

        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script src="./Layout.js"/>

<style lang="scss">
    @media screen and (min-width: 768px) {
        
    }

    .q-drawer { 
        .q-router-link--exact-active {
            color: white !important
        }
    }
</style>