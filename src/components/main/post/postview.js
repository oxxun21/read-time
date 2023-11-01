import React from "react";
import s from "./postview.module.css";
import { getServerSession } from "next-auth";
import Myposts from "./myposts";
import Randomposts from "./randomposts";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

async function PostView() {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <ul className={s.postViewList}>
      {session ? <Myposts /> : <Randomposts />}
    </ul>
  );
}

export default PostView;
