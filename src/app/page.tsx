import AllComments from "@/components/allComments";
import CreateComment from "@/components/createComment";
import AllCommnetsProvider from "@/context/AllCommentsProvider";

export default function Home() {
  return (
    <AllCommnetsProvider>
      <main>
        <AllComments />
        <CreateComment />
      </main>
    </AllCommnetsProvider>
  );
}
