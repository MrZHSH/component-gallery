export function proto_2(Vue, _lodash, $axios) {

  /**
   * [$GET 全局的 GET 方法]
   *
   * @method $GET
   * @param {String} url RESTful URL
   * @param {Object} payload GET 的 body 参数
   */
  (Vue.prototype.$GET = async (url, payload) => {
    // eslint-disable-next-line no-useless-catch
    try {
      let response = null

      if (_lodash.size(payload)) {
        if (_lodash.isObject(payload)) {
          let _payload = _lodash.omitBy(
            payload,
            (item) => item === '' || item === undefined || item === null
          )

          response = await $axios.get(`${url}`, {
            params: _payload,
          })
        } else throw Error('payload must be object')
      } else response = await $axios.get(`${url}`)

      return response.data
    } catch (err) {
      throw err
    }
  }),
  /**
   * [$POST 全局的 POST 方法]
   *
   * @method $POST
   * @param {String} url RESTful URL
   * @param {Object | Array} payload POST 的 body 参数
   */
  (Vue.prototype.$POST = async (url, payload) => {
    // eslint-disable-next-line no-useless-catch
    try {
      if (_lodash.isArray(payload) || _lodash.isObject(payload)) {
        const response = await $axios.post(`${url}`, payload)
        return response.data
      } else throw Error('payload must be Array or Object')
    } catch (err) {
      throw err
    }
  }),
  /**
   * [$PATCH 全局的 PATCH 方法]
   *
   * @method $PATCH
   * @param {String} url RESTful URL
   * @param {Object | Array} payload PATCH 的 body 参数
   */
  (Vue.prototype.$PATCH = async (url, payload) => {
    // eslint-disable-next-line no-useless-catch
    try {
      if (_lodash.isArray(payload) || _lodash.isObject(payload)) {
        const response = await $axios.patch(`${url}`, payload)
        return response.data
      } else throw Error('payload must be Array or Object')
    } catch (err) {
      throw err
    }
  }),
  /**
   * [$DELETE 全局的 DELETE 方法]
   *
   * @method $DELETE
   * @param {String} url RESTful URL
   * @param {Object} payload DELETE 的 body 参数
   */
  (Vue.prototype.$DELETE = async (url, payload) => {
    // eslint-disable-next-line no-useless-catch
    try {
      let response = null
      if (_lodash.size(payload)) {
        if (_lodash.isObject(payload)) {
          response = await $axios.delete(`${url}`, {
            data: payload,
          })
        } else throw Error('payload must be Object')
      } else response = await $axios.delete(`${url}`)
      return response.data
    } catch (err) {
      throw err
    }
  }),
  /**
   * [$PUT 全局的 PUT 方法]
   *
   * @method $PUT
   * @param {String} url RESTful URL
   * @param {Object | Array} payload PUT 的 body 参数
   */
  (Vue.prototype.$PUT = async (url, payload) => {
    // eslint-disable-next-line no-useless-catch
    try {
      if (_lodash.isArray(payload) || _lodash.isObject(payload)) {
        const response = await $axios.put(`${url}`, payload)
        return response.data
      } else throw Error('payload must be Array or Object')
    } catch (err) {
      throw err
    }
  })
}