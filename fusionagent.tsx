import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function FusionAgentaiPage() {
  return (
    <div className="min-h-screen px-8 py-12 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">FusionAgent.ai</h1>
        <p className="text-lg text-gray-600 mb-6">
          A visionary domain project combining AI technology with a specific industry edge.
        </p>
        <p className="mb-4">
          This domain is backed by a GitHub starter project with structured code, documentation, and a professional README.
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>MIT-licensed GitHub repo</li>
          <li>Starter ZIP package ready for download</li>
          <li>Suggested use cases: enterprise AI, web3 tools, automation</li>
        </ul>
        <div className="flex gap-4 mb-8">
          <Link href="https://github.com/yourusername/fusionagent" target="_blank">
            <Button variant="outline">View GitHub Repo</Button>
          </Link>
          <Link href="/downloads/fusionagent_starter.zip" target="_blank">
            <Button>Download Starter ZIP</Button>
          </Link>
        </div>
        <h2 className="text-2xl font-semibold mb-2">Interested in acquiring this domain?</h2>
        <p className="mb-4">Contact us at <a href="mailto:youremail@example.com">youremail@example.com</a></p>
      </div>
    </div>
  );
}