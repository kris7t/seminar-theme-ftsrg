import { ContentMasterProps, TitleMasterProps, useSlideView } from "@seminar/core";
import { styled } from '@mui/material/styles';
import { useThemeProps } from "@mui/material";
import { FtsrgCornerLogo } from "./FtsrgLogo";

const FOOTER_COLOR = '#a7a8a7';

const FtsrgSlideMasterRoot = styled('section', {
  name: 'FtsrgSlideMaster',
  slot: 'Root',
})({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
});

const FtsrgSlideMasterContent = styled('main', {
  name: 'FtsrgSlideMaster',
  slot: 'Content',
})(({ theme }) => ({
  position: 'relative',
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  padding: theme.spacing(4, 8),
}));

const FtsrgSlideMasterFooter = styled('footer', {
  name: 'FtsrgSlideMaster',
  slot: 'Footer',
})(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  height: theme.spacing(6),
}));

const FtsrgSlideMasterFooterBackground = styled('div', {
  name: 'FtsrgSlideMaster',
  slot: 'FooterBackground',
})({
  flexGrow: 1,
  background: FOOTER_COLOR,
});

const FtsrgSlideMasterSlideNumber = styled('div', {
  name: 'FtsrgSlideNumber',
  slot: 'Footer',
})({
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  fontSize: 18,
});

const FtsrgSlideMasterLogo = styled(FtsrgCornerLogo, {
  name: 'FtsrgSlideMaster',
  slot: 'Logo',
})({
  flexShrink: 0,
});

const FtsrgContentMasterTitle = styled('h1', {
  name: 'FtsrgContentMaster',
  slot: 'Title',
})(({ theme }) => ({
  ...theme.typography.h2,
  margin: 0,
}));

const FtsrgContentMasterBody = styled('div', {
  name: 'FtsrgContentMaster',
  slot: 'Body',
})({
  flex: 1,
  minHeight: 0,
});

export function FtsrgSlideMaster({ className, children, showSlideNumber = true }: Omit<ContentMasterProps, 'title'>) {
  const { index } = useSlideView();
  return (
    <FtsrgSlideMasterRoot className={className}>
      <FtsrgSlideMasterContent>
        {children}
      </FtsrgSlideMasterContent>
      <FtsrgSlideMasterFooter>
        <FtsrgSlideMasterFooterBackground />
        {showSlideNumber && (
          <FtsrgSlideMasterSlideNumber>
            {index + 1}
          </FtsrgSlideMasterSlideNumber>
        )}
        <FtsrgSlideMasterLogo footerColor={FOOTER_COLOR} />
      </FtsrgSlideMasterFooter>
    </FtsrgSlideMasterRoot>
  )
}

export function FtsrgContentMaster(inProps: ContentMasterProps) {
  const { title, children, ...props } = useThemeProps({ props: inProps, name: 'FtsrgContentMaster' });
  return (
    <FtsrgSlideMaster {...props}>
      {title !== undefined && <FtsrgContentMasterTitle>{title}</FtsrgContentMasterTitle>}
      <FtsrgContentMasterBody>{children}</FtsrgContentMasterBody>
    </FtsrgSlideMaster>
  )
}
