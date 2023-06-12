import { Box } from "@chakra-ui/react"
import { ReactNode } from "react"


interface props{
    children:ReactNode
}


const GameCardContainer = ({children}:props) => {
  return (
   
    <Box width='400px' overflow={"hidden"} borderRadius={10}>
        {children}
    </Box>
  )
}

export default GameCardContainer