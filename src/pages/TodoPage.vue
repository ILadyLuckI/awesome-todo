<template>
    <q-page class="todoPage q-pa-md">
        <q-list
            separator
            bordered>

            <q-item 
                v-for="task in tasks"
                :key="task.id"
                @click="task.completed = !task.completed"
                :class="!task.completed ? 'bg-orange-1' : 'bg-green-1'"
                clickable
                v-ripple>
                <q-item-section side top>
                    <q-checkbox v-model="task.completed" />
                </q-item-section>

                <q-item-section>
                    <q-item-label>
                        {{ task.name }}
                    </q-item-label>
                </q-item-section>

                <q-item-section side>
                    <div class="row">
                        <div class="column justify-center">
                            <q-icon 
                                name="event" 
                                size="18px" 
                                class="q-mr-xs"/>
                        </div>
                        <div class="column">
                            <q-item-label 
                                class="row justify-end"
                                caption>
                                    {{ task.dueDate }}
                            </q-item-label>
                            <q-item-label
                                class="row justify-end"
                                caption>
                                    <small>
                                        {{ task.dueTime }}
                                    </small>
                            </q-item-label>
                        </div>
                    </div>
                    
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
