'use client'

import { cn, randomColors } from '@/lib/utils'

export const HomeMyCourse = () => {
  return (
    <div className="flex flex-row gap-2 ">
      <HomeMyCourseCard
        course={{
          title: 'Course Title',
          description: 'Course Description',
          image: 'https://source.unsplash.com/random',
          progress: 50,
          saved: false,
          members: 100,
          category: 'programming',
        }}
        onClick={() => {}}
      />
    </div>
  )
}

interface HomeMyCourseCardProps {
  course: {
    title: string
    description: string
    image: string
    progress: number
    category: 'programming' | 'design' | 'business' | 'marketing'
    saved: boolean
    members: number
  }
  onClick: () => void
}

export const HomeMyCourseCard: React.FC<HomeMyCourseCardProps> = ({
  course,
}) => {
  const color = randomColors()
  return (
    <div
      className={cn([
        ' rounded-[30px] flex flex-col p-6 gap-4 border  shadow-lg',
      ])}
      style={{ backgroundColor: color }}
    >
      <BoxLabel>{course.category}</BoxLabel>
      <div></div>
    </div>
  )
}

export const BoxLabel = ({ children }: { children: React.ReactNode }) => {
  const color = randomColors()

  return (
    <div
      style={{
        backgroundColor: color,
      }}
      className="rounded-xl  border px-2 py-1"
    >
      <span className="text-sm  text-white">{children}</span>
    </div>
  )
}
