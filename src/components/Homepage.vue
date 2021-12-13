<template>
  <div>
    <BlockUI :blocked="page_loading" :fullScreen="true"> </BlockUI>
    <Toast />
    <div class="p-d-flex p-jc-between">
      <h1>{{ selectedYear1 }} Football Rankings</h1>
      <div class="p-p-3">
        <Dropdown class="p-m-1" v-model="selectedYear1" :options="years" optionLabel="label" optionValue="value" placeholder="Select a Year" />
        <Button class="p-m-1" icon="pi pi-info-circle" @click="openModal()" v-tooltip.bottom="'Info'" />
        <Button
          class="p-m-1"
          :icon="table_loading ? 'pi pi-spin pi-cloud-download' : 'pi pi-cloud-download'"
          @click="fetchData()"
          v-tooltip.bottom="'Update Games'"
        />
        <Button
          class="p-m-1"
          :icon="python_loading ? 'pi pi-spin pi-bolt' : 'pi pi-bolt'"
          @click="computeRanking()"
          v-tooltip.bottom="'Recompute Rankings'"
        />
      </div>
    </div>
    <transition-group name="p-message" tag="div">
      <Message v-if="table_loading" severity="info">Fetching New Game Data</Message>
      <Message v-if="python_initializing" severity="info">Warming up flux capacitor</Message>
      <Message v-if="python_loading" severity="info">Computing Ranking</Message>
    </transition-group>
    <TabView>
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
          <Column field="start_date" header="Date Played" :sortable="true">
            <template #body="slotProps">
              <p>{{ new Date(Date.parse(slotProps.data.start_date)).toLocaleDateString('en-US') }}</p>
            </template>
          </Column>
        </DataTable>
      </TabPanel>
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
    </TabView>

    <Dialog header="Header" v-model:visible="displayModal" :style="{ width: '50vw' }" :modal="true">
      <p class="p-m-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
        anim id est laborum.
      </p>
      <template #footer>
        <!-- <Button label="Ok" icon="pi pi-times" @click="closeModal()" class="p-button-text" /> -->
        <Button label="Cool" icon="pi pi-check" @click="closeModal()" autofocus />
      </template>
    </Dialog>
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
import Toast from 'primevue/toast'
import Dropdown from 'primevue/dropdown'
import Dialog from 'primevue/dialog'
import Message from 'primevue/message'

import { FilterMatchMode } from 'primevue/api'
import { useToast } from 'primevue/usetoast'

import { usePyodide } from './pyodide.js'
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
    TabView: TabView,
    TabPanel: TabPanel,
    BlockUI: BlockUI,
    Toast: Toast,
    Dropdown: Dropdown,
    Dialog: Dialog,
    Message: Message,
  },
  setup() {
    const page_loading = ref(false)
    const table_loading = ref(false)
    const python_loading = ref(false)

    const current_year = new Date().getFullYear()
    const years = ref(Array.from({ length: 20 }, (_, i) => ({ label: current_year - i, value: current_year - i })))
    const selectedYear1 = ref(new Date().getFullYear())
    const displayModal = ref(false)

    const games = ref(null)
    const ranking = ref(null)
    const filters1 = ref({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    })

    const pyodide = usePyodide(document, window)
    const toast = useToast()

    onMounted(async () => {
      page_loading.value = true
      await fetchData()
      await pyodide.init()
      if (pyodide.isInit.value === false)
        toast.add({ severity: 'error', summary: 'Pyodide Init Failed', detail: 'See console log for details', life: 3000 })
      console.log('globale window pyodide', window.pyodide)
      computeRanking()
      page_loading.value = false
    })

    const initFilters1 = () => {
      filters1.value = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      }
    }

    const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0)
    const removeDuplcates = (array) => [...new Set(array)]

    function filterTeams(games) {
      let games_init = games
      let away_teams = games.map((game) => game.away_team)
      let home_teams = games.map((game) => game.home_team)
      let teams = away_teams.concat(home_teams)
      let team_roster = teams

      let removed_teams = []
      teams.forEach((team) => {
        let games_played = countOccurrences(teams, team)
        // console.log(team, 'played', games_played, 'x')
        if (games_played < 5) {
          removed_teams.push(team)
          games = games.filter((game) => game.home_team !== team)
          games = games.filter((game) => game.away_team !== team)
        }
      })
      console.log('teams initially gathered', removeDuplcates(team_roster).length, removeDuplcates(team_roster))
      console.log('removed teams', removeDuplcates(removed_teams).length, removeDuplcates(removed_teams))
      console.log('games initially', games_init.length)
      console.log('games left', games.length, games)
      return games
    }

    async function fetchData() {
      table_loading.value = true
      let data
      data = await fetchGames(selectedYear1.value)

      if (data.this === 'failed') {
        toast.add({ severity: 'error', summary: 'Network Fetch Failed', detail: data.because.message + ' - See console log for details', life: 3000 })
        return
      }
      data = filterTeams(data)

      games.value = JSON.parse(JSON.stringify(data))
      console.log(games)
      table_loading.value = false
    }

    async function computeRanking() {
      python_loading.value = true
      let ranking_as_map = pyodide.run(python_numpy, games.value)

      // Convert Map to Array
      let unsorted_ranking = Array.from(ranking_as_map, ([name, value]) => ({ name, value }))
      // Sort Array by decreasing value of key: value
      let sorted_ranking = unsorted_ranking.slice().sort((a, b) => {
        return b.value - a.value
      })
      // Add ranking integer value
      sorted_ranking.map((v) => {
        v.rank = sorted_ranking.indexOf(v) + 1
      })
      ranking.value = sorted_ranking

      console.log('Result Rankings:', ranking.value)
      python_loading.value = false
    }

    function openModal() {
      displayModal.value = true
    }
    const closeModal = () => {
      displayModal.value = false
    }

    return {
      page_loading,
      table_loading,
      python_loading,
      python_initializing: pyodide.isLoading,
      selectedYear1,
      years,
      games,
      ranking,
      filters1,
      initFilters1,
      fetchData,
      computeRanking,
      openModal,
      closeModal,
      displayModal,
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.p-tabview-panels {
  padding: 0 !important;
}
</style>
