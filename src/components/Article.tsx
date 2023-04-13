import { formatDate } from "@/utils/formatDate";
import { ArticleMetadata } from "@/utils/types";
import { Card } from "./Card";

export default function Article({ article }: { article: ArticleMetadata }) {
  return (
    <Card>
      <Card.HelperText>{formatDate(article.date)}</Card.HelperText>
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  );
}
