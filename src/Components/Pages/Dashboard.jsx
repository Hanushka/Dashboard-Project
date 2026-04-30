import Cards from "../UI/Cards";
import Graphs from "../UI/Graphs";
import Products from "../UI/Products";

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-4xl mb-2">Dashboard</h1>
      <p className="text-lg mb-4">Your main content goes here…</p>

      <div className="space-y-8">
        <Cards />
        <Graphs />
        <Products />
      </div>
    </div>
  );
}
