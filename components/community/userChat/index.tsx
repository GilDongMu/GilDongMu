import { parseISO } from "date-fns";
import Image from "next/image";

interface ChatProps {
  user: {
    chatId: number;
    roomId: number;
    message: string;
    chatType: string;
    createdAt: string;
    user: {
      nickname: string;
      userId: string;
      profilePath: string;
      isCurrentUser: boolean;
    };
  };
}
function UserChat({ user }: ChatProps) {
  const sendDate = parseISO(user.createdAt).toLocaleTimeString("ko-KR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <div className="flex w-full justify-start gap-8">
      <div className="relative h-40 w-40 overflow-hidden rounded-16">
        <Image
          src={user.user.profilePath}
          alt={`${user.user.nickname}의 프로필`}
          fill
        />
      </div>

      <div className="flex flex-1 flex-col gap-4 break-all">
        <div className="text-14 text-text-03">{user.user.nickname}</div>
        {/* 메세지가 여러개면 */}
        <div className="flex w-full items-end gap-8">
          <div className="min-h-35 max-w-max flex-1 rounded-6 bg-stone-100 px-8 py-4 text-18 text-text-01">
            {user.message}
          </div>
          <div className="text-12 text-text-04">{sendDate}</div>
        </div>
        {/* 이 부분 반복..? */}
      </div>
    </div>
  );
}

export default UserChat;