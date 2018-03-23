<template>
    <div>
        <nui-top-menu></nui-top-menu>
        <div id="mainWindow">
            <!-- Layer 1-->
            <nui-tool-bar></nui-tool-bar>
            <nui-left-window></nui-left-window>
            <nui-middle-window></nui-middle-window>
            <nui-info></nui-info>
            
            <!-- Layer 2 windows that hide after mouse leave-->
            <div id="bookSelectPopUp">
                <div id="bookSelectName"></div>
            </div>
            <div id="parsingPopUp"></div>
            <div id="helpingPopUp"><div id="helpingPopUpInside"></div></div>
            
            <!-- Layer 3 windows that exists after mouse leave-->
            <div id="dictionaryPopUp"></div>
        </div>
    </div>
</template>

<script>
import NuiTopMenu from './layouts/NuiTopMenu'
import NuiLeftWindow from './layouts/NuiLeftWindow'
import NuiMiddleWindow from './layouts/NuiMiddleWindow'
import NuiInfo from './layouts/NuiInfo'
import NuiToolBar from './components/NuiToolBar'

export default {
    data(){
        return {}
    },
    components: {
        NuiTopMenu,
        NuiToolBar,
        NuiLeftWindow,
        NuiMiddleWindow,
        NuiInfo
    }
}
</script>