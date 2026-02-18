<script setup lang="ts">
import { CCard, CCardBody, CCardHeader, CRow, CCol, CAlert } from '@coreui/vue'
</script>

<template>
  <div>
    <h1 class="mb-4">About</h1>
    <CAlert color="info" class="mb-4"> Learn more about the FE-AI-CRT application </CAlert>
    <CRow>
      <CCol md="8">
        <CCard class="mb-4">
          <CCardHeader>About This Application</CCardHeader>
          <CCardBody>
            <p>
              FE-AI-CRT is a comprehensive frontend application designed for AI-driven currying time
              management.
            </p>
            <p>
              This application provides tools for managing camera setups, collecting data, and
              analyzing results through an intuitive and responsive user interface.
            </p>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol md="4">
        <CCard>
          <CCardHeader>Version</CCardHeader>
          <CCardBody>
            <p class="mb-0">Version: 0.0.0</p>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>
