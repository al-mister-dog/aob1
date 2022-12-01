import { Card, HoverCard, Input, Text } from "@mantine/core";
import { IconSearch } from "@tabler/icons";
import { useState } from "react";
import { colors } from "../../../../config/colorPalette";
import { terms } from "../../../../config/terms";
export default function Navbar() {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = terms.filter((value) => {
      return value.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <>
      <Text color="dimmed" size="sm">
        Browse Categories
      </Text>

      <HoverCard width={250} shadow="md">
        <HoverCard.Target>
          <Input
            type="text"
            value={wordEntered}
            onChange={handleFilter}
            icon={<IconSearch size={16} stroke={1.5} />}
          />
        </HoverCard.Target>
        <HoverCard.Dropdown>
          {filteredData.length != 0 && (
            <>
              {filteredData.slice(0, 6).map((value, key) => {
                return (
                  <p
                    key={value}
                    style={{ color: colors.text, cursor: "pointer" }}
                  >
                    {value}{" "}
                  </p>
                );
              })}
            </>
          )}
        </HoverCard.Dropdown>
      </HoverCard>
    </>
  );
}
