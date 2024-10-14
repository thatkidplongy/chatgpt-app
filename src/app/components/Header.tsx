import { signIn, signOut } from "@/auth";
import NavigationLinks from "./NavigationLinks";
import UserButton from "./UserButton";

function Header() {
  return (
    <header className="font-bold bg-card text-2xl p-2 mb-3 rounded-b-lg flex shadow-md shadow-gray-700 border-2 border-gray-700">
      <NavigationLinks />
      <div>
        <UserButton
          onSignIn={async () => {
            "use server";
            await signIn();
          }}
          onSignOut={async () => {
            "use server";
            await signOut();
          }}
        />
      </div>
    </header>
  );
}

export default Header;
