import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const movies = await prisma.movie.findMany();
    return NextResponse.json(movies);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch movies' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Basic validation
    if (!data.title || !data.actors || !data.releaseYear) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Ensure actors is an array of strings
    if (typeof data.actors === 'string') {
      data.actors = data.actors.split(',').map((a: string) => a.trim());
    }

    const movie = await prisma.movie.create({ data });
    return NextResponse.json(movie);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create movie' }, { status: 500 });
  }
}
