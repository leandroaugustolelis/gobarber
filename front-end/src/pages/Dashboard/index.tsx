import React from 'react';
import { FiClock, FiPower } from 'react-icons/fi';
import logo from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';

import {
  Container,
  Header,
  HeaderContent,
  Profile,
  NextAppointment,
  Calendar,
  Content,
  Schedule,
} from './styles';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();
  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logo} alt="Logo GoBarber" />

          <Profile>
            <img
              src="https://avatars.githubusercontent.com/u/76403096?s=460&u=5b4f8b59773b63d04988bfe0ddf57cf6add600d6&v=4"
              alt={user.name}
            />
            <div>
              <span>Bem vindo,</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>
          <button onClick={signOut} type="button">
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <Schedule>
          <h1>Horários agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 06</span>
            <span>Segunda-feira</span>
          </p>

          <NextAppointment>
            <strong>Atendimento a seguir</strong>
            <div>
              <img
                src="https://avatars.githubusercontent.com/u/76403096?s=460&u=5b4f8b59773b63d04988bfe0ddf57cf6add600d6&v=4"
                alt="Leandro Lelis"
              />
              <strong>Leandro Lelis</strong>
              <span>
                <FiClock />
                08:00
              </span>
            </div>
          </NextAppointment>
        </Schedule>
        <Calendar />
      </Content>
    </Container>
  );
};

export default Dashboard;
