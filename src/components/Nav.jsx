import SearchTopics from "./SearchTopics";
import SearchArticles from "./SearchArticles";

export default function Nav() {
  return (
    <div className="search-container">
      <SearchTopics />
      <SearchArticles />
    </div>
  );
}