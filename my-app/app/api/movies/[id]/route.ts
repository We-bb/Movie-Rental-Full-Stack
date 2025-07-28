import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const data = await request.json();

  try {
    const updatedMovie = await prisma.movie.update({
      where: { id },
      data,
    });
    return NextResponse.json(updatedMovie);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update movie' }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    await prisma.movie.delete({
      where: { id },
    });
    return NextResponse.json({ message: 'Movie deleted' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete movie' }, { status: 500 });
  }
}
