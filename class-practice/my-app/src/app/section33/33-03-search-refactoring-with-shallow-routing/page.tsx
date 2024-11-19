import Search from "../../../components/33-03-search-refactoring-with-shallow-routing/search";
import List from "../../../components/33-03-search-refactoring-with-shallow-routing/list";
import Pagination from "../../../components/33-03-search-refactoring-with-shallow-routing/pagination";

export default function StaticRoutingMovedPage() {
  return (
    <div>
      <Search />
      <List />
      <Pagination />
    </div>
  );
}
