import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useTheme } from '@emotion/react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
function NewsCard(props) {
  const theme = useTheme()
  return (
    <Card sx={{
      display: 'flex',
      width: '100%',
      m: '0 auto',
      boxShadow: theme.boxShadow.main,
      cursor: 'pointer',
      transition: 'transform 0.2s ease',
      '&:hover': {
        // boxShadow: theme.boxShadow.hover,
        transform: 'scale(1.01)',
      }
    }} >
      <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <CardContent sx={{ flex: '1' }}>
          <Typography component="div" variant="subtitle1"
            sx={{
              color: 'text.secondary',
              height: '30px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 1 //
            }}
          >
            {props.data.title}
          </Typography>
          <Typography
            variant="caption"
            component="div"
            sx={{
              color: 'text.secondary',
              height: '40px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 2 // Số dòng hiển thị trước khi bị cắt
            }}
          >
            {props.data.content}
          </Typography>
          <Typography
            variant="caption"
            component="div"
            sx={{ color: 'text.secondary', mt: '10px' }}
          >
            {props.data.author}
          </Typography>

          <Typography
            variant="caption"
            component="div"
            sx={{ color: 'text.secondary' }}
          >
            {props.data.year}
          </Typography>

        </CardContent>
        <Link to={'/chi-tiet-sach'}>
          <Button variant='contained' sx={{
            textTransform: 'unset',
            fontSize: '12px',
            width: 'fit-content',
            height: 'fit-content',
            padding: 0,
            m: '0px 0 10px 10px',
            borderRadius: '0'
          }}>Chi tiết</Button>
        </Link>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 160, aspectRatio: '6 / 9' }}
        image={props.data.coverUrl}
        alt="Đắc nhân tâm"
      />
    </Card >
  );
}

export default NewsCard;