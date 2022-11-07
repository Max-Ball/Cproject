<template>
  <div class="row">
    <section class="col-md-3 align-items-center sidebar bg-dark text-light py-3 px-4">
      <router-link :to="{
        name: 'Dashboard'
      }">
        <div class="py-2 d-flex align-items-center menu-item selectable">
          <i class="mdi mdi-home me-2"></i>
          Home
        </div>
      </router-link>
      <div class="py-2 d-flex align-items-center menu-item selectable">
        <i class="mdi mdi-trophy me-2"></i>
        Projects
      </div>
      <div class="py-2 d-flex align-items-center menu-item selectable">
        <i class="mdi mdi-cash me-2"></i>
        Billings
      </div>
      <div class="py-2 d-flex align-items-center menu-item selectable">
        <i class="mdi mdi-account me-2"></i>
        Team
      </div>
      <div class="py-2 d-flex align-items-center menu-item selectable">
        <i class="mdi mdi-graph me-2"></i>
        Stats
      </div>
      <div class="py-2 d-flex align-items-center menu-item selectable">
        <i class="mdi mdi-cog me-2"></i>
        Settings
      </div>
    </section>
    <section class="col-md-9">
      Dashboard
    </section>
  </div>
</template>

<script>
export default {
  setup() {
    return {}
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
