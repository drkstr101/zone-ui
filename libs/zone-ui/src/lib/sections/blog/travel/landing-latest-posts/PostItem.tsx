import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Divider, Link, Typography } from '@mui/material';
// utils
import { fDate } from '../../../../utils/formatTime';
// routes
import { paths } from '../../../../routes/paths';
// types
import { IBlogPostProps } from '../../../../types/blog';
// components
import TextMaxLine from '../../../../components/text-max-line';

// ----------------------------------------------------------------------

type Props = {
  post: IBlogPostProps;
};

export default function PostItem({ post }: Props) {
  const { title, description, createdAt } = post;

  return (
    <div>
      <Typography variant="caption" sx={{ color: 'primary.main' }}>
        {fDate(createdAt)}
      </Typography>

      <Link
        component={RouterLink}
        to={paths.travel.post}
        sx={{ color: 'common.white' }}
      >
        <TextMaxLine variant="h5" sx={{ mt: 1, mb: 2 }}>
          {title}
        </TextMaxLine>
      </Link>

      <TextMaxLine variant="body2" sx={{ color: 'text.secondary' }}>
        {description}
      </TextMaxLine>

      <Divider sx={{ borderStyle: 'dashed', mt: 3 }} />
    </div>
  );
}
