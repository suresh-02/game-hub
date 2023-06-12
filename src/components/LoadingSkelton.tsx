import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react"

const LoadingSkelton = () => {
  return (
        <Card width='400px' overflow={"hidden"} borderRadius={10} >
            <Skeleton height='200px'/>
        <CardBody>
            <SkeletonText/>
        </CardBody>
            
        </Card>
  )
}

export default LoadingSkelton