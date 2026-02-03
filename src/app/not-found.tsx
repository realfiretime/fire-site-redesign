import { Column, Heading, Text, AutoScroll, Logo, Fade } from "@once-ui-system/core";

export default function NotFound() {
  return (
    <Column as="section" fill center paddingBottom="160">
      <Text marginBottom="s" variant="display-strong-xl">
        404
      </Text>
      <Heading marginBottom="l" variant="display-default-xs">
        Page Not Found
      </Heading>
      <Text onBackground="neutral-weak">The page you are looking for does not exist.</Text>
        <>
          <Fade zIndex="1" to="right" fillHeight width="64" position="absolute" left="0" top="0"/>
          <AutoScroll speed="fast" paddingY="40">
                <Logo wordmark="/trademarks/wordmark-light.svg" size="xxl" href="https://firetime.me" dark/>
                <Logo wordmark="/trademarks/wordmark-light.svg" size="xxl" href="https://firetime.me" light/>
                <Logo wordmark="/trademarks/wordmark-light.svg" size="xxl" href="https://firetime.me" dark/>
                <Logo wordmark="/trademarks/wordmark-light.svg" size="xxl" href="https://firetime.me" light/>
                <Logo wordmark="/trademarks/wordmark-light.svg" size="xxl" href="https://firetime.me" dark/>
                <Logo wordmark="/trademarks/wordmark-light.svg" size="xxl" href="https://firetime.me" light/>
          </AutoScroll>
        <Fade zIndex="1" to="right" fillHeight width="64" position="absolute" left="0" top="0"/>
      </>
    </Column>
  );
}
