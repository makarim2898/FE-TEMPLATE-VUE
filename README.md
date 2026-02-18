# FE-AI-CRT-KR

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

# FE-AI-CRT-KR Developer Documentation

**Last Updated:** February 17, 2026

---

## 📚 Table of Contents

1. [Architecture Overview](DOCUMENTATION.md#architecture-overview)
2. [Adding New Pages](DOCUMENTATION.md#adding-new-pages)
3. [Router Registration](DOCUMENTATION.md#router-registration)
4. [CIcon System](DOCUMENTATION.md#cicon-system)
5. [Layout & Navigation](DOCUMENTATION.md#layout--navigation)
6. [Nav Items & Sidebar](DOCUMENTATION.md#nav-items--sidebar)

---

## Architecture Overview

### Project Structure

```
src/
├── components/
│   └── navigation/
│       ├── AppNavbar.vue      # Top navbar with sidebar toggle
│       └── AppSidebar.vue     # Offcanvas sidebar with nav menu
├── layouts/
│   └── MainLayouts.vue        # Main layout wrapper
├── router/
│   ├── index.ts               # Router initialization
│   ├── navigation.routes.ts   # Main navigation routes (sidebar items)
│   └── app.routes.ts          # Other routes (settings, about, etc)
├── views/
│   ├── HomePage.vue
│   ├── CameraSetup.vue
│   ├── CollectData.vue
│   ├── HarigamiData.vue
│   ├── History.vue
│   ├── GuideView.vue
│   ├── GeneralSettings.vue    # Not in sidebar
│   └── AboutView.vue          # Not in sidebar
└── main.ts                    # App initialization with CoreUI
```

---

## Adding New Pages

### Step 1: Create the View Component

Create a new file in `src/views/` folder:

**File:** `src/views/MyNewPage.vue`

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { CCard, CCardBody, CCardHeader, CButton } from '@coreui/vue'

const myData = ref([
  { id: 1, name: 'Item 1', description: 'Description 1' },
  { id: 2, name: 'Item 2', description: 'Description 2' },
])
</script>

<template>
  <div>
    <h1 class="mb-4">My New Page</h1>

    <div class="row g-3">
      <div v-for="item in myData" :key="item.id" class="col-md-6">
        <CCard>
          <CCardHeader>{{ item.name }}</CCardHeader>
          <CCardBody>
            <p>{{ item.description }}</p>
            <CButton href="#" color="primary">Action</CButton>
          </CCardBody>
        </CCard>
      </div>
    </div>
  </div>
</template>
```

### Step 2: Use CoreUI Components (Important)

Always use CoreUI components for UI:

- `CCard`, `CCardBody`, `CCardHeader` - Cards
- `CButton` - Buttons
- `CTable`, `CTableHead`, `CTableBody` - Tables
- `CForm`, `CFormInput` - Forms
- `CAlert` - Alerts
- etc.

**❌ DO NOT use plain HTML:**

```vue
<!-- ❌ BAD -->
<h1>My Page</h1>
<ul>
  <li>Item 1</li>
</ul>

<!-- ✅ GOOD -->
<CCard>
  <CCardBody>
    <h1>My Page</h1>
    <ul>
      <li>Item 1</li>
    </ul>
  </CCardBody>
</CCard>
```

---

## Router Registration

### Route Registration Types

Your app has **TWO types of routes**:

#### **Type 1: Navigation Routes** (Appear in Sidebar)

These routes appear in the sidebar navigation menu.

**File:** `src/router/navigation.routes.ts`

```typescript
import type { RouteRecordRaw } from 'vue-router'

export const navigationRoutes: RouteRecordRaw[] = [
  {
    path: 'my-new-page', // URL path (after /)
    name: 'myNewPage', // Unique route name
    component: () => import('@/views/MyNewPage.vue'), // Lazy loaded component
    meta: {
      title: 'My New Page', // Displayed in navbar
      icon: 'cil-chart-pie', // CoreUI icon name
      showInNav: true, // REQUIRED to show in sidebar!
    },
  },
]
```

**Result:**

- URL: `http://localhost:5173/my-new-page`
- Appears in sidebar with "My New Page" label
- Icon shows next to the label

---

#### **Type 2: App Routes** (Hidden Routes)

These routes do NOT appear in sidebar (Settings, About).

**File:** `src/router/app.routes.ts`

```typescript
import type { RouteRecordRaw } from 'vue-router'

export const appRoutes: RouteRecordRaw[] = [
  {
    path: '/my-settings',
    name: 'MySettings',
    component: () => import('@/views/MySettings.vue'),
    // NO meta object = NOT in sidebar
  },
]
```

**Result:**

- URL: `http://localhost:5173/my-settings`
- Does NOT appear in sidebar
- Only accessible directly or via links

---

### Complete Router Flow

```
src/router/index.ts (Router Setup)
    ├── navigationRoutes (from navigation.routes.ts)
    │   └── Routes with showInNav: true (appear in sidebar)
    └── appRoutes (from app.routes.ts)
        └── Other routes (don't appear in sidebar)
```

**File:** `src/router/index.ts`

```typescript
import { createRouter, createWebHistory } from 'vue-router'
import { navigationRoutes } from './navigation.routes'
import { appRoutes } from './app.routes'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/layouts/MainLayouts.vue'),
    children: navigationRoutes, // ← Navigation routes become children
  },
  ...appRoutes, // ← App routes are separate
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
```

---

### Checklist: Adding a New Navigable Page

- [ ] Create `src/views/MyPage.vue` with CoreUI components
- [ ] Add route to `src/router/navigation.routes.ts`
- [ ] Set `showInNav: true` in route meta
- [ ] Set `icon: 'cil-name'` to CoreUI icon
- [ ] Set `title: 'Display Name'` for sidebar label
- [ ] Test: Page should appear in sidebar

---

## CIcon System

### How CIcon Works

CIcon is the **CoreUI icon component** for displaying icons. It's registered globally in `src/main.ts`.

**Setup (Already Done):**

```typescript
// src/main.ts
import { CIcon } from '@coreui/icons-vue'
import * as icons from '@coreui/icons'

const app = createApp(App)
app.component('CIcon', CIcon)
app.provide('icons', icons)
```

### Using CIcon

#### Basic Usage

```vue
<template>
  <!-- Display an icon -->
  <CIcon icon="cil-home" />
  <CIcon icon="cil-camera" />
  <CIcon icon="cil-settings" />
</template>
```

#### With Size & Color

```vue
<template>
  <!-- Icon with size -->
  <CIcon icon="cil-home" size="lg" />
  <!-- Large -->
  <CIcon icon="cil-home" size="xl" />
  <!-- Extra large -->

  <!-- Icon with color -->
  <CIcon icon="cil-home" class="text-primary" />
  <CIcon icon="cil-home" class="text-success" />
</template>
```

#### In Navigation Items

```vue
<template>
  <router-link :to="{ name: 'homePage' }">
    <CIcon icon="cil-home" class="me-2" />
    Home
  </router-link>
</template>
```

### Available CoreUI Icons

Common icons used in your app:

- `cil-home` - Home
- `cil-camera` - Camera
- `cil-task` - Task/Check
- `cil-chart-line` - Chart/Analytics
- `cil-history` - History
- `cil-info` - Information
- `cil-settings` - Settings
- `cil-user` - User
- `cil-calendar` - Calendar
- `cil-folder` - Folder
- `cil-bell` - Notification
- `cil-plus` - Plus/Add

**Find ALL icons:** https://icons.coreui.io/

### Icon in Navigation Routes

Icons are displayed in the sidebar automatically:

```typescript
{
  path: 'my-page',
  name: 'myPage',
  component: () => import('@/views/MyPage.vue'),
  meta: {
    title: 'My Page',
    icon: 'cil-star',  // ← This icon appears in sidebar
    showInNav: true,
  },
}
```

---

## Layout & Navigation

### How Layout Works

```
App.vue (Root)
  └── MainLayouts.vue (Main layout wrapper)
      ├── AppNavbar (Top navbar)
      │   └── AppSidebar (Hamburger button & offcanvas)
      │       └── Navigation items
      └── router-view (Page content)
```

### Layout File: `src/layouts/MainLayouts.vue`

```vue
<template>
  <CContainer fluid class="p-0">
    <!-- Top navbar with sidebar toggle -->
    <AppNavbar />

    <!-- Page content area -->
    <CContainer fluid class="mt-3">
      <router-view />
      <!-- Current page renders here -->
    </CContainer>
  </CContainer>
</template>

<script setup lang="ts">
import AppNavbar from '@/components/navigation/AppNavbar.vue'
</script>
```

### Navbar: `src/components/navigation/AppNavbar.vue`

```vue
<template>
  <CNavbar color-scheme="dark" class="bg-dark">
    <CContainer fluid>
      <CNavbarBrand href="#">
        <AppSidebar />
        <!-- Sidebar toggle button -->
        {{ navbarTitle }}
        <!-- Dynamic title based on current page -->
      </CNavbarBrand>
    </CContainer>
  </CNavbar>
</template>

<script setup lang="ts">
import AppSidebar from '@/components/navigation/AppSidebar.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// Title changes based on current page's meta.title
const navbarTitle = computed(() => {
  return route.meta?.title ? `AI Curring Time - ${route.meta.title}` : 'AI Curring Time'
})
</script>
```

---

## Nav Items & Sidebar

### How Sidebar Works

The `AppSidebar.vue` generates navigation items **automatically** from routes.

```vue
<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

// Get ALL routes that have showInNav: true in meta
const navRoutes = router.getRoutes().filter((route) => route.meta?.showInNav)

// Check if route is currently active
const isActive = (r: RouteRecordRaw) => r.name === route.name
</script>

<template>
  <CButton @click="showOffcanvas = !showOffcanvas">
    <!-- Hamburger button -->
    <img src="../../assets/icon-tittle.png" alt="" width="22" height="24" />
  </CButton>

  <!-- Offcanvas sidebar panel -->
  <COffcanvas placement="start" :visible="showOffcanvas">
    <COffcanvasHeader>
      <COffcanvasTitle>
        <img src="../../assets/icon-tittle.png" alt="" />
        AI Curring Time
      </COffcanvasTitle>
      <CCloseButton @click="showOffcanvas = false" />
    </COffcanvasHeader>

    <!-- Navigation items (auto-generated from routes) -->
    <COffcanvasBody>
      <ul class="list-group list-group-flush">
        <!-- Loop through all navigation routes -->
        <li
          v-for="r in navRoutes"
          :key="r.name"
          class="list-group-item"
          :class="{ 'bg-success text-white': isActive(r) }"
        >
          <router-link :to="{ name: r.name }" class="text-decoration-none">
            <CIcon :icon="r.meta?.icon" class="me-2" />
            {{ r.meta?.title }}
          </router-link>
        </li>
      </ul>
    </COffcanvasBody>
  </COffcanvas>
</template>
```

### Navigation Flow

1. **Route Definition** (navigation.routes.ts)

   ```typescript
   { path: 'home', name: 'homePage', icon: 'cil-home', title: 'Home', showInNav: true }
   ```

2. **Auto-Render in Sidebar**

   ```
   AppSidebar.vue detects route with showInNav: true
   and automatically creates a navigation item
   ```

3. **Item Display**

   ```
   [Icon] Home
   ```

4. **Click to Navigate**
   ```
   User clicks "Home" → router-link navigates → Page rendered in router-view
   ```

---

## Quick Reference: Adding a New Page

### Complete Example

**1. Create View**
`src/views/Analytics.vue`:

```vue
<script setup lang="ts">
import { CCard, CCardBody, CCardHeader } from '@coreui/vue'
const data = ref([])
</script>

<template>
  <h1>Analytics</h1>
  <CCard>
    <CCardBody>
      <!-- Your content here -->
    </CCardBody>
  </CCard>
</template>
```

**2. Register Route**
Add to `src/router/navigation.routes.ts`:

```typescript
{
  path: 'analytics',
  name: 'analytics',
  component: () => import('@/views/Analytics.vue'),
  meta: {
    title: 'Analytics',
    icon: 'cil-chart-line',
    showInNav: true,
  },
}
```

**3. Done!** ✅

- Route: `http://localhost:5173/analytics`
- Sidebar: Shows "Analytics" with 📊 icon
- Navbar: Shows "AI Curring Time - Analytics"

---

## Important Notes

### ✅ DO's

- Use CoreUI components (`CCard`, `CButton`, etc.)
- Use lazy loading for components: `() => import('@/views/...')`
- Add `showInNav: true` only for sidebar pages
- Always set `icon` from CoreUI icon library
- Update `meta.title` for navbar titles

### ❌ DON'Ts

- Don't use plain HTML tags for layout
- Don't hardcode routes (use named routes)
- Don't forget `meta` object for navigation routes
- Don't import entire pages (use lazy loading)
- Don't forget to check icon names on https://icons.coreui.io/

---

## Helpful Commands

```bash
# Development
npm run dev

# Type checking
npm run type-check

# Linting
npm run lint

# Build for production
npm run build

# Preview build
npm run preview
```

---

**Happy coding! 🚀**
