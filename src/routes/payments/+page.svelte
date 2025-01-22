<script lang="ts">
    import DataTable from "./data-table.svelte";
    import { columns } from "./columns.js";
    import type { Person } from "./columns"
    let { data } = $props();
//     export const data: Person[] = [
//   {
//     name: "Jared", 
//     language: "any", 
//     id: "1", 
//     bio: "any", 
//     version: 8
//   },
//   {
//     name: "Jared", 
//     language: "any", 
//     id: "2", 
//     bio: "any", 
//     version: 8
//   },
// ];
   </script>
    
   <DataTable data={data.trimmedData} {columns} />