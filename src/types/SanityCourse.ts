export interface CourseSanity {
    id: string;
    level: string;
    skills: string[];
    languages: string[];
    learnList: string[];
    resources?: number;
    totalHours?: number;
    teachers: Teacher[];
    lessons: Lesson[];
    totalQuizzes?: number;
    totalReviews?: number;
    totalStudents?: number;
    createdAt?: string;
    category: string;
    slug: string;
    bestSeller?: boolean;
    coverUrl: string;
    ratingNumber?: number;
    description?: string;
    price?: number;
    priceSale?: number;
    shareLinks: {
      facebook?: string;
      instagram?: string;
      linkedin?: string;
      twitter?: string;
    };
  }

export interface Lesson {
    id: string;
    duration: number;
    title: string;
    videoPath: string;
    description: string;
    unLocked: boolean;
  }

  export interface Teacher {
    id: string;
    role: string;
    name: string;
    avatarUrl: string;
    totalCourses: number;
    totalReviews: number;
    totalStudents: number;
    ratingNumber: number;
  }