export default async function AboutPage() {
  await new Promise((res) => setTimeout(res, 4000));
  throw new Error("Something went wrong");
  return (
    <div>
      <h1>This is about page</h1>
    </div>
  );
}
