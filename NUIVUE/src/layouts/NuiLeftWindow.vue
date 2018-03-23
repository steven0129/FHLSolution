<template>
    <div id="fhlLeftWindow" class="leftWindow">
        <div class="leftWindowInside">
            <nui-settings></nui-settings>
            <nui-version-select></nui-version-select>
            <nui-view-history></nui-view-history>
        </div>
    </div>
</template>

<script>
import NuiSettings from '../components/NuiSettings'
import NuiVersionSelect from '../components/NuiVersionSelect'
import NuiViewHistory from '../components/NuiViewHistory'

export default {
    data() {
        return {}
    },
    components:{
        NuiSettings,
        NuiVersionSelect,
        NuiViewHistory
    }
}
</script>