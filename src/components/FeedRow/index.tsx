import { Feed } from "../../models/feed.model";
import * as timeago from 'timeago.js';
import { capFirstLetter } from "../../library/functions";
import { mdiCheck, mdiCubeOutline, mdiInbox, mdiMapMarker, mdiSetNone, mdiViewList } from "@mdi/js";
import Icon from "@mdi/react";
import './style.scss';

const getIcon = (icon: string | undefined) => {
  switch(icon) {
    case 'task':
      return mdiViewList;
    case 'project':
      return mdiInbox;
    case 'order':
      return mdiCubeOutline;
    case 'money':
      return mdiCheck;
    case 'mapMarker':
      return mdiMapMarker;
    default:
      return mdiSetNone;
  }
}

const getClass = (priority: string | undefined) => {
  switch(priority) {
    case 'High':
      return 'text-danger';
    case 'Medium':
      return 'text-success';
    case 'Low':
      return 'text-info';
    default:
      return 'text-dark';
  }
}

const FeedRow = (props: { data: Feed }) => {
  const { data } = props;
  return (
    <li className="feed-item">
      <div className={"feed-icon " + getClass(data.priority)}>
        <Icon path={getIcon(data.icon)} size={1} />
      </div>
      <div className="feed-description-container">
        <span className="feed-description">{data.description}</span>
        <span className="ms-auto font-12 text-muted">{capFirstLetter(timeago.format(data.date))}</span>
      </div>
    </li>
  );
}

export default FeedRow;
