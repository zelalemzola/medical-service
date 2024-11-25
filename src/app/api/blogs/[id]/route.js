import { connectdb } from '@/lib/config/db';
import Blog from '@/lib/models/Blog'; // Adjust the path according to your project structure
import { NextResponse } from 'next/server';

const LoadDB = async () => {
  await connectdb();
};
LoadDB();

export async function GET(request, { params }) {
  const { id } = params;
  const blog = await Blog.findById(id);
  
  if (!blog) {
    return NextResponse.json({ msg: 'Blog not found' }, { status: 404 });
  }

  return NextResponse.json({ blog });
}
