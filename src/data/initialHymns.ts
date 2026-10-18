import { SongItem } from '../types/hymn';

const RAW_BASE = 'https://raw.githubusercontent.com/bellaciaodowhile/mef-2026-repertory/main';

export function createInitialHymns(): SongItem[] {
  return [
    {
      id: 'song-1',
      number: 1,
      title: 'Grandioso Es Nuestro Dios',
      subtitle: 'Música en Familia 2026',
      category: '',
      composer: 'Coral Música en Familia',
      resources: {
        tenor: {
          url: `${RAW_BASE}/Grandioso%20Es%20Nuestro%20Dios/Tenor.mp3`,
          fileName: 'Tenor.mp3',
          fileSize: 5285751,
        },
        pista: {
          url: `${RAW_BASE}/Grandioso%20Es%20Nuestro%20Dios/Pista.mp3`,
          fileName: 'Pista.mp3',
          fileSize: 5306742,
        },
        demo: {
          url: `${RAW_BASE}/Grandioso%20Es%20Nuestro%20Dios/Demo.mp3`,
          fileName: 'Demo.mp3',
          fileSize: 5308327,
        },
        soprano: null,
        contralto: null,
        bajo: null,
      },
    },
    {
      id: 'song-2',
      number: 2,
      title: 'La Bondad de Dios',
      subtitle: 'Música en Familia 2026',
      category: '',
      composer: 'Coral Música en Familia',
      resources: {
        tenor: {
          url: `${RAW_BASE}/La%20Bondad%20de%20Dios/Tenor.mp3`,
          fileName: 'Tenor.mp3',
          fileSize: 5040421,
        },
        pista: {
          url: `${RAW_BASE}/La%20Bondad%20de%20Dios/Pista.mp3`,
          fileName: 'Pista.mp3',
          fileSize: 5039585,
        },
        demo: {
          url: `${RAW_BASE}/La%20Bondad%20de%20Dios/Demo.mp3`,
          fileName: 'Demo.mp3',
          fileSize: 5040421,
        },
        soprano: null,
        contralto: null,
        bajo: null,
      },
    },
    {
      id: 'song-3',
      number: 3,
      title: 'La Fe',
      subtitle: 'Música en Familia 2026',
      category: '',
      composer: 'Coral Música en Familia',
      resources: {
        tenor: {
          url: `${RAW_BASE}/La%20Fe/Tenor.mp3`,
          fileName: 'Tenor.mp3',
          fileSize: 5850777,
        },
        pista: {
          url: `${RAW_BASE}/La%20Fe/Pista.mp3`,
          fileName: 'Pista.mp3',
          fileSize: 5943603,
        },
        demo: {
          url: `${RAW_BASE}/La%20Fe/Demo.mp3`,
          fileName: 'Demo.mp3',
          fileSize: 11714036,
        },
        soprano: null,
        contralto: null,
        bajo: null,
      },
    },
    {
      id: 'song-4',
      number: 4,
      title: 'Mas Adelante',
      subtitle: 'Música en Familia 2026',
      category: '',
      composer: 'Coral Música en Familia',
      resources: {
        tenor: {
          url: `${RAW_BASE}/Mas%20Adelante/Tenor.mp3`,
          fileName: 'Tenor.mp3',
          fileSize: 3229822,
        },
        pista: null,
        demo: {
          url: `${RAW_BASE}/Mas%20Adelante/Demo.mp3`,
          fileName: 'Demo.mp3',
          fileSize: 5499438,
        },
        soprano: null,
        contralto: null,
        bajo: null,
      },
    },
    {
      id: 'song-5',
      number: 5,
      title: 'Medley Regreso de Jesús',
      subtitle: 'Música en Familia 2026',
      category: '',
      composer: 'Coral Música en Familia',
      resources: {
        tenor: {
          url: `${RAW_BASE}/Medley%20Regreso%20de%20Jes%C3%BAs/Tenor.MP3`,
          fileName: 'Tenor.MP3',
          fileSize: 4906472,
        },
        pista: {
          url: `${RAW_BASE}/Medley%20Regreso%20de%20Jes%C3%BAs/Pista.mp3`,
          fileName: 'Pista.mp3',
          fileSize: 7363532,
        },
        demo: {
          url: `${RAW_BASE}/Medley%20Regreso%20de%20Jes%C3%BAs/Demo.mp3`,
          fileName: 'Demo.mp3',
          fileSize: 7361652,
        },
        soprano: null,
        contralto: null,
        bajo: null,
      },
    },
  ];
}
