import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const authorsFilePath = path.join(process.cwd(), "content", "authors.json");

const DEFAULT_AUTHORS = [
  {
    id: "aashrut-sharma",
    name: "Aashrut Sharma",
    role: "Founder & Architect",
    bio: "Working on unified digital public infrastructure for Indian college admissions.",
    email: "aashrut@superadmission.com",
  },
  {
    id: "superadmission-team",
    name: "Superadmission Team",
    role: "Core Protocol Team",
    bio: "Engineering and policy updates from the Superadmission development group.",
    email: "team@superadmission.com",
  },
  {
    id: "vedant-sharma",
    name: "Vedant Sharma",
    role: "Research & Systems",
    bio: "Focusing on seat reconciliation algorithms and multi-round counselling dynamics.",
    email: "vedant@superadmission.com",
  },
];

export async function GET() {
  try {
    if (!fs.existsSync(authorsFilePath)) {
      fs.writeFileSync(authorsFilePath, JSON.stringify(DEFAULT_AUTHORS, null, 2), "utf-8");
      return NextResponse.json({ authors: DEFAULT_AUTHORS });
    }
    const raw = fs.readFileSync(authorsFilePath, "utf-8");
    const authors = JSON.parse(raw);
    return NextResponse.json({ authors });
  } catch (error: any) {
    return NextResponse.json({ authors: DEFAULT_AUTHORS });
  }
}

export async function POST(request: Request) {
  try {
    const newAuthor = await request.json();
    let authors = DEFAULT_AUTHORS;

    if (fs.existsSync(authorsFilePath)) {
      const raw = fs.readFileSync(authorsFilePath, "utf-8");
      authors = JSON.parse(raw);
    }

    const existingIndex = authors.findIndex((a) => a.id === newAuthor.id);
    if (existingIndex >= 0) {
      authors[existingIndex] = { ...authors[existingIndex], ...newAuthor };
    } else {
      authors.push(newAuthor);
    }

    fs.writeFileSync(authorsFilePath, JSON.stringify(authors, null, 2), "utf-8");
    return NextResponse.json({ success: true, authors });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
