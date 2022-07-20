import PropTypes from 'prop-types';
import {
  ProfileItem,
  Description,
  Image,
  StatList,
  StatItem,
  Quantity,
} from './Profile.styled';

export function Profile({ username, tag, location, avatar, stats }) {
  return (
    <ProfileItem>
      <Description>
        <Image src={avatar} alt="User avatar" />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </Description>

      <StatList>
        <StatItem>
          <span className="label">Followers</span>
          <Quantity>{stats.followers}</Quantity>
        </StatItem>
        <StatItem>
          <span className="label">Views</span>
          <Quantity>{stats.views}</Quantity>
        </StatItem>
        <StatItem>
          <span className="label">Likes</span>
          <Quantity>{stats.likes}</Quantity>
        </StatItem>
      </StatList>
    </ProfileItem>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number.isRequired),
};
