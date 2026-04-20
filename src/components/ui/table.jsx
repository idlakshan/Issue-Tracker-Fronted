import { useState } from "react";

import { Trash, MessageSquare, SquarePen } from "lucide-react";
import StatusBadge from "./status-badge";
import PriorityBadge from "./priority-badge";
import { Avatar } from "./avatar";
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

const allColumns = [
  {
    id: "issue",
    header: "Issue",
    accessorKey: "issue",
    cell: ({ row }) => (
      <div>
        <p className="text-xs text-(--color-secondary-text) py-1">
          {row.original.id}
        </p>
        <p className="text-sm font-medium text-(--color-text)">
          {row.original.issue}
        </p>
      </div>
    ),
  },
  {
    id: "status",
    header: "Status",
    accessorKey: "status",
    cell: ({ getValue }) => <StatusBadge status={getValue()} />,
  },
  {
    id: "priority",
    header: "Priority",
    accessorKey: "priority",
    cell: ({ getValue }) => <PriorityBadge priority={getValue()} />,
  },
  {
    id: "severity",
    header: "Severity",
    accessorKey: "severity",
    cell: ({ getValue }) => (
      <span className="text-gray-600 text-sm">{getValue()}</span>
    ),
  },
  {
    id: "assignee",
    header: "Assignee",
    accessorKey: "assignee",
    cell: ({ getValue }) => <Avatar assignee={getValue()} />,
  },
  {
    id: "activity",
    header: "Activity",
    accessorKey: "activity",
    cell: ({ getValue }) => (
      <div className="flex items-center gap-1 text-(--color-secondary-text)">
        <MessageSquare size={14} />
        {getValue()}
      </div>
    ),
  },
  {
    id: "created",
    header: "Created",
    accessorKey: "created",
    cell: ({ getValue }) => (
      <span className="text-(--color-secondary-text) text-sm">
        {getValue()}
      </span>
    ),
  },
  {
    id: "actions",
    header: "Actions",
    cell: () => (
      <div className="flex gap-2 justify-end">
        <button className="p-2 rounded-md ring-[0.5px] ring-(--color-secondary-text) hover:bg-gray-100 cursor-pointer">
          <SquarePen size={15} className="text-(--color-secondary-text)" />
        </button>
        <button className="p-2 rounded-md ring-[0.5px] ring-(--color-secondary-text) text-red-500 hover:bg-gray-100 cursor-pointer">
          <Trash size={15} />
        </button>
      </div>
    ),
  },
];

const Table = ({ data, hideColumns = [], hideFooter = false }) => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5,
  });

  const visibleColumns = allColumns.filter(
    (col) => !hideColumns.includes(col.id),
  );

  const table = useReactTable({
    data,
    columns: visibleColumns,
    state: { pagination },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
      <table className="w-full text-sm">
        <thead className="text-xs text-gray-400 uppercase bg-(--color-secondary-hover)">
          {table.getHeaderGroups().map((hg) => (
            <tr key={hg.id}>
              {hg.headers.map((h) => (
                <th key={h.id} className="px-4 py-3 text-left font-medium">
                  {flexRender(h.column.columnDef.header, h.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className="border-b border-(--color-table-header) hover:bg-gray-50 transition"
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-4 py-3">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {!hideFooter && (
        <div className="flex justify-between items-center px-4 py-3 text-sm">
          <span className="text-(--color-secondary-text)">
            Showing {table.getRowModel().rows.length} of {data.length}
          </span>

          <div className="flex gap-2 items-center">
            <button
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className="px-3 py-1 border rounded-md text-(--color-secondary-text) disabled:opacity-40"
            >
              Prev
            </button>

            <span className="px-3 py-1 rounded-md bg-(--color-primary) text-white">
              {table.getState().pagination.pageIndex + 1}
            </span>

            <button
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              className="px-3 py-1 border rounded-md text-(--color-secondary-text) disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;
