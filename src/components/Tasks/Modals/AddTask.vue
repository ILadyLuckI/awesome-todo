<template>
  <q-card>

    <q-card-section class="row">
      <div class="text-h6">Add Task</div>
      <q-space />
      <q-btn 
        v-close-popup 
        dense 
        class="glossy" 
        round 
        color="primary" 
        icon="close" 
        />
    </q-card-section>

    <form @submit.prevent="submitForm">
      <q-card-section>
        <div class="row q-mb-sm">
          <q-input 
            label="Task name" 
            ref="name" 
            outlined 
            autofocus 
            v-model="taskToSubmit.name" 
            class="col" 
            :rules="[val => !!val || 'Field is required',
                    val => val.length <= 15 || 'Please use maximum 15 characters']"
          >
            <template v-slot:append>
              <q-icon 
                v-if="taskToSubmit.name"
                @click="taskToSubmit.name = ''"
                name="close" 
                class="cursor-pointer" 
              />
            </template>
          </q-input>
        </div>

        <div class="row q-mb-sm">
          <q-input 
            label="Due date" 
            outlined 
            filled 
            v-model="taskToSubmit.dueDate"
          >
            <template v-slot:append>
              <q-icon 
                v-if="taskToSubmit.dueDate"
                @click="clearDueDate"
                name="close" 
                class="cursor-pointer" 
              />
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                  <q-date minimal v-model="taskToSubmit.dueDate">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>

        <div v-if="taskToSubmit.dueDate" class="row q-mb-sm">
          <q-input 
            label="Due time" 
            outlined 
            filled 
            v-model="taskToSubmit.dueTime"
            class="col"
          >
            <template v-slot:append>
              <q-icon 
                v-if="taskToSubmit.dueTime"
                @click="taskToSubmit.dueTime = ''"
                name="close" 
                class="cursor-pointer" 
              />
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy transition-show="scale" transition-hide="scale">
                  <q-time v-model="taskToSubmit.dueTime">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-time>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>

      </q-card-section>
      <!-- TODO trocar botão -->
      <q-card-actions align="right">
        <q-btn 
          label="Save" 
          class="glossy" 
          rounded color="primary" 
          type="submit"
        />
      </q-card-actions>
    </form>

  </q-card>
</template>

<script src="./AddTask.js" />