<template>
    <div id="viewHistory">
        <div class="secondLevelInside">
            <p>&#9654;&nbsp;{{ title }}</p>
            <span class="clearHistory">清除記錄</span>
            <div id="viewHistoryScrollDiv">
                <ul class="viewHistoryList"></ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: '歷史紀錄'
        }
    }
}
</script>