<template>
	<div class="atm-ide">
        <Tabs type="card">
            <Tab-pane label="设备ID"><over-view></over-view></Tab-pane>
            <Tab-pane label="设备标签"><Tag></Tag></Tab-pane>
        </Tabs>
	</div>
</template>
<script>
	import OverView from './overView';
  	import Tag from './tag';
    export default{
        components:{OverView,Tag}
    }
</script>


