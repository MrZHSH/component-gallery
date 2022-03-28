# cover-axios

> 二次封装 axios,使 vue.js 中使用 axios 变得更加简单

# Used

`main.js`

```bash
import Vue from 'vue'
import Vaxios from "@component-gallery/cover-axios/src/cover-axios";

Vue.use(Vaxios, {
  useparam: true,
  param: {
    baseURL: '/',
    timeout: 0,
    token: ''
  }
})
```

## options

| option     | type     | default                                                                                        | description                                                                          |
| ---------- | -------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| method     | function | null                                                                                           | 自定义 axios 拦截方法,如果有自定义的方法,推荐设置自定义的拦截方法                    |
| throwError | object   | { get_debug: false,post_debug: false,put_debug: false,patch_debug: false,delete_debug: false } | 当然可以直接使用 Boolean 值进行全部开启和全部关闭,该作用是在控制台中输出请求到的数据 |
| useparam   | boolean  | false                                                                                          | 如果不想自定义 axios 拦截方法,该参数必须为 true                                      |
| param      | object   | { baseURL: '<http://127.0.0.1:8080/api>',timeout: 0 }                                          | 自定义 axios 拦截参数                                                                |

## 在 vue 中使用

```html
<script>
  export default {
    methods: {
      get() {
        const url = `/users?id=123` // 必填
        this.$Get(url).then((data) => {
          console.log(data)
        })
      },
      post() {
        const url = `/users` // 必填
        const payload = {
          id: 123,
          username: 'admin',
          pwd: 'admin',
        } // payload 必须为 Object 或者 Array,必填

        this.$POST(url, payload).then((data) => {
          console.log(data)
        })
      },
    },
    put() {
      const url = `/users`
      const payload = {
        id: 123,
        username: 'admin',
        pwd: 'admin',
      } // payload 必须为 Object 或者 Array,必填

      this.$PUT(url, payload).then((data) => {
        console.log(data)
      })
    },
    patch() {
      const url = `/users/pwd`
      const payload = {
        pwd: 'admin',
        pwd2: 'admin',
      } // payload 必须为 Object 或者 Array,必填

      this.$PATCH(url, payload).then((data) => {
        console.log(data)
      })
    },
    deleteById() {
      const url = `/users/1`
      this.$DELETE(url).then((data) => {
        console.log(data)
      })
    },
    deleteByPayload() {
      const url = `/users`
      const payload = {
        id: [1, 2, 3, 4],
      } // payload 必须为 Object 或者 Array,非必填

      this.$DELETE(url, payload).then((data) => {
        console.log(data)
      })
    },
  }
</script>
```
