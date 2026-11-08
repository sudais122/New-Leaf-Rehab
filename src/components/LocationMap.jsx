import Reveal from './Reveal';
import { MAP_EMBED_URL } from '../data/site';

export default function LocationMap() {
  return (
    <Reveal className="map-box">
      <iframe
        title="New Leaf Rehab Center location"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src={MAP_EMBED_URL}
      ></iframe>
    </Reveal>
  );
}
