"use client";
import React, { useEffect, useState } from "react";
import s from "./postview.module.css";
import Image from "next/image";
import trash_icon from "@/assets/trash_icon.png";
import Modal from "@/components/modal/modal";
import { useSession } from "next-auth/react";

function PostView() {
  const [posts, setPosts] = useState([]);
  const [randomPosts, setRandomPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deletePost, setDeletePost] = useState();
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      const dataFetch = async () => {
        try {
          const response = await fetch("/api/postview", {
            cache: "no-store",
            credentials: "include",
          });
          const data = await response.json();
          setPosts(data);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };
      dataFetch();
    } else {
      const dataRandomFetch = async () => {
        try {
          const response = await fetch("/api/randompostview");
          const data = await response.json();
          setRandomPosts(data);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };
      dataRandomFetch();
    }
  }, [session]);

  const openModal = (postId) => {
    setDeletePost(postId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDelete = async (postId) => {
    try {
      const response = await fetch(`/api/postdelete/${postId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        const updatedPosts = posts.filter((post) => post._id !== postId);
        setPosts(updatedPosts);
        console.log("삭제 성공");
      } else {
        console.error("게시물 삭제 실패");
      }
    } catch (error) {
      console.error(error);
    }
    setIsModalOpen(false);
  };

  return (
    <>
      {loading ? (
        <div className={s.loading}>
          <p>잠시만 기다려주세요</p>
        </div>
      ) : (
        <ul className={s.postViewList}>
          {session ? (
            <>
              {!posts || posts.length === 0 ? (
                <div className={s.noPosts}>
                  <p>아직 게시글이 없어요</p>
                </div>
              ) : (
                <>
                  {posts.map((post) => (
                    <li key={post._id}>
                      <Image
                        src={post.thumbnail}
                        alt={post.title}
                        width={70}
                        height={100}
                      />
                      <div>
                        <strong>{post.title}</strong>
                        <p>{post.sentence}</p>
                      </div>
                      <button type="button" onClick={() => openModal(post._id)}>
                        <Image
                          src={trash_icon}
                          alt="게시글 삭제"
                          width={20}
                          height={20}
                        />
                      </button>
                    </li>
                  ))}
                </>
              )}
              {isModalOpen && (
                <Modal closeModal={closeModal}>
                  <p>게시글을 삭제하시겠습니까?</p>
                  <div className={s.modalBtnDiv}>
                    <button type="button" onClick={closeModal}>
                      남겨둘래요
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(deletePost)}
                    >
                      삭제할래요
                    </button>
                  </div>
                </Modal>
              )}
            </>
          ) : (
            <>
              {!randomPosts || randomPosts.length === 0 ? (
                <div className={s.noPosts}>
                  <p>아직 게시글이 없어요</p>
                </div>
              ) : (
                <>
                  {randomPosts.map((post) => (
                    <li key={post._id}>
                      <Image
                        src={post.thumbnail}
                        alt={post.title}
                        width={70}
                        height={100}
                      />
                      <div>
                        <strong>{post.title}</strong>
                        <p>{post.sentence}</p>
                        <p className={s.randomPostUser}>{post.username}님</p>
                      </div>
                    </li>
                  ))}
                </>
              )}
            </>
          )}
        </ul>
      )}
    </>
  );
}

export default PostView;
