import { _courses } from 'src/_mock';
import CursoPlayer from 'src/sections/lecciones/curso-player';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Support',
};
const _mockCourse = _courses[0];


export default function PlayerPage() {
  return <CursoPlayer course={_mockCourse} />;
}

