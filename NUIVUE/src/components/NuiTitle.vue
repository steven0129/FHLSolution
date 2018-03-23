<template>
  <div>
        <img id="logoFHL" src="static/images/FHLLOGO.png" />
        <a id="title">{{title}}&nbsp;<span>{{ version }}</span></a>
      </div>
</template>

<script>
export default {
    data() {
        return {
            title: '信望愛聖經工具',
            version: 'v1.2'
        }
    }
}
</script>