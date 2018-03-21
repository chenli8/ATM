<template>
	<div class="atm-ide">
       <Tabs type="card">
                <Tab-pane label="排队管理"><Operation></Operation></Tab-pane>
                <Tab-pane label="作业统计"><Accounting></Accounting></Tab-pane>
                <Tab-pane label="作业报表"><Statement></Statement></Tab-pane>
       </Tabs>
	 </div>
</template>
<script>
	import Operation from '../lib/supervisory/operation';
  import Accounting from '../lib/supervisory/accounting';
  import Statement from '../lib/supervisory/statement';
  export default{
         components:{ Operation , Accounting , Statement }
  }
</script>


