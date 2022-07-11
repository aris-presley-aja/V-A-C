const axios = require('axios')
const bodyParser = require('body-parser')
const app = axios();
const NotFound = { template: '<p>Page not found</p>' }
const Home = { template: '<p>home page</p>' }
const About = { template: '<p>about page</p>' }

const routes = {
  '/User': user,
  '/Products': Products,
  '/Category': Category,
  '/about': About
}

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
})
export default {
    '/': 'Home',
    '/User': 'user',
    '/Products': 'Products',
    '/Category': 'Category',
    '/about': 'About'
  }
app.use((req, res, next)=> {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", 'GET, POST, PUT, DELETE');
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
next()
})
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.listen(3000, ()=>{
console.log('Server running on port 3000');
})