import { Text, VStack } from "native-base";
import { Header } from "../components/Header";
import {useRoute} from '@react-navigation/native';

type RouteParamns = {
  orderId: string;
}

function Details() {
  const route = useRoute();

  const {orderId} = route.params as RouteParamns;

  return (
    <VStack flex={1} bg="gray.700">
      <Header title="solicitação" />

      <Text color="white">{orderId}</Text>

    </VStack>
  )
}

export { Details };