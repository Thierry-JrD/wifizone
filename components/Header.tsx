interface Props {
    title: string,
    description: string
}

const Header = ({title, description}: Props) => {
  return (
    <header className="header">
        <article>
            {title && <h1 className="text-dark-100 text-2xl md:text-4xl font-bold">{title}</h1>}
            {description && <p className="text-gray-400">{description}</p>}
        </article>
    </header>
  )
}

export default Header
