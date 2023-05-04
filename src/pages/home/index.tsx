import { Heading, Text } from '@ignite-ui/react'

import appPreviewImg from '../../assets/app-preview.png'

import { Container, Hero, Preview } from './styles'
import Image from 'next/image'
import { ClaimUsernameForm } from './components/ClaimUsernameForm'
export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading size="4xl">Agendamento descomplicado</Heading>

        <Text size="xl">
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </Text>

        <ClaimUsernameForm />
      </Hero>
      <Preview>
        <Image
          alt="Calendário simbolizando aplicação em andamento"
          src={appPreviewImg}
          height={400}
          quality={100}
          priority
        />
      </Preview>
    </Container>
  )
}
