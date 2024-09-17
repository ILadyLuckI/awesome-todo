<template>
    <q-page class="todoPage q-pa-md" padding>
        <q-list bordered>

            <q-item-label header>General</q-item-label>

            <q-item 
                v-for="task in tasks"
                :key="task.id"
                v-ripple>
                <q-item-section side top>
                    <q-checkbox v-model="task.completed" />
                </q-item-section>

                <q-item-section>
                    <q-item-label>{{ task.name }}</q-item-label>
                </q-item-section>
            </q-item>
        </q-list>
    </q-page>

</template>

<script src="./TodoPage.js" />
    

<style>
.todoPage {
    background-color: #f7e8fa;
}
 
</style>
