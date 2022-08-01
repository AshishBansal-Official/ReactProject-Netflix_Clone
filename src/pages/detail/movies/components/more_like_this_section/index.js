import { Wrapper, SimilarContainer } from "./styles/more_like_this_section";
import { Link } from "react-router-dom";

const MoreLikeThisSection = ({ data }) => {
    return (
        <Wrapper>
            {data.map((similar, index) => (
                <Link to={`/title/${similar.id}`} key={index}>
                    <SimilarContainer
                        imageUrl={`${process.env.REACT_APP_IMAGES_BASE_URL}${similar.backdrop_path}`}
                    >
                        <span>{similar.title}</span>
                        <span className="list_gradient"></span>
                    </SimilarContainer>
                </Link>
            ))}
        </Wrapper>
    );
};

export default MoreLikeThisSection;
