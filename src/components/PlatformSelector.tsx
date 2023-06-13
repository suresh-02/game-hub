import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { SiNintendo } from "react-icons/si";
import { usePlatform } from "../Hooks/usePlatform";

const PlatformSelector = () => {
  const { data, error } = usePlatform();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<SiNintendo />}>
        Platfrom
      </MenuButton>
      <MenuList>
        {data?.map((platform) => (
          <MenuItem key={platform.id}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
