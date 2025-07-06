import React from "react";

import {
  Heading,
  Flex,
  Text,
  Button,
  Avatar,
  Column,
  Badge,
  Row,
  Meta,
  Schema,
} from "@once-ui-system/core";
import { home, about, person, newsletter, baseURL, routes } from "@/resources";
import { Projects } from "@/components/work/Projects";
import { Posts } from "@/components/blog/Posts";
import { RevealFx } from "@once-ui-system/core";
import { TechStack } from "@/components/TechStack";

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" horizontal="center">
      {/* Schema for SEO and social sharing, using Ali Chehab's info */}
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth paddingY="24" gap="m">
        <Column maxWidth="l">
          {/* Featured project: SweepChain */}
          <RevealFx
            fillWidth
            horizontal="start"
            paddingTop="16"
            paddingBottom="32"
            paddingLeft="12"
          >
            <Badge
              background="brand-alpha-weak"
              paddingX="12"
              paddingY="4"
              onBackground="neutral-strong"
              textVariant="label-default-s"
              arrow={false}
              href={home.featured.href}
            >
              <Row paddingY="2">{home.featured.title}</Row>
            </Badge>
          </RevealFx>
          {/* Main headline about Ali Chehab */}
          <RevealFx
            translateY="8"
            fillWidth
            horizontal="start"
            paddingBottom="16"
          >
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          {/* Subline/intro about Ali Chehab */}
          <RevealFx
            translateY="8"
            delay={0.2}
            fillWidth={true}
            horizontal="start"
            paddingBottom="16"
          >
            <Text
              wrap="balance"
              onBackground="neutral-weak"
              variant="heading-default-xl"
            ></Text>
          </RevealFx>
          {/* About button with avatar */}
          <RevealFx
            paddingTop="12"
            delay={0.4}
            horizontal="start"
            paddingLeft="12"
          >
            <Button
              id="about"
              data-border="rounded"
              href={about.path}
              variant="secondary"
              size="m"
              weight="default"
              arrowIcon
            >
              <Flex gap="8" vertical="center" paddingRight="4">
                {about.avatar.display && (
                  <Avatar
                    marginRight="8"
                    style={{ marginLeft: "-0.75rem" }}
                    src={person.avatar}
                    size="m"
                  />
                )}
                {about.title}
              </Flex>
            </Button>
          </RevealFx>
        </Column>
      </Column>
      {/* Highlight Ali Chehab's other projects with prominent links */}
      <RevealFx
        translateY="8"
        delay={0.5}
        fillWidth
        horizontal="start"
        paddingBottom="12"
      >
        <Flex gap="16" horizontal="center" wrap>
          {/* Trustline Credit */}
          <Badge
            background="accent-alpha-medium"
            paddingX="12"
            paddingY="4"
            onBackground="neutral-strong"
            textVariant="label-default-s"
            arrow={false}
            href="https://www.trustlinecredit.com"
          >
            <Row paddingY="2">Trustline Credit</Row>
          </Badge>
          {/* DoubleUp */}
          <Badge
            background="accent-alpha-medium"
            paddingX="12"
            paddingY="4"
            onBackground="neutral-strong"
            textVariant="label-default-s"
            arrow={false}
            href="https://www.doubleup.fun/"
          >
            <Row paddingY="2">DoubleUp</Row>
          </Badge>
          {/* SweepChain GitHub */}
          <Badge
            background="accent-alpha-medium"
            paddingX="12"
            paddingY="4"
            onBackground="neutral-strong"
            textVariant="label-default-s"
            arrow={false}
            href="https://sui-drab.vercel.app"
          >
            <Row paddingY="2">SweepChain</Row>
          </Badge>
        </Flex>
      </RevealFx>
      <TechStack />
    </Column>
  );
}
