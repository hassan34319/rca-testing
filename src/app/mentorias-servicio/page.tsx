import ElearningMentoriaServicioView from 'src/sections/_elearning/view/elearning-mentorias-servicio-view';

import { client } from '../utils/client';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Mentoria Servicio',
};

export const revalidate = 60

export default function ElearningMentoringServicioPage() {

  return <ElearningMentoriaServicioView />;
}