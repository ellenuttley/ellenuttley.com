import { htmlContent } from '../html/merlinTickets.html'

// Import Swiper styles
import 'swiper/css/bundle';

const SeeMyWork = () => (
    <div >
    <div dangerouslySetInnerHTML={{__html: htmlContent}} />;
    </div>
  );

export default SeeMyWork;