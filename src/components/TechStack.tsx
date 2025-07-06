"use client";
import React from "react";
import { Column, Heading, Text, RevealFx } from "@once-ui-system/core";
import Image from "next/image";

// Tech stack data with SVG paths
const techStack = [
  {
    name: "React",
    svg: "/trademarks/React.svg",
  },
  {
    name: "Next.js",
    svg: "/trademarks/Next.js.svg",
  },
  {
    name: "TypeScript",
    svg: "/trademarks/TypeScript.svg",
  },
  {
    name: "PostgreSQL",
    svg: "/trademarks/PostgresSQL.svg",
  },
  {
    name: "Tailwind",
    svg: "/trademarks/Tailwind.svg",
  },
  {
    name: "Rust",
    svg: "/trademarks/Rust.svg",
  },
];

export const TechStack: React.FC = () => {
  return (
    <Column gap="l" fillWidth wrap={true} horizontal="start">
      {/* Section heading */}
      <RevealFx translateY="8" fillWidth horizontal="start">
        <Heading variant="display-strong-m" marginBottom="s">
          Tech Stack
        </Heading>
        <Text
          variant="body-default-l"
          onBackground="neutral-weak"
          marginBottom="l"
        ></Text>
      </RevealFx>

      {/* Tech stack grid */}
      <RevealFx translateY="8" delay={0.2} fillWidth>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
            gap: "1rem",
            maxWidth: "1000px",
            width: "100%",
          }}
        >
          {techStack.map((tech, index) => (
            <RevealFx key={tech.name} translateY="8" delay={0.1 * index}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "1rem",
                  borderRadius: "8px",
                  border: "1px solid var(--neutral-alpha-weak)",
                  backgroundColor: "var(--neutral-alpha-weak)",
                  transition: "all 0.2s ease",
                  cursor: "pointer",
                  minHeight: "80px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.backgroundColor =
                    "var(--neutral-alpha-medium)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.backgroundColor =
                    "var(--neutral-alpha-weak)";
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    src={tech.svg}
                    alt={`${tech.name} logo`}
                    width={24}
                    height={24}
                    style={{
                      objectFit: "contain",
                      filter: "var(--icon-filter)",
                    }}
                  />
                </div>
                <Text
                  variant="label-default-xs"
                  style={{
                    textAlign: "center",
                    fontWeight: "500",
                    fontSize: "0.75rem",
                  }}
                >
                  {tech.name}
                </Text>
              </div>
            </RevealFx>
          ))}
        </div>
      </RevealFx>
    </Column>
  );
};
