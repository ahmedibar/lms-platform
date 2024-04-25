import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export const PUT = async (
  req: Request,
  { params }: { params: { courseId: string; chapterId: string } }
) => {
  try {
    const { userId } = auth();
    const { courseId, chapterId } = params;
    const { isCompleted } = await req.json();

    if (!userId) return new NextResponse("Unauthorized", { status: 401 });

    const userProgress = await db.userProgress.upsert({
      where: {
        userId_chapterId: {
          userId: userId,
          chapterId: chapterId,
        },
      },
      update: {
        isCompleted,
      },
      create: {
        userId: userId,
        chapterId: chapterId,
        isCompleted,
      },
    });

    return NextResponse.json(userProgress);
  } catch (error) {
    console.log("[CHAPTER_ID_PROGRESS]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
};
