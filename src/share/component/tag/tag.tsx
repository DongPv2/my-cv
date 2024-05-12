import './tag.scss'

interface ITagProps {
    tags: string
}

export default function Tag(props: ITagProps) {


    const arrTags = props.tags.split(",");
    return <ul className="tags">
        {arrTags.map((item, index) => {
            return <li key={index}><span className="tag">{item.trim()}</span></li>
        })}
    </ul>
}