import type { ColumnDef } from "@tanstack/table-core";
import { createRawSnippet } from "svelte";
import { renderSnippet } from "$lib/components/ui/data-table/index.js";
import { renderComponent } from "$lib/components/ui/data-table/index.js";
import DataTableActions from "./data-table-actions.svelte";
import DataTableEmailButton from "./data-table-name-button.svelte";

// This type is used to define the shape of our data.
export type Person = {
  name: string;
  language: string;
  id: string;
  bio: string;
  version: number;
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
    accessorKey: "language", // Language column
    header: () => {
      const languageHeaderSnippet = createRawSnippet(() => ({
        render: () => `<div class="text-left">Language</div>`,
      }));
      return renderSnippet(languageHeaderSnippet, "");
    },
    cell: ({ row }) => {
      return renderSnippet(
        createRawSnippet<[string]>((getLanguage) => {
          const language = getLanguage();
          return {
            render: () => `<div class="text-left">${language}</div>`,
          };
        }),
        row.getValue("language") // The 'language' of the person
      );
    },
  },
  {
    accessorKey: "bio", // Bio column
    header: () => {
      const bioHeaderSnippet = createRawSnippet(() => ({
        render: () => `<div class="text-left">Bio</div>`,
      }));
      return renderSnippet(bioHeaderSnippet, "");
    },
    cell: ({ row }) => {
      return renderSnippet(
        createRawSnippet<[string]>((getBio) => {
          const bio = getBio();
          return {
            render: () => `<div class="text-left">${bio}</div>`,
          };
        }),
        row.getValue("bio") // The 'bio' of the person
      );
    },
  },
  {
    accessorKey: "version", // Version column
    header: () => {
      const versionHeaderSnippet = createRawSnippet(() => ({
        render: () => `<div class="text-right">Version</div>`,
      }));
      return renderSnippet(versionHeaderSnippet, "");
    },
    cell: ({ row }) => {
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      });

      return renderSnippet(
        createRawSnippet<[string]>((getVersion) => {
          const version = getVersion();
          return {
            render: () => `<div class="text-right font-medium">${version}</div>`,
          };
        }),
        formatter.format(row.getValue("version")) // Format 'version' as currency or number
      );
    },
  },
  {
    id: "actions", // Actions column (e.g., buttons)
    cell: ({ row }) => {
      // Passing the entire row (typed as Person) to the actions component
      return renderComponent(DataTableActions, { id: row.original.id });
    },
  },
  
];
