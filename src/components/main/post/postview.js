"use client";
import React, { useEffect, useState } from "react";
import s from "./postview.module.css";
import Image from "next/image";
import trash_icon from "@/assets/trash_icon.png";
import Modal from "@/components/modal/modal";

function PostView() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const response = await fetch("/api/postview", { cache: "no-store" });
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    dataFetch();
  }, []);

  const openModal = () => {
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
        <p>Loading...</p>
      ) : (
        <ul className={s.postViewList}>
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
              <button type="button" onClick={openModal}>
                <Image
                  src={trash_icon}
                  alt="게시글 삭제"
                  width={20}
                  height={20}
                />
              </button>
              {isModalOpen && (
                <Modal closeModal={closeModal}>
                  <p>게시글을 삭제하시겠습니까?</p>
                  <div className={s.modalBtnDiv}>
                    <button type="button" onClick={closeModal}>
                      남겨둘래요
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(post._id)}
                    >
                      삭제할래요
                    </button>
                  </div>
                </Modal>
              )}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default PostView;
