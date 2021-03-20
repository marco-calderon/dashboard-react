import { Feed } from "../../models/feed.model";
import FeedRow from '../../components/FeedRow';

const FeedComponent = (props: { data: Array<Feed>}) => {
  const { data } = props;
  return (
    <ul className="list-style-none feed-body m-0 p-b-20">
      {data && data.map(d => (<FeedRow data={d} />))}
    </ul>
  );
}

export default FeedComponent;
