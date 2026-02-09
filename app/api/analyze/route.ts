import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { url } = body;

    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }

    // Mock analysis delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Mock response data
    const mockResponse = {
      viral_score: 85,
      hook: "Stop wasting time on manual outreach. Here's how to automate it in 3 steps.",
      script: `
[SCENE 1]
Host: "Are you still sending cold DMs one by one?"
Visual: Split screen showing a tired person typing vs. a dashboard working automatically.

[SCENE 2]
Host: "Stop. I found a tool that does the heavy lifting for you."
Visual: Screen recording of the P2P Growth Engine dashboard.

[SCENE 3]
Host: "It analyzes profiles, finds the perfect angle, and drafts the message."
Visual: Zoom in on the 'Analyze' button and the result.

[SCENE 4]
Host: "Link in bio to try it out."
Visual: Call to action overlay.
      `,
      visual_brief: {
        style: "Tech/Minimalist",
        color_palette: ["#10B981", "#18181B", "#FFFFFF"],
        scenes: [
          { description: "Tired person typing", duration: "3s" },
          { description: "Dashboard screen recording", duration: "5s" },
          { description: "Close up of analysis result", duration: "4s" },
          { description: "CTA Overlay", duration: "3s" }
        ]
      }
    };

    return NextResponse.json(mockResponse);

  } catch (error) {
    return NextResponse.json({ error: 'Failed to analyze URL' }, { status: 500 });
  }
}
