import type { ColumnDef } from "@tanstack/table-core";
import { createRawSnippet } from "svelte";
import { renderSnippet } from "$lib/components/ui/data-table/index.js";
import { renderComponent } from "$lib/components/ui/data-table/index.js";
import DataTableActions from "./data-table-actions.svelte";
import DataTableEmailButton from "./data-table-name-button.svelte";
import { Checkbox } from "$lib/components/ui/checkbox/index.js";

// This type is used to define the shape of our data.
export type Person = {
  id: string, 
  created_at: string,
  updated_at: string, 
  name: string,
  url: string, 
  user_id: string
};

export const columns: ColumnDef<Person>[] = [
  {
    accessorKey: "id", // ID column
    header: () => {
      const idHeaderSnippet = createRawSnippet(() => ({
        render: () => `<div class="text-right">ID</div>`,
      }));
      return renderSnippet(idHeaderSnippet, "");
    },
    cell: ({ row }) => {
      return renderSnippet(
        createRawSnippet<[string]>((getId) => {
          const id = getId();
          return {
            render: () => `<div class="text-right font-medium">${id}</div>`,
          };
        }),
        row.getValue("id") // The 'id' of the person
      );
    },
  },
  {
    accessorKey: "name", // Name column
    header: ({ column }) => {
      // Instead of rendering raw snippets, directly render the button with the correct event
      return renderComponent(DataTableEmailButton, {
        onclick: () => {
          column.toggleSorting(column.getIsSorted() === "asc"); // Toggle sorting logic
        },
      });
    },
    cell: ({ row }) => {
      return renderSnippet(
        createRawSnippet<[string]>((getName) => {
          const name = getName();
          return {
            render: () => `<div class="text-left">${name}</div>`,
          };
        }),
        row.getValue("name") // The 'name' of the person
      );
    },
  },
  {
    accessorKey: "created_at", // Created_At column
    header: () => {
      const CreatedAtHeaderSnippet = createRawSnippet(() => ({
        render: () => `<div class="text-left">Created_At</div>`,
      }));
      return renderSnippet(CreatedAtHeaderSnippet, "");
    },
    cell: ({ row }) => {
      return renderSnippet(
        createRawSnippet<[string]>((getCreatedAt) => {
          const created_at = getCreatedAt();
          return {
            render: () => `<div class="text-left">${created_at}</div>`,
          };
        }),
        row.getValue("created_at") // The date "created_at" of the feeds
      );
    },
  },
  {
    accessorKey: "updated_at", // Updated_At column
    header: () => {
      const UpdatedAtHeaderSnippet = createRawSnippet(() => ({
        render: () => `<div class="text-left">Updated_At</div>`,
      }));
      return renderSnippet(UpdatedAtHeaderSnippet, "");
    },
    cell: ({ row }) => {
      return renderSnippet(
        createRawSnippet<[string]>((getUpdated_At) => {
          const updated_at = getUpdated_At();
          return {
            render: () => `<div class="text-left">${updated_at}</div>`,
          };
        }),
        row.getValue("updated_at") // The date "updated_at" of the feeds
      );
    },
  },
  {
    accessorKey: "url", // Url column
    header: () => {
      const UrlHeaderSnippet = createRawSnippet(() => ({
        render: () => `<div class="text-left">Url</div>`,
      }));
      return renderSnippet(UrlHeaderSnippet, "");
    },
    cell: ({ row }) => {
      return renderSnippet(
        createRawSnippet<[string]>((getUrl) => {
          const url = getUrl();
          return {
            render: () => `<div class="text-left">${url}</div>`,
          };
        }),
        row.getValue("url") // The "url" of the feeds
      );
    },
  },
  
  // {
  //   accessorKey: "version", // Version column
  //   header: () => {
  //     const versionHeaderSnippet = createRawSnippet(() => ({
  //       render: () => `<div class="text-right">Version</div>`,
  //     }));
  //     return renderSnippet(versionHeaderSnippet, "");
  //   },
  //   cell: ({ row }) => {
  //     const formatter = new Intl.NumberFormat("en-US", {
  //       style: "currency",
  //       currency: "USD",
  //     });

  //     return renderSnippet(
  //       createRawSnippet<[string]>((getVersion) => {
  //         const version = getVersion();
  //         return {
  //           render: () => `<div class="text-right font-medium">${version}</div>`,
  //         };
  //       }),
  //       formatter.format(row.getValue("version")) // Format 'version' as currency or number
  //     );
  //   },
  // },
  {
    id: "actions", // Actions column (e.g., buttons)
    cell: ({ row }) => {
      // Passing the entire row (typed as Person) to the actions component
      return renderComponent(DataTableActions, { id: row.original.id });
    },
  },
  {
    id: "select",
    header: ({ table }) =>
      renderComponent(Checkbox, {
        checked: table.getIsAllPageRowsSelected(),
        indeterminate:
          table.getIsSomePageRowsSelected() &&
          !table.getIsAllPageRowsSelected(),
        onCheckedChange: (value) => table.toggleAllPageRowsSelected(!!value),
        "aria-label": "Select all",
      }),
    cell: ({ row }) =>
      renderComponent(Checkbox, {
        checked: row.getIsSelected(),
        onCheckedChange: (value) => row.toggleSelected(!!value),
        "aria-label": "Select row",
      }),
    enableSorting: false,
    enableHiding: false,
  },
];
