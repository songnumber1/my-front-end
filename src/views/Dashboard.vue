<template>
  <v-container fluid>
    <v-card class="pa-3">
      <v-row no-gutters>
        <v-col>
          <v-card class="pa-3" outlined>
            Col
          </v-card>
        </v-col>

        <v-spacer/>

        <v-col>
          <v-card class="pa-3" outlined>
            Col
          </v-card>
        </v-col>

        <v-col>
          <v-card class="pa-3" outlined>
            Col
          </v-card>
        </v-col>
      </v-row>
      
      <v-row>

        <v-spacer/>
        <v-col>
          <v-card class="pa-3" outlined>
            Col
          </v-card>
        </v-col>

        <v-col>
          <v-card class="pa-3" outlined>
            Col
          </v-card>
        </v-col>

        <v-col>
          <v-card class="pa-3" outlined>
            Col
          </v-card>
        </v-col>
      </v-row>
    </v-card>

    <v-card class="mt-5 pa-3">
      <v-row justify="center">
        <v-col cols="auto">
          <v-card class="pa-3" outlined>
            Col
          </v-card>
        </v-col>
        
        <v-col cols="auto">
          <v-card class="pa-3" outlined>
            Col
          </v-card>
        </v-col>

        <v-col cols="auto">
          <v-card class="pa-3" outlined>
            Col
          </v-card>
        </v-col>

      </v-row>
    </v-card>

<v-card class="mt-5 pa-3">
      <v-row :style="{height:'120px'}"
      class="red"
      align="start">
        <v-col cols="auto">
          <v-card class="pa-3" outlined>
            Col
          </v-card>
        </v-col>

        <v-col>
          <v-card class="pa-3" outlined>
            Col
          </v-card>
        </v-col>

        <v-col>
          <v-card class="pa-3" outlined>
            Col
          </v-card>
        </v-col>
      </v-row>
      
      <v-row :style="{height:'120px'}" class="yellow">
        <v-col align-self="end">
          <v-card class="pa-3" outlined>
            Col
          </v-card>
        </v-col>

        <v-col align-self="center">
          <v-card class="pa-3" outlined>
            Col
          </v-card>
        </v-col>

        <v-col align-self="start">
          <v-card class="pa-3" outlined>
            Col
          </v-card>
        </v-col>
      </v-row>
    </v-card>

    <!-- Vuetify 2.0 버전 -->
    <v-card class="mt-5 pa-3">
      <v-layout>
        <v-flex>
          <v-card class="pa-3" outlined>
            Col
          </v-card>
        </v-flex>

        <v-flex>
          <v-card class="pa-3" outlined>
            Col
          </v-card>
        </v-flex>

        <v-flex>
          <v-card class="pa-3" outlined>
            Col
          </v-card>
        </v-flex>
      </v-layout>

      <v-layout>
        <v-flex>
          <v-card class="pa-3" outlined>
            Col
          </v-card>
        </v-flex>

        <v-flex>
          <v-card class="pa-3" outlined>
            Col
          </v-card>
        </v-flex>

        <v-flex>
          <v-card class="pa-3" outlined>
            Col
          </v-card>
        </v-flex>
      </v-layout>
    </v-card>
    <!-- Vuetify 2.0 버전 -->


    
  </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>