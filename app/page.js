import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

 

export default function Home() {
  return (
    <div>
      <h1>Palak</h1>
      <Button>HEYA</Button>
      <UserButton/>
    </div>
  );
}
