
import { useEffect, useState } from "react";

export default function Profile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log("서버 요청 발생:", userId);

    // 서버 요청 흉내
    setTimeout(() => {
      setUser({ id: userId, name: `User ${userId}` });
    }, 3000);
  }, [userId]);

  if (!user) return <p>로딩중...</p>;

  return <p>이름: {user.name}</p>;
}
