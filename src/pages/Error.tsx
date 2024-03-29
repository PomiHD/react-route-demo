import MainNavigation from "../components/MainNavigation.tsx";

export default function Error() {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>Page Not Found!</h1>
        <p>
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
      </main>
    </>
  );
}
