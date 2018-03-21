<template>
    <div id="fhlLecture">
        <div class="chapBack chapControl"><span>&#x276e;</span></div>
        <div class="chapNext chapControl"><span>&#x276f;</span></div>
        <span id="viewHistoryButton" style="position:absolute;right:10px;cursor:pointer;font-size:28px;font-weight:800"><span class="b noselect">←</span><span class="n noselect">→</span></span>
        <div id="lecMainTitle"></div>
        <!-- 會動態變更, 依版本選擇數量 -->
        <div id="lecMain" style="padding:10px 50px"></div>
        <!-- lecMain 下會動態變更, 依 mode 與 版本切換 -->
    </div>
</template>

<script>
export default {
    data() {
        return {}
    }
}
</script>