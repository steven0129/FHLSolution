<template>
  <nav id="fhlTopMenu">
    <nui-title></nui-title>
    <nui-menu></nui-menu>

    <a id='problemsReport'>
      <div style='width: 30px; margin: auto;'>
        <i class="fa fa-envelope-o fa-2x"></i>
      </div>
      <div style='width: 60px; margin: auto;'>
        問題回報
      </div>
    </a>
  </nav>
</template>

<script>
import NuiTitle from '../components/NuiTitle'
import NuiMenu from '../components/NuiMenu'

export default {
  data() {
    return {}
  },
  components:{
    NuiTitle, NuiMenu
  }
}
</script>