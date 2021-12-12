<template>
  <div>
    <BlockUI :blocked="page_loading" :fullScreen="true"> </BlockUI>
    <div class="p-d-flex p-jc-between">
      <h1>Football Ranking</h1>
      <div class="p-p-3"><Button label="Refresh" @click="refreshData()" /></div>
    </div>
    <TabView>
      <TabPanel header="Ranking">
        <DataTable
          :value="ranking"
          responsiveLayout="scroll"
          class="p-datatable-sm p-datatable-customers"
          :loading="python_loading"
          dataKey="id"
          v-model:filters="filters1"
          :globalFilterFields="['name']"
        >
          <template #header>
            <div class="p-d-flex p-jc-between">
              <Button type="button" icon="pi pi-filter-slash" label="Clear" class="p-button-outlined" @click="initFilters1()" />
              <span class="p-input-icon-left">
                <i class="pi pi-search" />
                <InputText v-model="filters1['global'].value" placeholder="Keyword Search" />
              </span>
            </div>
          </template>
          <Column field="rank" header="Rank"></Column>
          <Column field="name" header="Team"></Column>
        </DataTable>
      </TabPanel>
      <TabPanel header="All Games">
        <DataTable
          :value="games"
          responsiveLayout="scroll"
          class="p-datatable-sm p-datatable-customers"
          :loading="table_loading"
          dataKey="id"
          v-model:filters="filters1"
          :globalFilterFields="['home_team', 'away_team']"
        >
          <template #header>
            <div class="p-d-flex p-jc-between">
              <Button type="button" icon="pi pi-filter-slash" label="Clear" class="p-button-outlined" @click="initFilters1()" />
              <span class="p-input-icon-left">
                <i class="pi pi-search" />
                <InputText v-model="filters1['global'].value" placeholder="Keyword Search" />
              </span>
            </div>
          </template>
          <Column field="home_team" header="Home"></Column>
          <Column field="home_points" header="Score"></Column>
          <Column field="away_points" header="Score"></Column>
          <Column field="away_team" header="Visitors"></Column>
        </DataTable>
      </TabPanel>
    </TabView>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'
import BlockUI from 'primevue/blockui'

import { FilterMatchMode } from 'primevue/api'

import { fetchGames } from './API_football.js'

// import python_version from '!!raw-loader!./python_version.py'
// import python_sympy from '!!raw-loader!./python_sympy.py'
import python_numpy from '!!raw-loader!./python_numpy.py'

export default {
  components: {
    Button: Button,
    DataTable: DataTable,
    Column: Column,
    InputText: InputText,
    // TabMenu:TabMenu,
    TabView: TabView,
    TabPanel: TabPanel,
    BlockUI: BlockUI,
  },
  setup() {
    const table_loading = ref(false)
    const python_loading = ref(false)
    const page_loading = ref(false)
    const games = ref(null)
    const ranking = ref(null)
    const filters1 = ref({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    })

    onMounted(async () => {
      page_loading.value = true
      console.log('asdf')
      await refreshData()
      await initializePyodide()
      // runTestCommand()
      computeRanking()
      page_loading.value = false
    })

    const initFilters1 = () => {
      filters1.value = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      }
    }

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

    async function refreshData() {
      table_loading.value = true
      let data
      data = await fetchGames()
      games.value = JSON.parse(JSON.stringify(data))
      console.log(games)
      table_loading.value = false
    }

    async function initializePyodide() {
      python_loading.value = true
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
        console.log('pyodide loaded')
      } catch (error) {
        console.log('pyodide error', error)
      }
      python_loading.value = false
    }
    function computeRanking() {
      python_loading.value = true
      window.data = JSON.parse(JSON.stringify(games.value))
      window.ranking = []

      console.log('py:', window.pyodide.runPython(python_numpy))
      let ranking_as_map = window.ranking.toJs()
      let unsorted_ranking = Array.from(ranking_as_map, ([name, value]) => ({ name, value }))
      let sorted_ranking = unsorted_ranking.slice().sort((a, b) => {
        return b.value - a.value
      })
      sorted_ranking.map((v) => {
        v.rank = sorted_ranking.indexOf(v) + 1
      })
      ranking.value = sorted_ranking
      console.log(ranking.value)
      python_loading.value = false
    }

    return {
      table_loading,
      python_loading,
      page_loading,
      games,
      ranking,
      filters1,
      initFilters1,
      refreshData,
      initializePyodide,
      computeRanking,
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
