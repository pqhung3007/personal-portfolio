export interface ArticleMetadata {
  title: string;
  description: string;
  date: string;
  slug: string;
}

export interface SocialLinkProps {
  href: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  className?: string;
  children?: React.ReactNode;
}

export interface LayoutProps {
  title: string;
  intro: string;
  children: React.ReactNode;
}
