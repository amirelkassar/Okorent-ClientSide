"use client";
import { Table } from "@mantine/core";
import React from "react";

interface OrderTableProps {
  data: React.ReactNode[][];
}
function OrderTable({ data }: OrderTableProps) {
  return (
    <div className="pb-4 border-b border-black/20 w-full">
      <Table verticalSpacing="lg" horizontalSpacing="sm">
        <Table.Thead>
          <Table.Tr className="border-black/20">
            <Table.Th>Items</Table.Th>
            <Table.Th>Available</Table.Th>
            <Table.Th>Quantity</Table.Th>
            <Table.Th>Price</Table.Th>
            <Table.Th>Total</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {data.map((row, rowIndex) => (
            <Table.Tr key={rowIndex} className="border-black/20">
              {row.map((cell, cellIndex) => (
                <Table.Td key={cellIndex} className=" last-of-type:font-Bold">{cell}</Table.Td>
              ))}
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </div>
  );
}

export default OrderTable;
