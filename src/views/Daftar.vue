<template>

  <v-container>
    <v-tabs>
        <v-tab>Masuk</v-tab>
        <v-tab>Daftar</v-tab>
    </v-tabs>

    <v-row no-gutters>
        <v-col
            cols="12"
            sm="6"
        >
            <v-col md="20">
                <v-row>
                    <v-col md="20">
                        <v-img
                            :src="require('../assets/logo.svg')"
                            class="my-3"
                            contain
                            height="100"
                        />
                        
                        <v-form 
                            ref="form"
                            v-model="valid"
                            lazy-validation
                        >
                            <p>Email</p>
                                    <v-text-field
                                        v-model="email"
                                        :rules="emailRules"
                                        label=""
                                        filled
                                        clearable
                                        required
                                    ></v-text-field>

                                    <p>Password</p>
                                    <v-text-field
                                        v-model="password"
                                        :rules="password"
                                        label=""
                                        filled
                                        clearable
                                        required
                                    ></v-text-field>

                                    <p>Konfirmasi Password</p>
                                    <v-text-field
                                        v-model="konfirmasipassword"
                                        :rules="konfirmasipassword"
                                        label=""
                                        filled
                                        clearable
                                        required
                                    ></v-text-field>

                                    <v-checkbox
                                        v-model="checkbox"
                                        :rules="ingat"
                                        label="Saya menyetujui kebijakan dan persyaratan pengguna"
                                        required
                                    ></v-checkbox>
                                    
                                    <v-btn 
                                        color="primary"
                                        class="mr-4"
                                        @click="redirectLogin"
                                        >
                                        Daftar
                                    </v-btn>
                        </v-form>
                    </v-col>
                </v-row>
            </v-col>
                
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-card
          class="pa-2"
          tile
        >
          ???
        </v-card>
      </v-col>
    </v-row>

            
        
    </v-container>
</template>