import { Box, Grid2, Stack, Typography } from '@mui/material';
import React from 'react';
import NewsCard from './NewsCard';
import { useTheme } from '@emotion/react';

function CategoryNews(props) {
  const theme = useTheme();
  return (
    <Box sx={{
      width: '95%',
      margin: '10px auto'
    }}>
      <Stack sx={{
        bgcolor: theme.palette.primary.main,
        mb: '10px',
        borderRadius: '5px'
      }}>
        <Typography sx={{
          padding: '10px 20px',
          color: theme.palette.white.main,
          textTransform: 'unset',
          fontWeight: 600,
        }}>
          {props.title}
        </Typography>
        {/* {
          props.isHomePage ?
            props.title && (
              <Typography sx={{
                padding: '10px 20px',
                color: theme.palette.white.main,
                textTransform: 'unset',
                fontWeight: 600,
              }}>
                {props.title}
              </Typography>
            )
            :
            props.title && <Typography sx={{
              padding: '10px 20px',
              color: theme.palette.white.main,
              textTransform: 'unset',
              fontWeight: 600,
            }}>
              {props.bookList.length} kết quả tìm kiếm dành cho: {props.searchData?.danhMuc} {props.searchData?.tuKhoa}
            </Typography>

        } */}

      </Stack>

      <Grid2 container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 1, md: 4 }} >
        {
          props.isHomePage ?
            props.newsList.slice(0, 6).map((news, index) => (
              <Grid2 key={index} size={{ xs: 1, sm: 1, md: 2 }}>
                <NewsCard data={news} />
              </Grid2>
            ))
            :
            props.newsList.map((news, index) => (
              <Grid2 key={index} size={{ xs: 1, sm: 1, md: 2 }}>
                <NewsCard data={news} />
              </Grid2>
            ))
        }

      </Grid2>
    </Box>

  );
}

export default CategoryNews;