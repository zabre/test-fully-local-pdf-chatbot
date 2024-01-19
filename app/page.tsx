import { ChatWindow } from "@/components/ChatWindow";

export default function Home() {
  return (
    <ChatWindow
      emoji="🏴‍☠️"
      titleText="Un agent interne qui lit vos documents à votre place et répond à vos questions"
      placeholder="La question doit concerner une thématique du corpus de recherche"
    ></ChatWindow>
  );
}
