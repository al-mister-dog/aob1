import { Box, Table } from "@mantine/core";
import { X, Check } from "tabler-icons-react";

export default function Bills({ player }) {
  return (
    <>
      <Box>
        {player.assets.length > 0 && <BillsTable data={player.assets} />}
        {player.liabilities.length > 0 && (
          <BillsTable data={player.liabilities} />
        )}
      </Box>
    </>
  );
}

function BillsTable({ data }) {
  const rows = data.map((element, i) => (
    <tr key={i}>
      {Object.values(element)
        .slice(1)
        .map((el: string | number | boolean, i: number) => (
          <td key={i}>
            {typeof el === "boolean" ? (
              el ? (
                <Check color="green" />
              ) : (
                <X color="red" />
              )
            ) : (
              el
            )}
          </td>
        ))}
    </tr>
  ));

  return (
    <Table>
      <thead>
        <tr>
          {Object.keys(data[0])
            .slice(1)
            .map((key) => {
              return <th key={key}>{key}</th>;
            })}
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}
/**
 * function BillsTable({ data }) {
  const rows = data.map((element, i) => (
    <tr key={i}>
      {Object.values(element).map(
        (el: string | number | boolean, i: number) => (
          <td key={i}>{el}</td>
        )
      )}
    </tr>
  ));

  return (
    <Table>
      <thead>
        <tr>
          {Object.keys(data[0]).map((key) => {
            return <th key={key}>{key}</th>;
          })}
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}

 */
