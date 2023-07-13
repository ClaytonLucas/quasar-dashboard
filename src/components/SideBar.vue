<template>
   
    <q-header class="bg-grey-2 text-dark" bordered>
        <q-toolbar>
            <q-btn
            flat
            dense
            round
            @click="leftDrawerOpen = !leftDrawerOpen"
            aria-label="Menu"
            icon="menu"
            />
            <q-input borderless  v-model="search" input-class="text-left" class="q-ml-md" label="Search...">
            </q-input>
            <q-space></q-space>
            <q-separator vertical/>
            <q-btn dense round flat @click="showNotif" icon="notifications" class="q-mx-lg">
                <q-badge color="green" floating transparent>5</q-badge>
            </q-btn>
            <q-separator vertical />
            <q-avatar class="q-ml-lg">
                <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <q-btn color="dark" label="John Doe" flat />
        </q-toolbar>
    </q-header>
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
            <q-list>
                <q-item clickable active-class="my-menu-link" v-ripple :active="link === 'profile'" @click="link = 'profile'">
                    <q-item-section avatar>
                        <q-icon name="person" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Profile</q-item-label>
                    </q-item-section>
                </q-item>
                <q-item clickable active-class="my-menu-link" v-ripple :active="link === 'My page'" @click="link = 'My page'">
                    <q-item-section avatar>
                        <q-icon name="description" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>My page</q-item-label>
                    </q-item-section>
                </q-item>
                <q-item clickable 
                active-class="my-menu-link"
                v-ripple
                :active="link === 'Dashboard'"
                @click="link = 'Dashboard'">
                
                <q-item-section avatar>
                    <q-icon name="dashboard" />
                </q-item-section>
                <q-item-section>
                    <q-item-label>Dashboard</q-item-label>
                </q-item-section>
                </q-item>
                <q-item clickable 
                active-class="my-menu-link"
                v-ripple
                :active="link === 'Edit Page'"
                @click="link = 'Edit Page'">
                
                <q-item-section avatar>
                    <q-icon name="edit" />
                </q-item-section>
                <q-item-section>
                    <q-item-label>Edit Page</q-item-label>
                </q-item-section>
                </q-item>
                <q-item clickable 
                active-class="my-menu-link"
                v-ripple
                :active="link === 'mail'"
                @click="link = 'mail'">
                
                <q-item-section avatar>
                    <q-icon name="mail" />
                </q-item-section>
                <q-item-section>
                    <q-item-label>Email</q-item-label>
                </q-item-section>
                </q-item>
                <q-item clickable 
                active-class="my-menu-link"
                v-ripple
                :active="link === 'chat'"
                @click="link = 'chat'">
                
                <q-item-section avatar>
                    <q-icon name="chat" />
                </q-item-section>
                <q-item-section>
                    <q-item-label>Chat</q-item-label>
                </q-item-section>
                </q-item>
                <q-item clickable 
                active-class="my-menu-link"
                v-ripple
                :active="link === 'chart'"
                @click="link = 'chart'">
                
                <q-item-section avatar>
                    <q-icon name="bar_chart" />
                </q-item-section>
                <q-item-section>
                    <q-item-label>Charts</q-item-label>
                </q-item-section>
                </q-item>
                <q-item clickable 
                active-class="my-menu-link"
                v-ripple
                :active="link === 'Settings'"
                @click="link = 'Settings'">
                
                <q-item-section avatar>
                    <q-icon name="settings" />
                </q-item-section>
                <q-item-section>
                    <q-item-label>Settings</q-item-label>
                </q-item-section>
                </q-item>
                
            </q-list>
            
    </q-drawer>
    
</template>
<script>
import { useQuasar } from 'quasar'
import {ref, onMounted} from 'vue'
    export default{
        name: 'SideBar',

        setup() {
            const $q = useQuasar()
            const showNotif = () => {
            $q.notify({
            message: 'Você tem 5 novas mensagens',
            icon: 'announcement'
            })
        }
        onMounted(()=>{
            showNotif();
        })
            return {

                leftDrawerOpen: ref(true),
                link: ref('profile'),
                search: ref(""),
                showNotif
            }
        }
    }
</script>
<style scoped>
.my-menu-link {
    border-left: 4px solid #2698D6
}
</style>
