import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const domains = [
  {
    name: "FusionAgent.ai",
    tagline: "Modular, tool-augmented AI agent framework.",
    github: "https://github.com/yourusername/fusionagent",
    page: "/fusionagent",
  },
  {
    name: "CryptoFusion.ai",
    tagline: "Where AI meets blockchain. Web3 + Intelligence.",
    github: "https://github.com/yourusername/cryptofusion",
    page: "/cryptofusion",
  },
  {
    name: "ZkAgent.ai",
    tagline: "Zero-knowledge based autonomous AI agents.",
    github: "https://github.com/yourusername/zkagent",
    page: "/zkagent",
  },
  {
    name: "FinAgent.ai",
    tagline: "Finance-focused AI agents for automation & trading.",
    github: "https://github.com/yourusername/finagent",
    page: "/finagent",
  },
  {
    name: "StableAgent.ai",
    tagline: "Reliable, production-grade intelligent agents.",
    github: "https://github.com/yourusername/stableagent",
    page: "/stableagent",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-center">Premium AI Domain Projects</h1>
      <p className="text-center text-lg mb-10 text-gray-600">
        Discover visionary domain names with real projects and open-source starters.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {domains.map((domain) => (
          <Card key={domain.name} className="shadow-md">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{domain.name}</h2>
              <p className="text-gray-700 mb-4">{domain.tagline}</p>
              <div className="flex flex-col gap-2">
                <Link href={domain.github} target="_blank">
                  <Button variant="outline">View on GitHub</Button>
                </Link>
                <Link href={domain.page}>
                  <Button>Learn More</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}