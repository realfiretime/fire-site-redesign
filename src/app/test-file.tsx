import { Column, Heading, Text } from "@once-ui-system/core";

export default function NotFound() {
  return (
    <Column as="section" fill center paddingBottom="160">
      <Text marginBottom="s" variant="display-strong-xl">
        Test Page
      </Text>
      <Heading marginBottom="l" variant="display-default-xs">
        This is a test page
      </Heading>
      <Text onBackground="neutral-weak">i dont know why it exists</Text>
    </Column>
  );
}
