import { Badge } from "@chakra-ui/react"

interface props{
    score:number
}

const CriticScore = ({score}:props) => {
  
    let color = score > 75 ? 'green' : score < 75 ? 'yellow' : "red";

    return (
    <div>
        <Badge colorScheme={color} paddingX={2} rounded={2}>{score}</Badge>
    </div>
  )
}

export default CriticScore