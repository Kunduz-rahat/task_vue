import { createApp } from 'vue'
import App from './App.vue'
import components from '@/components/UI'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faTrash } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faTrash)
const app = createApp(App)
components.forEach(component=>{
	app.component(component.name, component)
})
app.mount('#app')
