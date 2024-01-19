import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination3'

export function PaginationDemo() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="/blog/page2" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="/blog">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="/blog/page2">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="/blog/page3" isActive>
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="/blog/page3" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
