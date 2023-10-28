import React from "react";
import s from "./postview.module.css";
import { getServerSession } from "next-auth";
import Myposts from "./myposts";
import Randomposts from "./randomposts";

async function PostView() {
  const session = await getServerSession();

  return (
    <ul className={s.postViewList}>
      {session ? <Myposts /> : <Randomposts />}
    </ul>
  );
}

export default PostView;
