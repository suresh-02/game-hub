import { HStack, Switch, useColorMode } from "@chakra-ui/react";

const ColorSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <div>
      <HStack>
        <Switch
          size="lg"
          colorScheme="green"
          isChecked={colorMode === "dark"}
          onChange={toggleColorMode}
        />
      </HStack>
    </div>
  );
};

export default ColorSwitch;
