<script setup lang="ts">
import {
  CCard,
  CCardBody,
  CTable,
  CTableHead,
  CTableBody,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell
} from '@coreui/vue'

interface InspectionRow {
  no: number
  ideal: string
  actual: string
  judgement: 'OK' | 'NG'
  detail: string
}

interface Props {
  rows?: InspectionRow[]
}

defineProps<Props>()
</script>

<template>
  <CCard class="inspection-card">
    <CCardBody class="inspection-body">
      <CTable hover striped responsive class="inspection-table">
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell>No</CTableHeaderCell>
            <CTableHeaderCell>Ideal Condition</CTableHeaderCell>
            <CTableHeaderCell>Actual Condition</CTableHeaderCell>
            <CTableHeaderCell>Judgement</CTableHeaderCell>
            <CTableHeaderCell>Detail</CTableHeaderCell>
          </CTableRow>
        </CTableHead>

        <CTableBody>
          <CTableRow v-for="row in rows" :key="row.no">
            <CTableDataCell>{{ row.no }}</CTableDataCell>
            <CTableDataCell>{{ row.ideal }}</CTableDataCell>
            <CTableDataCell>{{ row.actual }}</CTableDataCell>

            <CTableDataCell>
              <span
                :class="row.judgement === 'OK' ? 'ok' : 'ng'"
              >
                {{ row.judgement }}
              </span>
            </CTableDataCell>

            <CTableDataCell>{{ row.detail }}</CTableDataCell>
          </CTableRow>
        </CTableBody>
      </CTable>
    </CCardBody>
  </CCard>
</template>


<style scoped>
.inspection-card {
  background: transparent;
  border: none;
  border-radius: 14px;
  height: 100%;         /* FULL AREA */
  display: flex;
  flex-direction: column;
}


.inspection-table {
  color: #e5e7eb;
  font-size: 14px;
  border-collapse: separate;
  border-spacing: 0;
}

/* HEADER */
.inspection-table thead th {
  background: #263551;         /* biru gelap */
  color: #cbd5f5;
  position: sticky;
  top: 0;
  z-index: 2;
  border-bottom: 2px solid #1e293b;
}

/* ROW */
.inspection-table tbody tr {
  background: #ffffff;
}

/* ZEBRA STRIPE */
.inspection-table tbody tr:nth-child(even) {
  background: #f8fafc;
}

/* GARIS HALUS */
.inspection-table td,
.inspection-table th {
  border-bottom: 1px solid #e5e7eb;
  padding: 10px 12px;
}


/* JUDGEMENT */
.ok {
  color: #22c55e;
  font-weight: 600;
}

.ng {
  color: #ef4444;
  font-weight: 600;
}
</style>
