import { Wrapper, SimilarContainer } from "./styles/more_like_this_section";
import { Link } from "react-router-dom";

const MoreLikeThisSection = ({ data }) => {
    return (
        <Wrapper>
            {data.map((similar, index) => (
                <Link to={`/title/${similar.id}`} key={index}>
                    <SimilarContainer
                        src={`${process.env.REACT_APP_IMAGES_BASE_URL}${similar.poster_path}`}
                        alt=""
                    ></SimilarContainer>
                </Link>
            ))}
        </Wrapper>
    );
};

export default MoreLikeThisSection;
