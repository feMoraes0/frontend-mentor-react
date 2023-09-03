import "./card.css";
import Image from "next/image";

type CardProps = {
  title: string,
  content: string,
  color: string,
  imageName: string,
}

export default function Card({ title, content, color, imageName }: CardProps) {
  return (
    <article className="card" style={{ borderTopColor: color }}>
      <h3 className="card__title">
        { title }
      </h3>
      <p className="card__content">
        { content }
      </p>
      <Image
        className="card__image"
        src={`/four-card-feature/${imageName}.svg`}
        width="58"
        height="58"
        alt={imageName}
      />
    </article>
  )
}
