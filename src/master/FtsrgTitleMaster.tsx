import { TitleMasterProps } from "@seminar/core";
import { styled } from '@mui/material/styles';
import { useThemeProps } from "@mui/material";

import titleBackground from "./title-background.avif";
import titleBackgroundTop from "./title-background-top.avif";

const FtsrgTitleMasterRoot = styled('section', {
  name: 'FtsrgTitleMaster',
  slot: 'Root',
})({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  backgroundImage: `url(${titleBackgroundTop})`,
  backgroundSize: 'contain',
  backgroundPosition: 'top',
  backgroundRepeat: 'no-repeat',
});

const FtsrgTitleMasterBody = styled('main', {
  name: 'FtsrgTitleMaster',
  slot: 'Body',
})(({ theme }) => ({
  marginTop: '80px',
  width: '100%',
  height: '480px',
  backgroundImage: `url(${titleBackground}), radial-gradient(circle at 40% 50%, #1a191a 0%, #2d2f2e 100%)`,
  backgroundSize: 'contain',
  flexDirection: 'column',
  gap: theme.spacing(4),
  padding: theme.spacing(8, 16),
}));

const FtsrgTitleMasterTitle = styled('h1', {
  name: 'FtsrgTitleMaster',
  slot: 'Title',
})(({ theme }) => ({
  ...theme.typography.h1,
  margin: 0,
  color: theme.palette.primary.contrastText,
}));

const FtsrgTitleMasterSubtitle = styled('div', {
  name: 'FtsrgTitleMaster',
  slot: 'Subtitle',
})(({ theme }) => ({
  ...theme.typography.subtitle1,
  color: theme.palette.primary.contrastText,
}));

export function FtsrgTitleMaster(inProps: TitleMasterProps) {
  const { title, children } = useThemeProps({ props: inProps, name: 'FtsrgTitleMaster' });
  return (
    <FtsrgTitleMasterRoot>
      <FtsrgTitleMasterBody>
        {title && <FtsrgTitleMasterTitle>{title}</FtsrgTitleMasterTitle>}
        <FtsrgTitleMasterSubtitle>{children}</FtsrgTitleMasterSubtitle>
      </FtsrgTitleMasterBody>
    </FtsrgTitleMasterRoot>
  );
}
