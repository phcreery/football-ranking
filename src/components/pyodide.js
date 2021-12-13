import { ref } from 'vue'

export function usePyodide(document, window) {
  const isLoading = ref(false)
  const isInit = ref(false)

  function loadScript(src) {
    // eslint-disable-line no-param-reassign
    return new Promise(function (resolve, reject) {
      let shouldAppend = false
      let el = document.querySelector('script[src="' + src + '"]')
      if (!el) {
        el = document.createElement('script')
        el.type = 'text/javascript'
        el.async = true
        el.src = src
        shouldAppend = true
      } else if (el.hasAttribute('data-loaded')) {
        resolve(el)
        return
      }

      el.addEventListener('error', reject)
      el.addEventListener('abort', reject)
      el.addEventListener('load', function loadScriptHandler() {
        el.setAttribute('data-loaded', true)
        resolve(el)
      })

      if (shouldAppend) document.head.appendChild(el)
    })
  }

  async function init() {
    isLoading.value = true
    let LOCAL_PYODIDE = false
    try {
      if (LOCAL_PYODIDE) {
        let LOCAL_PYODIDE_SERVER_URL = 'http://localhost:8081/'
        window.languagePluginUrl = `${LOCAL_PYODIDE_SERVER_URL}`
        await loadScript(`${LOCAL_PYODIDE_SERVER_URL}pyodide.js`)
      } else {
        window.languagePluginUrl = 'https://cdn.jsdelivr.net/pyodide/v0.18.1/full/'
        await loadScript('https://cdn.jsdelivr.net/pyodide/v0.18.1/full/pyodide.js')
      }
      // wait for pyodide ready
      await window.languagePluginLoader
      await window.pyodide.loadPackage(['sympy', 'numpy', 'scipy'])
      isInit.value = true
      console.log('pyodide loaded')
    } catch (error) {
      console.log('pyodide error', error)
    }
    isLoading.value = false
  }

  function run(script, input) {
    isLoading.value = true
    window.pyinput = JSON.parse(JSON.stringify(input))
    window.ret = undefined
    console.log('pyodide response:', window.pyodide.runPython(script))
    let ret = window.pyret.toJs()
    isLoading.value = false
    return ret
  }

  return {
    init,
    run,
    isInit,
    isLoading,
    instance: window.pyodide,
  }
}
